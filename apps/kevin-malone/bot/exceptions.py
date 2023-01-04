import logging

from discord import errors

logger = logging.getLogger(__name__)


class NotGuildException(errors.ApplicationCommandError):
    pass


class InvalidWalletAddressException(errors.ApplicationCommandError):
    pass


class ThreadTerminatingException(Exception):
    pass


class UserWithAddressAlreadyExists(ThreadTerminatingException):
    pass


class UserWithTwitterHandleAlreadyExists(ThreadTerminatingException):
    pass


class ErrorHandler:
    def __init__(self, error):
        self.err = error
        self.msg = self._handle_error()

    def _handle_error(self):
        if isinstance(self.err, NotGuildException):
            return "Please run this command in a guild!"
        logger.error("Uncaught error", exc_info=self.err)
        return "Bot Error"
