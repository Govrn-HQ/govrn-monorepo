import json
from bot.common.threads.thread_builder import (
    BaseThread,
    BaseStep,
    StepKeys,
    ThreadKeys,
    Step,
)

# from bot.common.threads.utils import get_jump_thread
from bot.common.threads.shared_steps import SelectGuildEmojiStep
from bot.config import Redis


class OverrideThreadStep(BaseStep):
    """A step that overwrites the current thread
    This step gets the name of the jump thread from
    the cache metadata and then overwrites the current
    steps in memory with the new threads steps.
    """

    name = StepKeys.OVERRIDE_THREAD.value

    def __init__(self, cls):
        self.parent_thread = cls

    async def send(self, message, user_id):
        thread = await get_jump_thread(self.parent_thread, message, user_id)
        return await thread.step.current.send(message, user_id)


class GuildSelect(BaseThread):
    """A thread that sets the guild_id for another thread
    This thread is typically called from a command which
    will set the next thread to jump to on the next step
    and responds with an emoji prompt for a user to set
    guild_id.
    """

    name = ThreadKeys.GUILD_SELECT.value

    def __await__(self):
        async def init(self):
            await self._init_steps()
            key_vals = await Redis.get(self.user_id)
            if key_vals:
                self.command_name = (
                    json.loads(key_vals).get("metadata").get("thread_name")
                )
            return self

        return init(self).__await__()

    async def get_steps(self):
        steps = Step(current=SelectGuildEmojiStep(cls=self)).add_next_step(
            OverrideThreadStep(self)
        )
        return steps.build()


# avoid circular dependency
from bot.common.threads.utils import get_jump_thread  # noqa: E402
