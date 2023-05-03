from bot.common.logging import get_logger

from bot import constants
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
from gql.transport.exceptions import TransportQueryError

from bot.exceptions import (
    UserWithAddressAlreadyExists,
    UserWithTwitterHandleAlreadyExists,
)

logger = get_logger(__name__)


def get_async_transport(url):
    return AIOHTTPTransport(
        url=url, headers={"Authorization": constants.Bot.protocol_token}
    )


async def execute_query(query, values):
    transport = get_async_transport(constants.Bot.protocol_url)
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
  address
  chain_type {
    id
    name
    createdAt
    updatedAt
  }
  createdAt
  display_name
  full_name
  id
  name
  updatedAt
  guild_users {
    id
    guild_id
    membershipStatus {
      name
    }
  }
  twitter_user {
    id
    username
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
  congrats_channel
  createdAt
  discord_id
  id
  logo
  name
  updatedAt
  status
  contribution_reporting_channel
}
"""


async def get_user_by_discord_id(discord_id):
    query = (
        GqlFragments.USER_FRAGMENT
        + """
query getUser($where: UserWhereInput!,) {
    result: users(
        where: $where,
    ) {
      ...UserFragment
    }
}
    """
    )
    result = await execute_query(
        query,
        {
            "where": {
                "discord_users": {"some": {"discord_id": {"equals": str(discord_id)}}}
            }
        },
    )
    if result:
        res = result.get("result")
        if len(res):
            return res[0]
        return None
    return result


async def get_user_by_wallet(wallet):
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
    result = await execute_query(query, {"where": {"address": {"equals": wallet}}})
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


async def get_guild_by_discord_id(id):
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
    result = await execute_query(query, {"where": {"discord_id": str(id)}})
    print("Get guild")
    print(result)
    if result:
        return result.get("result")
    return result


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
    print("Get guild")
    print(result)
    if result:
        return result.get("result")
    return result


async def get_guilds():
    query = (
        GqlFragments.GUILD_FRAGMENT
        + """
query listGuilds(
  $where: GuildWhereInput! = {}
  $skip: Int! = 0
  $orderBy: [GuildOrderByWithRelationInput!]
) {
  result: guilds(where: $where, skip: $skip, orderBy: $orderBy) {
    ...GuildFragment
  }
}
    """
    )
    result = await execute_query(query, None)
    print("list guilds")
    print(result)
    if result:
        return result.get("result")
    return result


async def create_guild_user(user_id: str, guild_db_id: str):
    query = """
mutation createGuildUser($data: GuildUserCreateInput!) {
  createOneGuildUser(data: $data) {
    guild_id
    user_id
  }
}
    """
    result = await execute_query(
        query,
        {
            "data": {
                "guild": {"connect": {"id": guild_db_id}},
                "user": {"connect": {"id": user_id}},
            }
        },
    )
    if result:
        return result.get("createOneGuildUser")
    return result


async def create_guild(guild_id):
    query = """
mutation createGuild($data: GuildCreateInput!) {
  createOneGuild(data: $data) {
    id
    discord_id
  }
}
    """
    result = await execute_query(
        query,
        {
            "data": {
                "discord_id": str(guild_id),
            }
        },
    )
    if result:
        return result.get("createOneGuild")
    return result


async def create_user(display_name, discord_id, discord_name, wallet):
    query = """
mutation createUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    id
  }
}
    """
    data = {
        "data": {
            "address": wallet,
            "chain_type": {"connect": {"name": "ETH"}},
            "display_name": display_name,
            "name": display_name,
            "discord_users": {
                "connectOrCreate": [
                    {
                        "create": {
                            "discord_id": str(discord_id),
                            "display_name": discord_name,
                        },
                        "where": {"discord_id": str(discord_id)},
                    }
                ]
            },
        }
    }
    result = None
    try:
        result = await execute_query(
            query,
            data,
        )
    except TransportQueryError as e:
        if is_unique_constraint_failure(e):
            err = (
                f"A user with wallet address {wallet} already exists! "
                "Please use a different wallet address to setup your "
                "profile."
            )
            raise UserWithAddressAlreadyExists(err)

    if result:
        print(result)
        return result.get("createOneUser")
    return result


async def create_discord_user(user_id, discord_id, discord_name):
    data = {
        "discord_users": {
            "connectOrCreate": [
                {
                    "create": {
                        "discord_id": str(discord_id),
                        "display_name": discord_name,
                    },
                    "where": {"discord_id": str(discord_id)},
                }
            ]
        }
    }
    where = {"id": user_id}
    return await update_user(data, where)


# have a different update query for each field
#
# display name
# twitter
# discourse
async def update_user(data, where):
    query = (
        GqlFragments.USER_FRAGMENT
        + """
mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateOneUser(data: $data, where: $where) {
    ...UserFragment
  }
}
    """
    )
    result = await execute_query(
        query,
        {"data": data, "where": where},
    )
    if result:
        print(result)
        return result.get("updateOneUser")
    return result


async def update_user_display_name(id, display_name):
    return await update_user(
        {"display_name": {"set": display_name}, "name": {"set": display_name}},
        {"id": id},
    )


async def update_user_twitter_handle(id, twitter_handle):
    try:
        return await update_user(
            {"twitter_user": {"create": {"username": twitter_handle}}},
            {"id": id},
        )
    except TransportQueryError as e:
        if is_unique_constraint_failure(e):
            err = (
                f"A user with twitter username {twitter_handle} already exists! "
                "Please use a different twitter account to setup your profile."
            )
            raise UserWithTwitterHandleAlreadyExists(err)


async def update_user_wallet(id, wallet):
    return await update_user({"address": {"set": wallet}}, {"id": id})


async def update_guild_name(guild_discord_id, guild_name):
    query = """
mutation updateGuild($data: GuildUpdateInput!, $where: GuildWhereUniqueInput!) {
  updateOneGuild(data: $data, where: $where) {
    id
  }
}
"""
    result = await execute_query(
        query,
        {
            "data": {"name": {"set": str(guild_name)}},
            "where": {"discord_id": str(guild_discord_id)},
        },
    )
    if result:
        print(result)
        return result.get("updateOneGuild")
    return result


def is_unique_constraint_failure(err: TransportQueryError):
    return "Unique constraint failed" in err.errors[0]["message"]
