from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport
from gql.transport.exceptions import TransportQueryError

import constants
import datetime
from twitter_contribution.logging import get_logger

logger = get_logger(__name__)


class Tweet:
    id: int
    content: str
    profile_handle: str
    date: datetime.datetime
    url: str


def get_async_transport(url):
    return gql.AIOHTTPTransport(
        url=url, headers={"Authorization": constants.PROTOCOL_TOKEN}
    )


async def execute_query(query, values):
    transport = get_async_transport(constants.PROTOCOL_URL)
    try:
        async with Client(
            transport=transport, fetch_schema_from_transport=False, execute_timeout=30
        ) as session:
            query = gql(query)
            resp = await session.execute(query, variable_values=values)
            return resp
    except Exception:
        logger.exception(f"Failed to execute query {query} {values}")
        raise


class GqlFragments:
    USER_FRAGMENT = """
fragment UserFragment on User {
  createdAt
  display_name
  full_name
  id
  name
  twitter_user {
    id
    username
    createdAt
  }
}
"""

    CONTRIBUTION_FRAGMENT = """
fragment ContributionFragment on Contribution {
  activity_type {
    active
    createdAt
    id
    name
    updatedAt
  }
  date_of_engagement
  date_of_submission
  details
  guilds {
    guild_id
    guild {
        discord_id
        name
    }
    id
  }
  id
  name
  proof
  status {
    createdAt
    id
    name
    updatedAt
  }
  updatedAt
  user {
    address
    createdAt
    display_name
    discord_users {
        discord_id
    }
    full_name
    id
    name
    updatedAt
  }
}
"""

    GUILD_FRAGMENT = """
fragment GuildFragment on Guild {
  id
  createdAt
  name
  status
  twitter_integration {
    id
    createdAt
    updatedAt
    hashtag
  }
}
"""


async def get_user_by_twitter(twitter_handle):
    query = (
        GqlFragments.USER_FRAGMENT
        + """
query getUser($where: UserWhereInput!) {
    result: users(
        where: $where
    ) {
        ...UserFragment
    }
}
        """
    )
    result = await execute_query(
        query, {"where": {"twitter_user": {"is": {"username": twitter_handle}}}}
    )
    if result:
        res = result.get("result")
        if len(res):
            return res[0]
        return None
    return result


async def get_contributions(guild_id, user_discord_id, after_date):
    query = (
        GqlFragments.CONTRIBUTION_FRAGMENT
        + """
query listContributions($where: ContributionWhereInput! = {},
                        $skip: Int! = 0,
                        $orderBy: [ContributionOrderByWithRelationInput!]) {
    result: contributions(
        where: $where,
        skip: $skip,
        orderBy: $orderBy,
    ) {
      ...ContributionFragment
    }
}

    """
    )
    guild_clause = {
        "guilds": {"some": {"guild_id": {"equals": guild_id}}},
    }
    date_clause = {"date_of_submission": {"gt": after_date}}
    user_clause = {
        "user": {
            "is": {
                "discord_users": {
                    "some": {"discord_id": {"equals": f"{user_discord_id}"}}
                }
            }
        }
    }

    clauses = []
    data = {}
    if guild_id is not None:
        clauses.append(guild_clause)
    if after_date is not None:
        clauses.append(date_clause)
    if user_discord_id is not None:
        clauses.append(user_clause)

    data = {"where": clauses[0]}
    if len(clauses) > 1:
        data = {"where": {"AND": clauses}}

    result = await execute_query(
        query,
        data,
    )
    if result:
        res = result.get("result")
        if len(res):
            return res
    return None


async def get_guild_by_id(id):
    query = (
        GqlFragments.GUILD_FRAGMENT
        + """
query getGuild($where: GuildWhereUniqueInput!) {
    result: guild(
        where: $where,
    ) {
      ...GuildFragment
    }
}
    """
    )
    result = await execute_query(query, {"where": {"id": id}})
    logger.info("Get guild")
    logger.info(result)
    if result:
        return result.get("result")
    return result


async def get_guilds_with_twitter_integration():
    query = (
        GqlFragments.GUILD_FRAGMENT
        + """
query listGuilds(
  $where: GuildWhereInput!
  $skip: Int! = 0
  $orderBy: [GuildOrderByWithRelationInput!]
) {
  result: guilds(where: $where, skip: $skip, orderBy: $orderBy) {
    ...GuildFragment
  }
}
    """
    )
    result = await execute_query(
        query, {"where": {"twitter_integration": {"is_not": None}}}
    )
    logger.info("list guilds")
    logger.info(result)
    if result:
        return result.get("result")
    return result


def now():
    return datetime.datetime.utcnow().isoformat()


async def create_job_run(name, created_date):
    mutation = """
mutation createJobRun($input: JobRunCreateInput!) {
    result: createOneJobRun(input: $input) {
        id
    }    
}
    """
    result = await execute_query(
        mutation,
        {"input": {"name": name, "completedDate": now(), "startDate": created_date}},
    )
    if result:
        return result.get("result")
    return result


async def create_twitter_hashtag_contribution(
    tweet: Tweet, user_id: int, user_name: str, hashtag: str
):
    mutation = """
mutation createStagedContribution($input: ContributionCreateInput!) {
    result: createOneContribution(input: $input) {
        id
    }
    """
    contribution_name = f"{user_name} tweet contribution: {hashtag}"
    logger.info(f"Creating {contribution_name}")
    result = await execute_query(
        mutation,
        {
            "input": {
                "name": contribution_name,
                "status": {"connect": {"name": "staged"}},
                "activity_type": {"connect": {"name": "tweet"}},
                "user": {"connect": {"id": user_id}},
                "date_of_submission": now(),
                "date_of_engagement": tweet.date,
                "details": tweet.content,
                "proof": tweet.url,
                # link with twitter tweet
            }
        },
    )
