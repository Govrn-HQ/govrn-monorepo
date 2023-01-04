import pytest
import json

from tests.test_utils import mock_gql_query, mock_default_contributions
from tests.test_utils import (
    assert_message_content,
    assert_message_reaction,
)
from bot.config import (
    YES_EMOJI,
    NO_EMOJI,
)

from bot.common.threads.history import (
    DisplayHistoryStep,
    GetContributionsCsvPromptStep,
    GetContributionsCsvPromptStepEmoji,
)

from bot.common.threads.thread_builder import StepKeys


@pytest.mark.asyncio
async def test_display_history_step_user_not_found(mocker, thread_dependencies):
    (cache, context, message, _) = thread_dependencies
    user_id = "1"
    history_step = DisplayHistoryStep(None, cache, None, context)

    mock_gql_query(mocker, method="get_user_by_discord_id", returns=None)
    (sent_message, tmp) = await history_step.send(message, user_id)

    # Check prompt for joining
    expected_message = DisplayHistoryStep.onboard_prompt_content
    assert_message_content(sent_message, expected_message)


@pytest.mark.asyncio
async def test_display_history_step_no_contributions(mocker, thread_dependencies):
    (cache, context, message, _) = thread_dependencies
    user_id = "1"
    history_step = DisplayHistoryStep(None, cache, None, context)

    mock_gql_query(mocker, "get_user_by_discord_id", returns={"id": "1"})
    mock_gql_query(mocker, "get_guild_by_discord_id", returns={"id": "1"})
    mock_gql_query(mocker, "get_contributions", returns=None)
    (sent_message, tmp) = await history_step.send(message, user_id)
    assert (
        DisplayHistoryStep.no_contributions_content == sent_message.content
    ), "expected no contributions message"


@pytest.mark.asyncio
async def test_display_history_step(mocker, thread_dependencies):
    (cache, context, message, _) = thread_dependencies
    user_id = "1"
    history_step = DisplayHistoryStep(None, cache, None, context)

    mock_gql_query(mocker, "get_user_by_discord_id", returns={"id": "1"})
    mock_gql_query(mocker, "get_guild_by_discord_id", returns={"id": "1"})
    mock_default_contributions(mocker)
    await cache.set(
        "1", json.dumps({"metadata": {}, "thread": "t", "step": "s", "guild_id": "1"})
    )
    (sent_message, tmp) = await history_step.send(message, user_id)
    assert sent_message is not None, "expected contributions to be sent"
    cache_values = await cache.get("1")
    cache_values = json.loads(cache_values)
    assert (
        cache_values["metadata"]["contribution_rows"] is not None
    ), "contributions are expected to be stored in cached metadata"


@pytest.mark.asyncio
async def test_get_contributions_csv_prompt(thread_dependencies):
    (_, _, message, _) = thread_dependencies

    promptStep = GetContributionsCsvPromptStep()
    (sent_message, tmp) = await promptStep.send(message, "0")

    assert_message_content(sent_message, GetContributionsCsvPromptStep.prompt)
    assert_message_reaction(sent_message, YES_EMOJI)
    assert_message_reaction(sent_message, NO_EMOJI)


@pytest.mark.asyncio
async def test_get_contributions_csv_prompt_emoji():
    class Emoji:
        def __init__(self, _name):
            self.name = _name

    class Reaction:
        def __init__(self, _emoji):
            self.emoji = Emoji(_emoji)

    step = GetContributionsCsvPromptStepEmoji()
    # assert return for NO_EMOJI
    (next_step, tmp) = await step.handle_emoji(Reaction(NO_EMOJI))
    assert next_step == StepKeys.END.value, "Expected end step on NO_EMOJI"
    # assert return for YES_EMOJI
    (next_step, tmp) = await step.handle_emoji(Reaction(YES_EMOJI))
    assert (
        next_step == StepKeys.POINTS_CSV_PROMPT_ACCEPT.value
    ), "Expected prompt accept step on YES_EMOJI"

    with pytest.raises(Exception):
        # assert exception for anything else
        await step.handle_emoji("garbage")
