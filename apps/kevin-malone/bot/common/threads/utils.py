import json
from bot.common.threads.thread_builder import ThreadKeys, build_cache_value
from bot.common.threads.onboarding import Onboarding  # noqa: E402
from bot.common.threads.update import UpdateProfile  # noqa: E402
from bot.common.threads.initial_contribution import InitialContributions
from bot.common.threads.report import Report
from bot.common.threads.history import History
from bot.common.threads.add_dao import AddDao


async def get_jump_thread(parent_thread, message, user_id):
    thread = await get_thread(
        user_id,
        build_cache_value(
            parent_thread.command_name,
            None,
            parent_thread.guild_id,
            message.id,
        ),
        parent_thread.cache,
    )
    # this is dangerous
    thread.current_step = await thread.get_root_hash()
    await thread._init_steps()
    parent_thread.current_step = await thread.get_root_hash()
    parent_thread.get_steps = thread.get_steps
    parent_thread.step = thread.step
    parent_thread.name = thread.name
    return thread


# TODO: extend to support other thread attributes other than just the guild id
async def set_thread_and_send(
    current_thread, next_thread_key, message, user_id, guild_id
):
    current_thread.guild_id = guild_id
    # this will be the name of the overriding thread's key
    current_thread.command_name = next_thread_key

    jump_thread = await get_jump_thread(current_thread, message, user_id)

    # overwrites thread's current and next steps, and executes
    # that step
    return await jump_thread.step.current.send(message, user_id)


async def get_thread(user_id, key, cache=None):
    val = json.loads(key)
    thread = val.get("thread")
    step = val.get("step")
    message_id = val.get("message_id")
    guild_id = val.get("guild_id")
    if thread == ThreadKeys.ONBOARDING.value:
        return await Onboarding(user_id, step, message_id, guild_id, cache)
    elif thread == ThreadKeys.UPDATE_PROFILE.value:
        return await UpdateProfile(user_id, step, message_id, guild_id, cache)
    elif thread == ThreadKeys.INITIAL_CONTRIBUTIONS.value:
        return await InitialContributions(user_id, step, message_id, guild_id, cache)
    elif thread == ThreadKeys.GUILD_SELECT.value:
        return await GuildSelect(user_id, step, message_id, guild_id, cache)
    elif thread == ThreadKeys.REPORT.value:
        return await Report(user_id, step, message_id, guild_id, cache)
    elif thread == ThreadKeys.POINTS.value:
        return await History(user_id, step, message_id, guild_id, cache)
    elif thread == ThreadKeys.ADD_DAO.value:
        return await AddDao(user_id, step, message_id, guild_id, cache)
    raise Exception("Unknown Thread!")


from bot.common.threads.guild_select import GuildSelect  # noqa:E402
