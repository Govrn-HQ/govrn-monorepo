import logging
import json_log_formatter
from bot.constants import Bot

formatter = json_log_formatter.JSONFormatter("%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s")


def get_logger(name: str):
    logfile = Bot.logfile
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)

    # add json handler to write logs to the specified log file,
    # if configured
    if logfile:
        json_handler = logging.FileHandler(filename=Bot.logfile)
        json_handler.setFormatter(formatter)

        logger.addHandler(json_handler)

    return logger
