from bot.common.logging import get_logger
import asyncio
import discord

from abc import ABC, abstractmethod
from datetime import timedelta, datetime, time
from discord.ext import tasks, commands

from bot.common.tasks.weekly_contributions import send_weekly_contribution_reports
from bot.common.cache import Cache
from bot.constants import BotTasks as TaskConstants

logger = get_logger(__name__)

# TODO: tz?
DATETIME_CACHE_FMT = "%m/%d/%Y, %H:%M:%S"


class Cadence(ABC):
    """
    Abstract base class for cadences to help schedule repetetive tasks.
    """

    @abstractmethod
    def get_timedelta_until_run(self, from_dt: datetime) -> timedelta:
        """
        Returns the number of seconds until the task can be run.

        Negative values reflect that the task is due to fire.
        """
        pass

    @abstractmethod
    def get_timedelta_until_next_occurrence(self, from_dt: datetime) -> timedelta:
        """
        Returns the timedelta until the next scheduled occurrence after from_dt.

        Return value's timedelta is expected to be gte zero (i.e.)
        timedelta.total_seconds() >= 0.
        """
        pass

    @abstractmethod
    def get_next_runtime(self) -> datetime:
        """
        Returns the next scheduled occurrence after from_dt.

        Return value is expected to be gte from_dt.
        """
        pass


# associates a callback with a particular Cadence
class Task:
    def __init__(self, cache: Cache, cache_key: str, action, cadence: Cadence):
        self.cache = cache
        self.cache_key = cache_key
        self.action = action
        self.cadence = cadence

    # if the associated cadence is due, run the task
    # return the timedelta until next run
    async def try_run(self) -> timedelta:
        td_until_run = await self.cadence.get_timedelta_until_run(
            self.cache, self.cache_key
        )
        if td_until_run < timedelta(0):
            await self.action()
            await self.update_last_run_in_cache()
            td_until_run = await self.cadence.get_timedelta_until_run(
                self.cache, self.cache_key
            )
        return td_until_run

    async def update_last_run_in_cache(self):
        await self.cache.set(
            self.cache_key,
            datetime.now().strftime(DATETIME_CACHE_FMT),
        )


# TODO Pro-378: refactor into every_x_days, only parameter here is 7
# TODO Pro-378: cadences into their own file
class Weekly(Cadence):
    def __init__(self, day_to_run: int, time_to_run: time):
        self.day_to_run = day_to_run
        self.time_to_run = time_to_run

    def get_timedelta_until_run(self, now: datetime) -> timedelta:
        if now.weekday() == self.day_to_run:
            if now.time() >= self.time_to_run:
                # run immediately
                return timedelta(seconds=-1)
        # wait until the next ocurrence of the specified date and time
        return self.get_timedelta_until_next_occurrence(now)

    def get_timedelta_until_next_occurrence(self, now: datetime) -> timedelta:
        next_ocurrence = self.get_next_runtime(now)
        td = next_ocurrence - now
        return td

    def get_next_runtime(self, now: datetime) -> datetime:
        days_until = (self.day_to_run - now.weekday()) % 7
        run_next_week = days_until == 0 and now.time() > self.time_to_run
        days_until = 7 if run_next_week else days_until
        next_ocurrence = now + timedelta(days=days_until)
        next_ocurrence = datetime.combine(next_ocurrence.date(), self.time_to_run)
        return next_ocurrence


class Hourly(Cadence):
    def __init__(self):
        super().__init__()

    def get_timedelta_until_run(self, now: datetime) -> timedelta:
        time = now.time()
        if time.minute == 0:
            return timedelta(seconds=-1)
        # wait until the next ocurrence of the specified date and time
        return self.get_timedelta_until_next_occurrence(now)

    def get_timedelta_until_next_occurrence(self, now: datetime) -> timedelta:
        next_ocurrence = self.get_next_runtime(now)
        td = next_ocurrence - now
        return td

    def get_next_runtime(self, now: datetime) -> datetime:
        delta = timedelta(hours=1)
        next = now + delta
        next_hour = next.replace(microsecond=0, second=0, minute=0)
        return next_hour


class Minutely(Cadence):
    def __init__(self):
        super().__init__()

    def get_timedelta_until_run(self, now: datetime) -> timedelta:
        time = now.time()
        if time.second == 0:
            return timedelta(seconds=-1)
        # wait until the next ocurrence of the specified date and time
        return self.get_timedelta_until_next_occurrence(now)

    def get_timedelta_until_next_occurrence(self, now: datetime) -> timedelta:
        next_ocurrence = self.get_next_runtime(now)
        td = next_ocurrence - now
        return td

    def get_next_runtime(self, now: datetime) -> datetime:
        delta = timedelta(minutes=1)
        next = now + delta
        next_hour = next.replace(microsecond=0, second=0)
        return next_hour


# conforms with date.weekday()
class Days:
    MONDAY = 0
    TUESDAY = 1
    WEDNESDAY = 2
    THURSDAY = 3
    FRIDAY = 4
    SATURDAY = 5
    SUNDAY = 6


# TODO Pro-378: future refactor; abstract bot tasks class to accept a
# cadence, action, and loop settings (enable/disable & wakeup time)
# TODO Pro-378: loop settings into its own class
class ReportingTask(commands.Cog):
    REPORT_LAST_SENT_DATETIME_CACHE_KEY = "contribution_report_last_sent"

    def __init__(self, bot: discord.Bot, cache: Cache, cadence: Weekly, loop_settings):
        self.bot = bot
        self.cache: Cache = cache
        self.cadence: Weekly = cadence
        self.min_time_between_loop_seconds: int = 60
        self.init_loop(loop_settings)

    def init_loop(self, loop_settings):
        # TODO: checking on loop settings to be encapsulated in class/fn
        if not loop_settings.get("enable"):
            logger.info("contribution report task disabled, skipping...")
            return

        self.min_time_between_loop_seconds = loop_settings[
            "min_time_between_loop_seconds"
        ]
        m = loop_settings["task_wakeup_period_minutes"]
        self.contribution_report: tasks.Loop = tasks.loop(minutes=m)(
            self.contribution_report
        )
        self.contribution_report.before_loop(self.wait_until_ready)
        self.contribution_report.start()
        self.contribution_report.error(self.handle_error)

    async def contribution_report(self):
        now: datetime = datetime.now()
        logger.info(f"contribution_report awake at {now}")

        td_until_run: timedelta = self.cadence.get_timedelta_until_run(now)
        s_until_run = td_until_run.total_seconds()

        if s_until_run > 0:
            if td_until_run.days > 0:
                logger.info("contribution_report sleeping...")
                return
            logger.info(f"contribution_report waiting {s_until_run}s until run")
            await asyncio.sleep(s_until_run)

        # check cache
        last_sent = await self.cache.get(self.REPORT_LAST_SENT_DATETIME_CACHE_KEY)
        if last_sent is not None:
            last_sent = datetime.strptime(last_sent.decode("utf-8"), DATETIME_CACHE_FMT)

        td_last_sent: timedelta = None if last_sent is None else now - last_sent

        if (
            td_last_sent is not None
            and td_last_sent.total_seconds() < self.min_time_between_loop_seconds
        ):
            logger.warn(
                f"last sent time for {self.REPORT_LAST_SENT_DATETIME_CACHE_KEY} is "
                f"{last_sent}, {td_last_sent.total_seconds()} seconds ago. "
                "This is less than the minimum time between execution "
                f"({self.min_time_between_loop_seconds} s), so skipping this report..."
            )
            return

        await send_weekly_contribution_reports(self.bot)

        # update cache
        await self.cache.set(
            self.REPORT_LAST_SENT_DATETIME_CACHE_KEY,
            datetime.now().strftime(DATETIME_CACHE_FMT),
        )

    async def wait_until_ready(self):
        await self.bot.wait_until_ready()

    async def handle_error(self, ex):
        logger.error(f"Unhandled error in reporting: {ex}")


def init_bot_tasks(bot: discord.Bot, cache: Cache):
    bot.add_cog(get_reporting_task(bot, cache))


def get_reporting_task(bot: discord.Bot, cache: Cache) -> discord.Cog:
    settings = {
        "enable": bool(TaskConstants.weekly_report_enable),
        "task_wakeup_period_minutes": int(TaskConstants.task_wakeup_period_minutes),
        "min_time_between_loop_seconds": int(
            TaskConstants.weekly_report_minimum_time_between_loop_seconds
        ),
    }
    day_to_run = int(TaskConstants.weekly_report_weekday)
    time_to_run: time = time.fromisoformat(TaskConstants.weekly_report_time)
    return ReportingTask(
        bot,
        cache,
        Weekly(day_to_run, time_to_run=time_to_run),
        settings,
    )
