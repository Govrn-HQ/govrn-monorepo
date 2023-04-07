import logging
import json_log_formatter
from bot.constants import Bot

formatter = json_log_formatter.JSONFormatter("%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s")


def get_logger(name: str):
    json_handler = logging.FileHandler(filename=Bot.logfile)
    json_handler.setFormatter(formatter)

    logger = logging.getLogger(name)
    logger.addHandler(json_handler)
    logger.setLevel(logging.INFO)
    return logger
