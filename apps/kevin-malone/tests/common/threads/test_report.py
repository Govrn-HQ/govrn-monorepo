import pytest
from bot.common.cache import build_congrats_key

from tests.test_utils import (
    mock_default_contributions,
    mock_gql_query,
    assert_message_content,
)
from bot.common.threads.report import ReportStep
from bot.config import REPORTING_FORM_FMT


@pytest.mark.asyncio
async def test_reporting_step_happypath(mocker, thread_dependencies):
    guild = {"id": "1", "congrats_channel": 123}
    (cache, context, message, bot) = thread_dependencies
    bot.mock_user = None
    report = ReportStep("0", cache, bot)

    mock_gql_query(mocker, "get_guild_by_discord_id", guild)
    default_contributions = mock_default_contributions(mocker)

    user_id = 1234
    (sent_message, metadata) = await report.send(message, user_id)
    link = REPORTING_FORM_FMT
    expected_message = ReportStep.report_message % link
    expected_congrats = ReportStep.congrats_message % (
        user_id,
        len(default_contributions),
    )

    # assert
    congrats_key = build_congrats_key(user_id)
    cache_entry = cache.get(congrats_key)
    assert_message_content(sent_message, expected_message)
    assert len(bot.mock_channel.sent_messages) == 1
    assert expected_congrats == bot.mock_channel.sent_messages[0].content
    assert cache_entry


@pytest.mark.asyncio
async def test_reporting_step_no_congrats(mocker, thread_dependencies):
    guild = {
        "id": "1",
    }
    (cache, context, message, bot) = thread_dependencies
    report = ReportStep("0", cache, bot)

    mock_gql_query(mocker, "get_guild_by_discord_id", guild)
    mock_default_contributions(mocker)

    user_id = 1234
    (sent_message, metadata) = await report.send(message, user_id)
    link = REPORTING_FORM_FMT
    expected_message = ReportStep.report_message % link

    # assert
    congrats_key = build_congrats_key(user_id)
    cache_entry = await cache.get(congrats_key)
    assert_message_content(sent_message, expected_message)
    assert len(bot.mock_channel.sent_messages) == 0
    assert cache_entry is None


@pytest.mark.asyncio
async def test_reporting_step_no_contibutions(mocker, thread_dependencies):
    guild = {
        "id": "1",
    }
    (cache, context, message, bot) = thread_dependencies
    report = ReportStep("0", cache, bot)

    mock_gql_query(mocker, "get_guild_by_discord_id", guild)

    user_id = 1234
    (sent_message, metadata) = await report.send(message, user_id)
    link = REPORTING_FORM_FMT
    expected_message = ReportStep.report_message % link

    # assert
    congrats_key = build_congrats_key(user_id)
    cache_entry = await cache.get(congrats_key)
    assert_message_content(sent_message, expected_message)
    assert len(bot.mock_channel.sent_messages) == 0
    assert cache_entry is None
