import pytest

from bot.common.commands import (
    feedback
)

from bot.config import (
    FEEDBACK_FORM_LINK,
    FEEDBACK_MSG_FMT
)


@pytest.mark.asyncio
async def test_feedback(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    expected_message = FEEDBACK_MSG_FMT % FEEDBACK_FORM_LINK

    await feedback(context)
    actual_message = context.followup.embed.description
    assert (
        actual_message == expected_message
    ), f"Expected message {expected_message} did not match actual {actual_message}"
