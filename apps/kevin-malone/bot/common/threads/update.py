import discord
import json

import bot.common.graphql as gql
from bot.common.threads.onboarding import TWITTER_HANDLE_CACHE_KEY
from bot.config import (
    INFO_EMBED_COLOR,
    get_list_of_emojis,
)
from bot.common.threads.thread_builder import (
    BaseStep,
    StepKeys,
    Step,
    ThreadKeys,
    BaseThread,
    build_cache_value,
    get_cache_metadata_key,
    write_cache_metadata,
)
from bot.common.threads.shared_steps import (
    SelectGuildEmojiStep,
    VerifyUserTwitterStep,
    VerifyUserWalletStep,
    WALLET_CACHE_KEY,
)
from bot.exceptions import ThreadTerminatingException


class UserUpdateFieldSelectStep(BaseStep):
    """Sends the message with all the fields a user can select from"""

    name = StepKeys.USER_UPDATE_FIELD_SELECT.value

    def __init__(self, cls):
        super().__init__()
        self.cls = cls

    async def send(self, message, user_id):
        user = await gql.get_user_by_discord_id(user_id)
        if not user:
            raise Exception("No user for updating field")
        embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            description="Please select one of the following fields to update via emoji",
        )
        emojis = get_list_of_emojis(3)
        twitter = user.get("twitter_user", {"username": ""}) or {"username": None}
        print(twitter)
        embed.add_field(
            name=f"Display Name {emojis[0]}", value=user.get("display_name")
        )
        embed.add_field(
            name=f"Twitter Handle {emojis[1]}",
            value=twitter.get("username"),
        )
        embed.add_field(
            name=f"Ethereum Wallet Address {emojis[2]}", value=user.get("address")
        )

        channel = message.channel
        sent_message = await channel.send(embed=embed)
        for emoji in emojis:
            await sent_message.add_reaction(emoji)
        return (
            sent_message,
            {
                emojis[0]: "display_name",
                emojis[1]: "twitter",
                emojis[2]: "wallet",
            },
        )


class UpdateProfileFieldEmojiStep(BaseStep):
    """Stores the field user responds with to the cache"""

    name = StepKeys.UPDATE_PROFILE_FIELD_EMOJI.value
    emoji = True

    def __init__(self, cache):
        super().__init__()
        self.cache = cache

    async def handle_emoji(self, raw_reaction):
        key_vals = await self.cache.get(raw_reaction.user_id)
        if not key_vals:
            return None, None
        values = json.loads(key_vals)
        values["metadata"] = {
            "field": values.get("metadata").get(raw_reaction.emoji.name)
        }
        await self.cache.set(
            raw_reaction.user_id,
            build_cache_value(**values),
        )
        return None, None


class UpdateFieldPromptStep(BaseStep):
    """Asks the user which field to update"""

    name = StepKeys.UPDATE_FIELD_PROMPT.value

    update_prompt = "What value would you like to use instead"

    def __init__(self):
        pass

    async def send(self, message, user_id):
        channel = message.channel
        sent_message = await channel.send(UpdateFieldPromptStep.update_prompt)
        return sent_message, None


class UpdateFieldStep(BaseStep):
    """Updates the selected field based on user response"""

    name = StepKeys.UPDATE_FIELD.value

    def __init__(self, cache):
        self.cache = cache

    async def send(self, message, user_id):
        field = await get_cache_metadata_key(user_id, self.cache, "field")
        if not field:
            raise Exception("No field present to update")
        record = await gql.get_user_by_discord_id(user_id)
        record_id = record["id"]
        value = message.content.strip()

        if field == "display_name":
            await gql.update_user_display_name(record_id, value)
        elif field == "wallet":
            await write_cache_metadata(user_id, self.cache, WALLET_CACHE_KEY, value)
        elif field == "twitter":
            await write_cache_metadata(
                user_id, self.cache, TWITTER_HANDLE_CACHE_KEY, value
            )
        else:
            raise ThreadTerminatingException(f"Unsupported field update {field}")

        return None, None

    async def control_hook(self, message, user_id):
        field = await get_cache_metadata_key(user_id, self.cache, "field")

        if field == "twitter":
            return StepKeys.VERIFY_USER_TWITTER.value
        if field == "wallet":
            return StepKeys.VERIFY_USER_WALLET.value

        return StepKeys.CONGRATS_UPDATE_FIELD.value


class CongratsFieldUpdateStep(BaseStep):
    """Sends the user a congratulations message and then ends the thread"""

    name = StepKeys.CONGRATS_UPDATE_FIELD.value

    async def send(self, message, user_id):
        channel = message.channel
        sent_message = await channel.send("Thank you! Your profile has been updated")
        return sent_message, None


class UpdateProfile(BaseThread):
    """A thread to update a Govrn Guild Profile

    The current steps allow the user to select a guild
    then select the field they want to update; then
    update that field with a new value; then congradulate
    them.
    """

    name = ThreadKeys.UPDATE_PROFILE.value

    async def get_steps(self):
        twitter_update = (
            Step(
                VerifyUserTwitterStep(self.user_id, self.guild_id, self.cache)
            ).add_next_step(CongratsFieldUpdateStep())
        ).build()
        wallet_update = (
            Step(VerifyUserWalletStep(self.cache, update=True)).add_next_step(
                CongratsFieldUpdateStep()
            )
        ).build()
        steps = (
            Step(current=SelectGuildEmojiStep(cls=self))
            .add_next_step(UserUpdateFieldSelectStep(cls=self))
            .add_next_step(UpdateProfileFieldEmojiStep(self.cache))
            .add_next_step(UpdateFieldPromptStep())
            .add_next_step(UpdateFieldStep(self.cache))
            .fork([CongratsFieldUpdateStep(), twitter_update, wallet_update])
        )
        return steps.build()
