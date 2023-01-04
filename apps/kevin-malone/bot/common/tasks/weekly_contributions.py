import asyncio
import os
import io
import logging
from typing import Dict, Union
import pandas as pd
from datetime import datetime, timedelta
from discord import EmbedField, File, Embed, Bot

from bot.common.graphql import (
    get_contributions,
    get_guild_by_discord_id,
    get_guilds,
)

from bot import constants
from bot.config import INFO_EMBED_COLOR

logger = logging.getLogger(__name__)


async def save_weekly_contribution_reports():
    # get guilds for reporting
    guilds_to_report = await get_guilds_to_report()
    reports = await generate_guild_contribution_reports(
        guilds_to_report, local_csv=True
    )
    all_contributions_name = "all_contributions"
    all_contributions_df = await create_all_contributions_dataframe()
    all_contributions_csv = await write_dataframe_to_csv(
        all_contributions_df, all_contributions_name, description="", local_csv=True
    )
    reports[all_contributions_name] = all_contributions_csv

    directory = "./reports/"
    if not os.path.exists(directory):
        os.mkdir(directory)
    formatted_date = get_formatted_date()
    for csv_name, csv in reports.items():
        path = f"{directory}{csv_name}_{formatted_date}.csv"
        logger.info(f"saving report {path}...")
        with open(path, "w") as f:
            print(csv.getvalue(), file=f)
        logger.info(f"done saving report {path}")


async def send_weekly_contribution_reports(bot: Bot):
    # retrieve the reporting channel
    govrn_guild_discord_id = constants.Bot.govrn_guild_id
    warn_msg = None
    if govrn_guild_discord_id is None:
        warn_msg = "No discord id specified for govrn"

    govrn_guild = await get_guild_by_discord_id(govrn_guild_discord_id)
    if govrn_guild is None:
        warn_msg = f"No guild found for govrn discord id {govrn_guild_discord_id}"

    # default reporting channel will be the reporting channel specified for
    # govrn (that is, whatever is specified as the govrn discord id in the .env)
    # all guilds which are registered but do not have a specified reporting
    # channel will default to reporting in the specified govrn channel
    default_reporting_channel_id = govrn_guild.get("contribution_reporting_channel")
    if not default_reporting_channel_id:
        warn_msg = (
            f"reporting channel is not specified for guild {govrn_guild_discord_id}"
        )

    if warn_msg:
        logger.warn(
            f"{warn_msg}! Reports will only be sent to guilds with specified "
            "reporting channels since no default is specified."
        )

    # get guilds for reporting
    guilds_to_report = await get_guilds_to_report()

    reports = await generate_guild_contribution_reports(guilds_to_report)

    await send_reports(bot, default_reporting_channel_id, guilds_to_report, reports)


# helper functions
async def send_reports(
    bot: Bot, default_reporting_channel: str, guilds_to_report, reports
):
    # guilds which do not have contribution_reporting_channel specified will
    # report to the default channel in the govrn server
    default_reporting_guilds = []
    # guilds which have reporting channel specified will report to that channel
    reporting_guilds = []
    # guilds which do not have a report generated (i.e. have no contributions)
    # will be explicitly mentioned in the govrn channel (for a spot check)
    non_reporting_guilds = []

    # filter guilds
    for guild in guilds_to_report:
        guild_name = guild["name"]
        if guild_name not in reports.keys():
            logger.warn(f"{guild_name} did not have a report generated")
            non_reporting_guilds.append(guild)
            continue
        channel_id = guild["contribution_reporting_channel"]
        if not channel_id:
            logger.info(f"{guild_name} has no contribution channel specified")
            default_reporting_guilds.append(guild)
            continue
        logger.info(f"{guild_name} is reporting to channel {channel_id}")
        reporting_guilds.append(guild)

    await send_default_reports(
        bot,
        default_reporting_channel,
        default_reporting_guilds,
        non_reporting_guilds,
        reports,
    )
    await send_guild_reports(bot, reporting_guilds, reports)


# sends contribution reports to the default reporting channel in the govrn
# server for guilds which have not specified a reporting channel
async def send_default_reports(
    bot: Bot, channel_id: str, default_reporting_guilds, non_reporting_guilds, reports
):
    default_reporting_guild_names = [
        guild["name"] for guild in default_reporting_guilds
    ]
    non_reporting_guild_names = [guild["name"] for guild in non_reporting_guilds]
    if not channel_id:
        logger.warn(
            "no default reporting channel is specified for govrn! the reports for "
            f"{', '.join(default_reporting_guild_names)} are being dropped."
        )
        return

    default_reporting_guilds_field = EmbedField(
        name="Reporting guilds", value=", ".join(default_reporting_guild_names)
    )
    non_reporting_guilds_field = EmbedField(
        name="Non-reporting guilds", value=", ".join(non_reporting_guild_names)
    )

    embed_description = (
        "Reporting on the contributions submitted for each active "
        "guild onboarded to Govrn are attached below as .csv files. "
        "These guilds don't have a specified channel for reporting in their "
        "discord servers, and are by default sent to this channel! "
        "Guilds without *any* contributions are listed as non-reporting."
    )

    formatted_date = get_formatted_date()
    embed = Embed(
        colour=INFO_EMBED_COLOR,
        title=f"Weekly contribution report for {formatted_date}",
        description=embed_description,
        fields=[default_reporting_guilds_field, non_reporting_guilds_field],
    )
    files = [reports[guild_name] for guild_name in default_reporting_guild_names]

    channel = bot.get_channel(int(channel_id))
    # to ensure the files are sent after
    await channel.send(embed=embed)
    await channel.send(files=files)


# sends contribution reports to guilds which have specified their reporting
# channels
async def send_guild_reports(bot: Bot, reporting_guilds, reports):
    guild_report_msg_fmt = "Hey %s! Here's your weekly contribution report!"
    for guild in reporting_guilds:
        guild_name = guild["name"]
        channel_id = guild["contribution_reporting_channel"]
        logger.info(f"Sending report for {guild_name} to channel {channel_id}")
        message = guild_report_msg_fmt % guild_name
        report = reports[guild_name]
        try:
            channel = bot.get_channel(int(channel_id))
            await channel.send(content=message, file=report)
        except Exception as e:
            logger.error(f"Exception in sending report for {guild_name}: {e}")


async def get_guilds_to_report():
    # query all guilds
    guilds = await get_guilds()
    return guilds


async def write_dataframe_to_csv(
    dataframe, name, description, local_csv=False
) -> Union[File, io.StringIO]:
    if dataframe is None:
        return (None, None)

    s = io.StringIO()
    dataframe.to_csv(s, index=False)
    s.seek(0)

    # just store the string buffer if we're generating local
    # reports on disk
    if local_csv:
        return s

    csv_file = File(fp=s, filename=f"{name}.csv", description=description)

    return csv_file


async def generate_guild_contribution_reports(
    guilds_to_report, local_csv=False
) -> Dict[str, Union[File, io.StringIO]]:
    reports = {}
    for guild in guilds_to_report:
        guild_id = guild["id"]
        guild_name = guild["name"]
        # generate dataframe
        df = await create_guild_dataframe(guild_id)
        date_reformat = get_formatted_date()

        if df is None:
            continue

        description = f"{date_reformat} weekly contribution report for {guild_name}"
        # TODO: change the key to the unique guild_id
        reports[guild_name] = await write_dataframe_to_csv(
            df, guild_name, description, local_csv
        )

    return reports


async def create_all_contributions_dataframe() -> pd.DataFrame:
    """Returns a dataframe as below, but with every contribution"""
    beginning_of_time = datetime.now() - timedelta(weeks=52 * 20)
    records = await get_contributions(
        guild_id=None, user_discord_id=None, after_date=beginning_of_time.isoformat()
    )

    # convert records from json to df
    df_rows = []
    df_index = []

    logger.info("constructing dataframe for all contributions")

    if not records:
        logger.info("No contributions reported")
        return None

    for rec in records:  # this part can be optimized for speed later
        df_rows.append(rec)
        df_index.append(rec["id"])

    df = pd.DataFrame(df_rows, index=df_index)

    df = df[
        [
            "activity_type",
            "details",
            "status",
            "user",
            "guilds",
            "date_of_engagement",
            "date_of_submission",
        ]
    ]

    df["activity_type"] = df.apply(lambda x: x["activity_type"]["name"], axis=1)
    df["discord_id"] = df.apply(lambda x: get_user_discord_id(x), axis=1)
    df["user"] = df.apply(lambda x: x["user"]["display_name"], axis=1)
    df["status"] = df.apply(lambda x: x["status"]["name"], axis=1)
    df["guilds"] = df.apply(lambda x: get_guild_name(x), axis=1)

    # rename columns
    df = df.rename(
        columns={
            "activity_type": "Engagement",
            "details": "Description",
            "status": "Status",
            "user": "User",
            "guild": "Guild Name",
            "discord_id": "Discord_ID",
            "date_of_submission": "Date of Submission",
            "date_of_engagement": "Date of Engagement",
        }
    )

    # sort by descending date of engagement
    df = df.sort_values(by=["Date of Engagement"], ascending=False)

    logger.info("done constructing dataframe for all contributions")

    return df


async def create_guild_dataframe(guild_id: int) -> pd.DataFrame:
    """Returns the community's weekly csv given the guild name."""
    logger.info(f"retrieving contributions for guild {guild_id}...")

    records = await get_contributions(guild_id, user_discord_id=None, after_date=None)

    logger.info(f"done retrieving contributions for guild {guild_id}")

    # convert records from json to df
    df_rows = []
    df_index = []

    logger.info(f"constructing dataframe for guild {guild_id}...")

    if not records:
        logger.info(f"No contributions reported for {guild_id}")
        return None

    for rec in records:  # this part can be optimized for speed later
        df_rows.append(rec)
        df_index.append(rec["id"])

    df = pd.DataFrame(df_rows, index=df_index)

    df = df[
        [
            "activity_type",
            "details",
            "status",
            "user",
            "date_of_engagement",
            "date_of_submission",
        ]
    ]

    df["activity_type"] = df.apply(lambda x: x["activity_type"]["name"], axis=1)
    df["discord_id"] = df.apply(lambda x: get_user_discord_id(x), axis=1)
    df["user"] = df.apply(lambda x: x["user"]["display_name"], axis=1)
    df["status"] = df.apply(lambda x: x["status"]["name"], axis=1)

    # rename columns
    df = df.rename(
        columns={
            "activity_type": "Engagement",
            "details": "Description",
            "status": "Status",
            "user": "User",
            "discord_id": "Discord_ID",
            "date_of_submission": "Date of Submission",
            "date_of_engagement": "Date of Engagement",
        }
    )

    # sort by descending date of engagement
    df = df.sort_values(by=["Date of Engagement"], ascending=False)

    logger.info(f"done constructing dataframe for guild {guild_id}")

    return df


def get_user_discord_id(record):
    discord_users = record["user"]["discord_users"]
    if len(discord_users) == 0:
        return "NO_DISCORD_ID"
    return discord_users[0]["discord_id"]


def get_guild_name(record):
    guilds = record["guilds"]
    if len(guilds) == 0:
        return "NO_GUILD"
    return guilds[0]["guild"]["name"]


def get_formatted_date():
    # convert to csv
    date = datetime.today()
    date_reformat = (
        str(date.year)[-2:]
        + "_"
        + str(date.month).zfill(2)
        + "_"
        + str(date.day).zfill(2)
    )
    return date_reformat


if __name__ == "__main__":
    logger.info("file directly invoked. saving weekly contributions locally...")
    asyncio.run(save_weekly_contribution_reports())
    logger.info("done saving weekly contribution reports locally!")
