import pytest
import hashlib
import json

from bot.common.threads.thread_builder import BaseThread, Step, BaseStep, StepKeys
from tests.test_utils import MockCache
from unittest.mock import MagicMock, AsyncMock


class EmojiLogic(BaseStep):
    name = "emoji"
    emoji = True

    async def handle_emoji(self, raw_reaction):
        pass

    async def save(self, message, guild_id, user_id):
        pass


class RedLogic(BaseStep):
    name = "red"

    async def send(self, message, user_id):
        pass


class BlueLogic(BaseStep):
    name = "blue"

    async def send(self, message, user_id):
        pass


class LeftLogic(BaseStep):
    name = "left"

    async def send(self, message, user_id):
        pass


class RightLogic(BaseStep):
    name = "right"

    async def send(self, message, user_id):
        pass


class MockLogic(BaseStep):
    name = "mock_logic"

    async def send(self, message, user_id):
        pass


class SingleThread(BaseThread):
    async def get_steps(self):
        return Step(current=MockLogic())


class MultiThread(BaseThread):
    async def get_steps(self):
        return (
            Step(current=MockLogic())
            .add_next_step(MockLogic())
            .add_next_step(MockLogic())
            .build()
        )


class SingleForkThread(BaseThread):
    async def get_steps(self):
        left = LeftLogic()
        right = RightLogic()
        return (
            Step(current=MockLogic())
            .add_next_step(MockLogic())
            .fork([left, right])
            .build()
        )


class MultiForkThread(BaseThread):
    async def get_steps(self):
        red = RedLogic()
        blue = BlueLogic()

        left = Step(current=LeftLogic()).fork([red, blue]).build()
        right = Step(current=RightLogic()).add_next_step(left).build()
        return (
            Step(current=MockLogic())
            .add_next_step(MockLogic())
            .fork([left, right])
            .build()
        )


class EmojiThread(BaseThread):
    async def get_steps(self):
        return Step(current=EmojiLogic)


def get_root_hash(cls):
    return hashlib.sha256(cls.name.encode()).hexdigest()


# Test find step #


@pytest.mark.asyncio
async def test_find_single_step():
    """
    Find a step in a thread with a single step
    """
    root_hash = get_root_hash(MockLogic)

    steps = await SingleThread(
        user_id="", current_step=root_hash, message_id="", guild_id=""
    ).get_steps()
    step = SingleThread.find_step(steps, root_hash)
    assert step.hash_ == root_hash


@pytest.mark.asyncio
async def test_find_mulitple_step_no_forks():
    """
    Find a step in a thread with no forks and multiple steps
    """
    root_hash = get_root_hash(MockLogic)

    steps = await MultiThread(
        user_id="", current_step=root_hash, message_id="", guild_id=""
    ).get_steps()
    third_step = steps.get_next_step(MockLogic.name).get_next_step(MockLogic.name)
    step = SingleThread.find_step(steps, third_step.hash_)
    assert step.hash_ == third_step.hash_


@pytest.mark.asyncio
async def test_find_mulitple_step_single_fork():
    """
    Find a step in a thread with with a single fork
    """
    root_hash = get_root_hash(MockLogic)

    steps = await SingleForkThread(
        user_id="", current_step=root_hash, message_id="", guild_id=""
    ).get_steps()
    right_step = steps.get_next_step(MockLogic.name).get_next_step(RightLogic.name)
    step = SingleForkThread.find_step(steps, right_step.hash_)
    assert step.hash_ == right_step.hash_


@pytest.mark.asyncio
async def test_find_mulitple_step_multiple_fork():
    """
    Find a step in a thread with multiple forks
    """
    root_hash = get_root_hash(MockLogic)

    steps = await MultiForkThread(
        user_id="", current_step=root_hash, message_id="", guild_id=""
    ).get_steps()
    blue_step = (
        steps.get_next_step(MockLogic.name)
        .get_next_step(RightLogic.name)
        .get_next_step(LeftLogic.name)
        .get_next_step(BlueLogic.name)
    )
    step = MultiForkThread.find_step(steps, blue_step.hash_)
    assert step.hash_ == blue_step.hash_


# Test Thread __await__ #


@pytest.mark.asyncio
async def test_thread_steps():
    root_hash = get_root_hash(MockLogic)

    thread = await MultiForkThread(
        user_id="", current_step=root_hash, message_id="", guild_id=""
    )
    assert thread.steps


@pytest.mark.asyncio
async def test_thread_send_raise():
    root_hash = get_root_hash(MockLogic)

    thread = MultiForkThread(
        user_id="", current_step=root_hash, message_id="", guild_id=""
    )
    with pytest.raises(Exception):
        thread.send()


# Test thread send #


@pytest.mark.asyncio
async def test_thread_send_emoji_step():
    """
    Throw an error if we try to send on an emoji step
    """
    root_hash = get_root_hash(EmojiLogic)
    thread = EmojiThread(user_id="", current_step=root_hash, message_id="", guild_id="")
    with pytest.raises(Exception):
        await thread.send()


@pytest.mark.asyncio
async def test_thread_send_previous_step_no_skip():
    """
    Throw an error if we try to send on an emoji step
    """
    global saved
    saved = False

    class EmojiLogic(BaseStep):
        name = "emoji"
        emoji = True

        async def handle_emoji(self, raw_reaction):
            return None, None

        async def send(self, message, user_id):
            return None, None

    class SendLogic(BaseStep):
        name = "send"

        async def send(self, message, user_id):
            return None, None

        async def save(self, message, guild_id, user_id):
            global saved
            saved = True

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return Step(current=SendLogic()).add_next_step(EmojiLogic()).build()

    root_hash = get_root_hash(SendLogic)

    cache = MockCache()
    thread = await MockThread(
        user_id="2",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    hash_ = thread.step.get_next_step("emoji").hash_
    second_step = await MockThread(
        user_id="2",
        current_step=hash_,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )

    await second_step.handle_reaction(MagicMock(message_id=""), "")
    assert saved is True


@pytest.mark.asyncio
async def test_thread_send_previous_step_skip(mocker):
    """
    Throw an error if we try to send on an emoji step
    """
    global saved
    saved = False

    class EmojiLogic(BaseStep):
        name = "emoji"
        emoji = True

        async def handle_emoji(self, raw_reaction):
            return None, True

        async def send(self, message, user_id):
            return None, None

        async def save(self, message, guild_id, user_id):
            global saved
            saved = True

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return Step(current=EmojiLogic())

    root_hash = get_root_hash(EmojiLogic)
    thread = await MockThread(
        user_id="",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
    )
    await thread.handle_reaction(MagicMock(message_id=""), "")
    assert saved is False


@pytest.mark.asyncio
async def test_thread_send_no_previous_step_skip(mocker):
    """
    Throw an error if we try to send on an emoji step
    """
    global saved
    saved = False

    class EmojiLogic(BaseStep):
        name = "emoji"
        emoji = True

        async def handle_emoji(self, raw_reaction):
            return None, True

        async def send(self, message, user_id):
            return None, None

    class SendLogic(BaseStep):
        name = "send"

        async def send(self, message, user_id):
            return None, {"example": 0}

        async def save(self, message, guild_id, user_id):
            global saved
            saved = True

    class MockThread(BaseThread):
        async def get_steps(self):
            return Step(current=SendLogic()).add_next_step(EmojiLogic()).build()

    cache = MockCache()
    root_hash = get_root_hash(SendLogic)
    thread = await MockThread(
        user_id="1",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
    )
    hash_ = thread.step.get_next_step("emoji").hash_
    second_step = await MockThread(
        user_id="1",
        current_step=hash_,
        message_id="",
        guild_id="",
        cache=cache,
        discord_bot=AsyncMock(),
    )

    await second_step.handle_reaction(MagicMock(message_id=""), "")
    assert saved is False
    assert cache.internal == {}


@pytest.mark.asyncio
async def test_thread_metadata_none(mocker):
    """
    Throw an error if we try to send on an emoji step
    """

    class FirstLogic(BaseStep):
        name = "first"

        async def send(self, message, user_id):
            return message, {"example": 0}

    class SendLogic(BaseStep):
        name = "send"

        async def send(self, message, user_id):
            return message, None

    class LastLogic(BaseStep):
        name = "last"

        async def send(self, message, user_id):
            return None, None

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return (
                Step(current=FirstLogic())
                .add_next_step(SendLogic())
                .add_next_step(LastLogic())
                .build()
            )

    cache = MockCache()
    root_hash = get_root_hash(FirstLogic)
    thread = await MockThread(
        user_id="1",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await thread.send(AsyncMock(message_id="", id="1"))

    hash_ = thread.step.get_next_step("send").hash_
    t2 = await MockThread(
        user_id="1",
        current_step=hash_,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await t2.send(AsyncMock(message_id="", id="1"))
    assert json.loads(await cache.get("1")).get("metadata") == {"example": 0}


@pytest.mark.asyncio
async def test_thread_metadata_set(mocker):
    """
    Throw an error if we try to send on an emoji step
    """

    class FirstLogic(BaseStep):
        name = "first"

        async def send(self, message, user_id):
            return message, {"example": 0}

    class SendLogic(BaseStep):
        name = "send"

        async def send(self, message, user_id):
            return message, {"example": 2}

    class LastLogic(BaseStep):
        name = "last"

        async def send(self, message, user_id):
            return None, None

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return (
                Step(current=FirstLogic())
                .add_next_step(SendLogic())
                .add_next_step(LastLogic())
                .build()
            )

    cache = MockCache()
    root_hash = get_root_hash(FirstLogic)
    thread = await MockThread(
        user_id="1",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await thread.send(AsyncMock(message_id="", id="1"))

    hash_ = thread.step.get_next_step("send").hash_
    t2 = await MockThread(
        user_id="1",
        current_step=hash_,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await t2.send(AsyncMock(message_id="", id="1"))
    assert json.loads(await cache.get("1")).get("metadata") == {"example": 2}


@pytest.mark.asyncio
async def test_thread_control_hook_end(mocker):
    """
    Throw an error if we try to send on an emoji step
    """

    class FirstLogic(BaseStep):
        name = "first"

        async def send(self, message, user_id):
            return message, {"example": 0}

    class SendLogic(BaseStep):
        name = "send"

        async def send(self, message, user_id):
            return message, {"example": 2}

        async def control_hook(self, message, user_id):
            return StepKeys.END.value

    class LastLogic(BaseStep):
        name = "last"

        async def send(self, message, user_id):
            return None, None

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return (
                Step(current=FirstLogic())
                .add_next_step(SendLogic())
                .add_next_step(LastLogic())
                .build()
            )

    cache = MockCache()
    root_hash = get_root_hash(FirstLogic)
    thread = await MockThread(
        user_id="1",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await thread.send(AsyncMock(message_id="", id="1"))
    assert json.loads(await cache.get("1")) is not None

    hash_ = thread.step.get_next_step("send").hash_
    t2 = await MockThread(
        user_id="1",
        current_step=hash_,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await t2.send(AsyncMock(message_id="", id="1"))
    assert await cache.get("1") is None


@pytest.mark.asyncio
async def test_thread_override_step_and_step(mocker):
    """
    Throw an error if we try to send on an emoji step
    """

    global third_step
    third_step = False

    class FirstLogic(BaseStep):
        name = "first"

        async def send(self, message, user_id):
            return message, {"example": 0}

    class SendLogic(BaseStep):
        name = "send"

        async def send(self, message, user_id):
            return message, {"example": 2}

        async def control_hook(self, message, user_id):
            return "last"

    class LastLogic(BaseStep):
        name = "last"

        async def send(self, message, user_id):
            global third_step
            third_step = True
            return None, None

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return (
                Step(current=FirstLogic())
                .add_next_step(SendLogic())
                .add_next_step(LastLogic())
                .build()
            )

    cache = MockCache()
    root_hash = get_root_hash(FirstLogic)
    thread = await MockThread(
        user_id="1",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await thread.send(AsyncMock(message_id="", id="1"))

    hash_ = thread.step.get_next_step("send").hash_
    t2 = await MockThread(
        user_id="1",
        current_step=hash_,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await t2.send(AsyncMock(message_id="", id="1"))
    assert third_step is True


@pytest.mark.asyncio
async def test_thread_trigger(mocker):
    """
    Throw an error if we try to send on an emoji step
    """

    global third_step
    third_step = False

    class FirstLogic(BaseStep):
        name = "first"

        async def send(self, message, user_id):
            return message, {"example": 0}

    class SendLogic(BaseStep):
        name = "send"
        trigger = True

        async def send(self, message, user_id):
            return message, {"example": 2}

    class LastLogic(BaseStep):
        name = "last"

        async def send(self, message, user_id):
            global third_step
            third_step = True
            return None, None

    class MockThread(BaseThread):
        name = "thread"

        async def get_steps(self):
            return (
                Step(current=FirstLogic())
                .add_next_step(SendLogic())
                .add_next_step(LastLogic())
                .build()
            )

    cache = MockCache()
    root_hash = get_root_hash(FirstLogic)
    thread = await MockThread(
        user_id="1",
        current_step=root_hash,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await thread.send(AsyncMock(message_id="", id="1"))

    hash_ = thread.step.get_next_step("send").hash_
    t2 = await MockThread(
        user_id="1",
        current_step=hash_,
        message_id="",
        guild_id="",
        discord_bot=AsyncMock(),
        cache=cache,
    )
    await t2.send(AsyncMock(message_id="", id="1"))
    assert third_step is True
