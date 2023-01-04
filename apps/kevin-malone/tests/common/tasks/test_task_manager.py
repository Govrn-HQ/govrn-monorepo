import pytest
import discord
import asyncio

from datetime import datetime, time, timedelta
from discord.ext import tasks, commands

from bot.constants import Bot as BotConstants, Tests
from bot.common.bot.bot import get_bot
from bot.common.tasks.tasks import DATETIME_CACHE_FMT, Weekly, ReportingTask
from bot.common.tasks.weekly_contributions import create_guild_dataframe
from tests.test_utils import MockCache, MockCadence


def test_weekly_cadence():
    now = datetime.fromisoformat("2022-08-11T14:23:29.681771")
    # create a weekly cadence that runs on the current weekday,
    # one hour from the current time
    weekday = now.weekday()
    time_plus: time = (now + timedelta(hours=1)).time()
    time_minus: time = (now - timedelta(hours=1)).time()

    cadence = Weekly(weekday, time_plus)

    # check that the timedelta to next occurrence is under 1h
    td = cadence.get_timedelta_until_next_occurrence(now)
    # assert the timedelta is between 0 and 1h
    assert td.total_seconds() <= 60 * 60
    assert td.total_seconds() > 0

    cadence = Weekly(weekday, time_minus)
    td = cadence.get_timedelta_until_next_occurrence(now)
    assert td.total_seconds() == (7 * 24 - 1) * 60 * 60
    td = cadence.get_timedelta_until_run(now)
    assert td.total_seconds() == -1


@pytest.mark.asyncio
@pytest.mark.skip(reason="gh actions env is not populated with data")
async def test_weekly_report():
    df = await create_guild_dataframe(3)
    assert df


# TODO: need versions of below tests with proper mocking and
# assertions. For now, integration tests (w/discord) are
# sufficient


@pytest.mark.discord_bot
@pytest.mark.skip(reason="this sets up a bot with a test task")
def test_repeating_message():
    class TestCog(commands.Cog):
        def __init__(self, bot: discord.Bot, test_channel):
            self.bot: discord.Bot = bot
            self.test_channel = test_channel
            self.ping.start()

        @tasks.loop(seconds=5)
        async def ping(self):
            channel = self.bot.get_channel(int(self.test_channel))
            await channel.send("ping!")

        @ping.before_loop
        async def wait_until_ready(self):
            await self.bot.wait_until_ready()

    TOKEN = BotConstants.token
    CHANNEL = Tests.test_channel
    bot = get_bot()
    bot.add_cog(TestCog(bot, CHANNEL))
    bot.run(TOKEN)


TOKEN = BotConstants.token
CHANNEL = Tests.test_channel
# TODO: extract dependency and mock creation into a fixture


@pytest.mark.discord_bot
@pytest.mark.skip("need to mock bot, redis, db")
def test_reporting():
    """
    Tests the full BotTasks cog (currently only consisting of the reporting task)
    with injected cache, cadence, settings
    """
    loop_settings = {
        "task_wakeup_period_minutes": 1,
        "enable": True,
    }
    bot = get_bot()

    # the reporting task should run every minute, since the cadence
    # will always return "it's time to run"
    bot.add_cog(ReportingTask(bot, MockCache(), MockCadence(None), loop_settings))
    bot.run(TOKEN)


@pytest.mark.discord_bot
@pytest.mark.skip("need to mock bot, redis, db")
def test_reporting_with_cache():
    loop_settings = {
        "task_wakeup_period_minutes": 1,
        "enable": True,
    }

    mock_cache = MockCache()
    cadence = MockCadence(None)
    bot = get_bot()

    # set cache entry to mock as if the bot had sent the report,
    # crashed, and is now re-running after restart to ensure the
    # report is not sent constantly if the bot is crashing
    asyncio.run_coroutine_threadsafe(
        mock_cache.set(
            ReportingTask.REPORT_LAST_SENT_DATETIME_CACHE_KEY,
            datetime.now().strftime(DATETIME_CACHE_FMT),
        ),
        bot.loop,
    )

    bot.add_cog(
        ReportingTask(
            bot, mock_cache, cadence, loop_settings, reporting_channel=CHANNEL
        )
    )
    # TODO: assert that the task is not run
    bot.run(TOKEN)


@pytest.mark.discord_bot
@pytest.mark.skip("need to mock bot, redis, db")
def test_task_disable():
    loop_settings = {
        "enable": False,
    }

    mock_cache = MockCache()
    cadence = MockCadence(None)
    bot = get_bot()

    bot.add_cog(
        ReportingTask(
            bot, mock_cache, cadence, loop_settings, reporting_channel=CHANNEL
        )
    )
    # TODO: assert that the task does not run
    bot.run(TOKEN)


@pytest.mark.discord_bot
@pytest.mark.skip("need to mock bot, redis, db")
def test_task_hourly():
    loop_settings = {
        "task_wakeup_period_minutes": 10,
        "enable": True,
    }

    mock_cache = MockCache()
    cadence = MockCadence(None)
    bot = get_bot()

    # set cache entry to mock as if the bot had sent the report,
    # crashed, and is now re-running after restart to ensure the
    # report is not sent constantly if the bot is crashing
    asyncio.run_coroutine_threadsafe(
        mock_cache.set(
            ReportingTask.REPORT_LAST_SENT_DATETIME_CACHE_KEY,
            datetime.now().strftime(DATETIME_CACHE_FMT),
        ),
        bot.loop,
    )

    bot.add_cog(
        ReportingTask(
            bot, mock_cache, cadence, loop_settings, reporting_channel=CHANNEL
        )
    )
    # TODO: assert that the task is not run
    bot.run(TOKEN)
