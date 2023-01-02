from datetime import timedelta, time, datetime
from unittest.mock import AsyncMock
from deepdiff import DeepDiff
from pytest_mock.plugin import MockerFixture
import json
import discord
import pytest

from bot.common.cache import Cache
from bot.common.tasks.tasks import Cadence


@pytest.fixture
def thread_dependencies():
    channel = MockChannel()
    mock_bot = MockBot(channel, MockUser())
    return (MockCache(), MockContext(), MockMessage(), mock_bot)


# Add in memory implementation
class MockCache(Cache):
    def __init__(self):
        self.internal = {}

    async def get(self, key):
        return self.internal.get(key)

    # expiry accepted but not mocked
    async def set(self, key, value, ex=None):
        self.internal[key] = value

    async def delete(self, key):
        if self.internal.get(key):
            del self.internal[key]


# This is a continual cadence; it's always running
class MockCadence(Cadence):
    def __init__(self, time_to_run: time):
        self.time_to_run = time_to_run

    def get_timedelta_until_run(self, from_dt: datetime) -> timedelta:
        return timedelta(seconds=-1)

    def get_timedelta_until_next_occurrence(self, from_dt: datetime) -> timedelta:
        return timedelta(seconds=1)

    def get_next_runtime(self) -> datetime:
        return datetime.now() - timedelta(seconds=1)

    def set_time_to_run(self, time_to_run):
        self.time_to_run = time_to_run


class MockBot:
    # channel = self.bot.get_channel(int(congrats_channel_id))
    # user = self.bot.get_user(user_id)

    def __init__(self, mock_channel=None, mock_user=None):
        self.mock_channel = mock_channel
        self.mock_user = mock_user

    def get_channel(self, channel_id: int):
        if self.mock_channel:
            return self.mock_channel
        # throw ?
        return MockChannel()

    def get_user(self, user_id: int):
        if self.mock_user:
            return self.mock_user
        return MockUser(user_id)

    async def fetch_user(self, user_id: int):
        if self.mock_user:
            return self.mock_user
        return MockUser(user_id)


class MockUser:
    def __init__(self, display_name=None):
        self.display_name = display_name


class MockChannel:
    def __init__(self):
        self.sent_messages = []
        self.sent_embeds = []

    async def send(self, content: str = None, embed: discord.Embed = None):
        mock_message = MockMessage(self)
        mock_message.content = content
        self.sent_messages.append(mock_message)
        if embed:
            mock_message.embed = embed
            self.sent_embeds.append(embed)
        return mock_message


class MockMessage:
    def __init__(self, channel=None):
        self.id = None
        self.reactions = []
        self.embed = None
        self.content = None
        self.channel: MockChannel = MockChannel() if channel is None else channel

    async def add_reaction(self, reaction: str):
        self.reactions.append(reaction)


class MockContext:
    def __init__(self):
        self.interaction: MockInteraction = MockInteraction()
        self.response: MockResponse = MockResponse()


class MockInteraction:
    def __init__(self):
        self.followup: MockResponse = MockResponse()


class MockResponse:
    def __init__(self):
        self.sent_content: str = None
        self.embed: discord.Embed = None
        self.ephemeral: bool = False
        self.file: discord.file = None

    async def send_message(
        self,
        content: str = None,
        embed: discord.Embed = None,
        ephemeral: bool = False,
        file: discord.file = None,
    ):
        self.sent_content = content
        self.ephemeral = ephemeral
        self.embed = embed
        self.file = file


class MockEmoji:
    def __init__(self, name):
        self.name = name


class MockReaction:
    def __init__(self, user_id, reaction):
        self.user_id = user_id
        self.emoji = MockEmoji(reaction)


def mock_bot_method(mocker: MockerFixture, method: str, returns=None):
    ret_value = None
    if returns is None:
        ret_value = get_default_return_for_bot_method(method)
    mocker.patch(f"{method}", return_value=ret_value)


def get_default_return_for_bot_method(method: str):
    pass


def mock_gql_query(mocker: MockerFixture, method: str, returns=None) -> AsyncMock:
    # TODO add type assertion for returns and method
    module_path = f"bot.common.graphql.{method}"
    mocker.patch(module_path, return_value=returns)
    mocked_method = mocker._mocks[-1]
    return mocked_method


def mock_default_contributions(mocker: MockerFixture):
    default_contributions = [
        {
            "date_of_submission": "2022-09-21",
            "date_of_engagement": "2022-09-21",
            "name": "unit tests 1",
            "status": {"name": "great"},
        },
        {
            "date_of_submission": "2022-09-22",
            "date_of_engagement": "2022-09-22",
            "name": "unit tests 2",
            "status": {"name": "ok"},
        },
    ]
    mock_gql_query(mocker, "get_contributions", returns=default_contributions)
    return default_contributions


# assert that a message has a particular emoji reaction
def assert_message_reaction(message: MockMessage, emoji: str = None):
    assert emoji in message.reactions, f"emoji {emoji} was not in message reactions"


def assert_message_content(message: MockMessage, expected_content: str = None):
    assert (
        expected_content == message.content
    ), f"message {expected_content} was not in message content"


# assert that the supplied context has a particular message sent
def assert_context_response(context: MockContext, message: str = None):
    assert (
        message == context.response.sent_content
    ), f"message {message} was not in context response"


# assert that a file was sent in response
def assert_file_in_response(response: MockResponse):
    assert response.file is not None, "no file was present in response"


def assert_dicts_equal(d1, d2):
    ret = DeepDiff(d1, d2)
    assert ret == {}


async def assert_cache_metadata_content(
    user_id: str, cache: MockCache, key: str, expected_value: str = None
):
    cache_values = await cache.get(user_id)
    cache_values = json.loads(cache_values)

    assert (
        cache_values["metadata"][key] is not None
    ), f"{key} is expected to be stored in cached metadata"

    if expected_value is not None:
        assert (
            cache_values["metadata"][key] == expected_value
        ), f"key {key} is not expected value {expected_value}"


def assert_field_in_sent_embeds(channel: MockChannel, field: str):
    for embed in channel.sent_embeds:
        for _field in embed.fields:
            if field == _field.name:
                return
    assert False
