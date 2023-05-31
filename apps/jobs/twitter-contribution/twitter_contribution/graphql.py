from twitter_contribution.data import Tweet
from twitter_contribution.utils import now
from twitter_contribution.logging import get_logger
import twitter_contribution.constants as constants

from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport
from gql.transport.exceptions import TransportQueryError

import datetime

logger = get_logger(__name__)


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


TWITTER_TWEET_FRAGMENT = """
fragment TwitterTweetFragment on TwitterTweet {
  id
  createdAt
  text
  twitter_tweet_id
  twitter_user {
    id
    username
  }
  twitter_tweet_contribution {
    id 
    createdAt
    contribution {
      name 
      user {
        id
        name
        display_name
      }
    }
  }
}
"""


async def get_tweet_contribution(tweet_id):
    query = (
        TWITTER_TWEET_FRAGMENT
        + """
query getTweetContribution($where: TwitterTweetWhereInput!) {
    result: twitterTweets(
        where: $where
    ) {
        ...TwitterTweetFragment
    }
}
        """
    )

    result = await execute_query(
        query, {"where": {"twitter_tweet_id": {"is": tweet_id}}}
    )
    if result:
        res = result.get("result")
        # unclear when this would actually return >1 result, but there
        # is no uniqueness constraint on twitter_tweet_id
        if len(res):
            return res[0]
        return None
    return result


async def get_user_by_twitter(twitter_handle):
    query = (
        GqlFragments.USER_FRAGMENT
        + """
query getUser($where: UserWhereInput!) {
    result: users(
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


async def create_job_run(name, start, end):
    mutation = """
mutation createJobRun($input: JobRunCreateInput!) {
    result: createOneJobRun(input: $input) {
        id
    }    
}
    """
    result = await execute_query(
        mutation,
        {"input": {"name": name, "completedDate": end, "startDate": start}},
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
                "details": f"Tweet to contribute: {tweet.content}",
                "proof": tweet.url,
                "twitter_tweet_contribution": {
                    "create": {
                        "twitter_tweet": {
                            "create": {
                                "twitter_tweet_id": tweet.id,
                                "text": tweet.content,
                                "twitter_user": {
                                    "connect": {
                                        "username": tweet.profile_handle,
                                    }
                                },
                            }
                        }
                    }
                },
            }
        },
    )
