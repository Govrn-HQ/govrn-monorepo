from unittest.mock import AsyncMock
import pytest
from pytest_mock import MockerFixture
from bot.common.threads.shared_steps import (
    TWITTER_HANDLE_CACHE_KEY,
    VerifyUserTwitterStep,
)

from bot.common.threads.update import (
    UpdateProfileFieldEmojiStep,
    UserUpdateFieldSelectStep,
    UpdateFieldPromptStep,
    UpdateFieldStep,
)
from bot.config import get_list_of_emojis
from tests.test_utils import (
    MockReaction,
    assert_cache_metadata_content,
    assert_field_in_sent_embeds,
    assert_message_content,
    mock_gql_query,
)
from bot.common.threads.thread_builder import (
    StepKeys,
    build_cache_value,
    get_cache_metadata_key,
    write_cache_metadata,
)
from bot.exceptions import ThreadTerminatingException


@pytest.mark.asyncio
async def test_user_update_field_selection(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    mock_user = {
        "twitter_user": {"username": "test_twitter_user"},
        "display_name": "test_display_name",
        "address": "0x0",
    }
    step = UserUpdateFieldSelectStep(None)
    expected_emojis = get_list_of_emojis(3)
    try:
        mock_gql_query(mocker, "get_user_by_discord_id", None)
        await step.send(None, None)
        assert False
    except Exception as e:
        assert "No user for updating field" == f"{e}"

    mock_gql_query(mocker, "get_user_by_discord_id", mock_user)
    (sent_message, metadata) = await step.send(message, user_id)
    mock_channel = message.channel

    assert_field_in_sent_embeds(mock_channel, f"Display Name {expected_emojis[0]}")
    assert_field_in_sent_embeds(mock_channel, f"Twitter Handle {expected_emojis[1]}")
    assert_field_in_sent_embeds(
        mock_channel, f"Ethereum Wallet Address {expected_emojis[2]}"
    )

    assert len(metadata.keys()) == 3


@pytest.mark.asyncio
async def test_update_profile_field(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    step = UpdateProfileFieldEmojiStep(cache)
    emojis = get_list_of_emojis(3)
    metadata = {
        emojis[0]: "display_name",
        emojis[1]: "twitter",
        emojis[2]: "wallet",
    }
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    for key in metadata:
        await write_cache_metadata(user_id, cache, key, metadata[key])

    raw_reaction = MockReaction(user_id, emojis[0])
    step_name, skip = await step.handle_emoji(raw_reaction)
    assert step_name is None
    assert skip is None
    await assert_cache_metadata_content(user_id, cache, "field", "display_name")

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    for key in metadata:
        await write_cache_metadata(user_id, cache, key, metadata[key])

    raw_reaction = MockReaction(user_id, emojis[1])
    step_name, skip = await step.handle_emoji(raw_reaction)
    assert step_name is None
    assert skip is None
    await assert_cache_metadata_content(user_id, cache, "field", "twitter")

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    for key in metadata:
        await write_cache_metadata(user_id, cache, key, metadata[key])

    raw_reaction = MockReaction(user_id, emojis[2])
    step_name, skip = await step.handle_emoji(raw_reaction)
    assert step_name is None
    assert skip is None
    await assert_cache_metadata_content(user_id, cache, "field", "wallet")


@pytest.mark.asyncio
async def test_update_field_prompt_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    step = UpdateFieldPromptStep()
    (sent_message, metadata) = await step.send(message, "1234")
    assert_message_content(sent_message, UpdateFieldPromptStep.update_prompt)


@pytest.mark.asyncio
async def test_update_field_step_save(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    step = UpdateFieldStep(cache)
    user_id = "1234"
    mock_user = {"id": "01"}

    mock_gql_query(mocker, "get_user_by_discord_id", mock_user)
    mocked_display = mock_gql_query(mocker, "update_user_display_name", mock_user)
    mocked_twitter = mock_gql_query(mocker, "update_user_twitter_handle", mock_user)
    mocked_wallet = mock_gql_query(mocker, "update_user_wallet", mock_user)

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    await write_cache_metadata(user_id, cache, "field", "display_name")
    message.content = "test_display_name"
    await step.send(message, user_id)
    mocked_display.assert_called_once_with(mock_user["id"], message.content)

    await write_cache_metadata(user_id, cache, "field", "wallet")
    message.content = "test_wallet"
    await step.send(message, user_id)
    mocked_wallet.assert_not_called()

    await write_cache_metadata(user_id, cache, "field", "twitter")
    message.content = "test_twitter"
    await step.send(message, user_id)
    mocked_twitter.assert_not_called()

    await write_cache_metadata(user_id, cache, "field", "junk!")
    message.content = "grbge"

    try:
        await step.send(message, user_id)
        assert False
    except ThreadTerminatingException as e:
        assert f"{e}" == "Unsupported field update junk!"


@pytest.mark.asyncio
async def test_update_field_control_hook(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    step = UpdateFieldStep(cache)

    await write_cache_metadata(user_id, cache, "field", "twitter")
    next_step = await step.control_hook(message, user_id)
    assert next_step == StepKeys.VERIFY_USER_TWITTER.value

    await write_cache_metadata(user_id, cache, "field", "wallet")
    next_step = await step.control_hook(message, user_id)
    assert next_step == StepKeys.VERIFY_USER_WALLET.value


@pytest.mark.asyncio
async def test_verify_user_twitter_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    mock_user_record = {"id": "01"}
    mock_twitter_profile = "test_profile"
    mock_status_id = "5350301918403100841"
    tweet_url = f"https://twitter.com/{mock_twitter_profile}/status/{mock_status_id}"
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    step = VerifyUserTwitterStep(user_id, guild_id, cache, True)
    (sent_message, metadata) = await step.send(message, user_id)

    requested_tweet = await get_cache_metadata_key(user_id, cache, "requested_tweet")
    mocked_retrieve_tweet = mock_tweet_retrieval(mocker, requested_tweet)
    get_user = mock_gql_query(mocker, "get_user_by_discord_id", mock_user_record)
    update_user = mock_gql_query(mocker, "update_user_twitter_handle", None)

    message.content = tweet_url
    await write_cache_metadata(
        user_id, cache, TWITTER_HANDLE_CACHE_KEY, mock_twitter_profile
    )
    await step.save(message, guild_id, user_id)

    assert_message_content(sent_message)
    mocked_retrieve_tweet.assert_called_once_with(mock_twitter_profile, mock_status_id)
    get_user.assert_called_once_with(user_id)
    update_user.assert_called_once_with(mock_user_record["id"], mock_twitter_profile)


def mock_tweet_retrieval(mocker: MockerFixture, mocked_tweet: str) -> AsyncMock:
    class MockTweet:
        def __init__(self, content):
            self.content = content

    mock_tweet = MockTweet(mocked_tweet)
    module_path = "bot.common.threads.shared_steps.retrieve_tweet"
    mocker.patch(module_path, return_value=mock_tweet)
    mocked_method = mocker._mocks[-1]
    return mocked_method
