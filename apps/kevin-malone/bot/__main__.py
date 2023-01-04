import logging
import sys

from bot.common.bot.bot import bot
from bot.common.tasks.tasks import init_bot_tasks
from bot.config import Redis
import constants

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
logger.info("Starting...")


def main():
    TOKEN = constants.Bot.token
    if TOKEN is None:
        sys.exit("Environment variable API_TOKEN must be supplied")
    init_bot_tasks(bot, Redis)
    bot.run(TOKEN)


main()
