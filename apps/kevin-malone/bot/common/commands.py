from discord.commands import Option
import logging
import discord

from bot.common.bot.bot import bot
from bot.common.graphql import (
    get_user_by_discord_id,
    get_guild_by_id,
    get_guild_by_discord_id,
)
from bot.common.threads.thread_builder import (
    build_cache_value,
    ThreadKeys,
)
from bot.common.threads.onboarding import Onboarding
from bot.common.threads.report import ReportStep
from bot.common.threads.update import UpdateProfile
from bot.common.threads.add_dao import AddDao
from bot.common.threads.history import History
from bot.common.threads.guild_select import GuildSelect
from bot.common.threads.utils import get_thread
from bot.config import (
    GUILD_IDS,
    INFO_EMBED_COLOR,
    FEEDBACK_MSG_FMT,
    FEEDBACK_FORM_LINK,
    Redis,
    get_list_of_emojis,
)
from discord import errors
from bot.exceptions import NotGuildException, ErrorHandler


logger = logging.getLogger(__name__)


@bot.slash_command(
    guild_id=GUILD_IDS,
    description="Send users link to report engagement",
)
async def report(ctx: discord.ApplicationContext):
    is_guild = bool(ctx.guild)
    if not is_guild:
        # Open report thread
        # which will send either of the below messages
        embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            description="Which community would you like to report a contribution to?",
        )
        error_embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            description="You are not a part of any communities. "
            "Please run the /join command in a guild you are in",
        )

        message, metadata = await select_guild(ctx, embed, error_embed)
        thread = await GuildSelect(
            ctx.author.id,
            None,
            message.id,
            "",
        )
        # TODO add thread and step
        return await Redis.set(
            ctx.author.id,
            build_cache_value(
                ThreadKeys.GUILD_SELECT.value,
                thread.steps.hash_,
                "",
                message.id,
                metadata={**metadata, "thread_name": ThreadKeys.REPORT.value},
            ),
        )
    await ctx.response.defer(ephemeral=True)
    _, metadata = await ReportStep(guild_id=ctx.guild.id, cache=Redis, bot=bot).send(
        None, ctx.author.id, ctx
    )


@bot.slash_command(guild_id=GUILD_IDS, description="Get started with Govrn")
async def join(ctx: discord.ApplicationContext):
    is_guild = bool(ctx.guild)
    if not is_guild:
        raise NotGuildException("Command was executed outside of a guild")

    # defer response before awaiting queries to db
    await ctx.response.defer()

    guild_discord_id = ctx.guild.id

    # TODO: a single query could be written for this
    user = await get_user_by_discord_id(ctx.author.id)
    guild = await get_guild_by_discord_id(guild_discord_id)
    guild_id = guild["id"]

    if user is not None and any(
        guild_user["guild_id"] == guild_id for guild_user in user["guild_users"]
    ):
        # Send welcome message and
        # And ask what journey they are
        # on by sending all the commands
        application_commands = bot.application_commands
        embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            title="Welcome Back",
            description="",
        )
        for cmd in application_commands:
            if isinstance(cmd, discord.SlashCommand):
                embed.add_field(
                    name=f"/ {cmd.name}", value=cmd.description, inline=False
                )
        print(embed)
        await ctx.followup.send(embed=embed, ephemeral=True)
        return

    welcome_content = (
        "Welcome to the Govrn Ecosystem!"
        " We're excited to have you as part of our movement."
        " To help automate the gathering of your contributions"
        f" to {ctx.guild.name} we need some information."
        " We use your IDs to automatically pull your contributions for you to"
        f" easily submit to {ctx.guild.name}."
        " You can skip any requests by using the ⏭️  emoji!",
    )

    embed = discord.Embed(
        colour=INFO_EMBED_COLOR, title="Welcome", description=welcome_content
    )
    logger.info(
        f"Key: {build_cache_value(ThreadKeys.ONBOARDING.value, '', ctx.guild.id)}"
    )

    try:
        message = await ctx.author.send(embed=embed)
    except discord.Forbidden:
        message = await ctx.followup.send(
            "Please enable DM's in order to use the Govrn Bot!", ephemeral=True
        )
        return

    await ctx.followup.send("Check your DM's to continue onboarding", ephemeral=True)

    thread = await Onboarding(
        ctx.author.id,
        None,
        message.id,
        ctx.guild.id,
    )
    # Need to set the metadata here to provide the guild id
    await Redis.set(
        ctx.author.id,
        build_cache_value(
            thread=ThreadKeys.ONBOARDING.value,
            step=thread.steps.hash_,
            guild_id=ctx.guild.id,
            message_id=message.id,
            metadata={"guild_name": ctx.guild.name},
        ),
    )
    await thread.send(message)


@bot.slash_command(
    guild_id=GUILD_IDS, description="Update your profile for a given community"
)
async def update(ctx: discord.ApplicationContext):
    is_guild = bool(ctx.guild)
    if is_guild:
        await ctx.respond("Please run this command in a DM channel", ephemeral=True)
        return
    else:
        embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            title="Welcome",
            description="Which community profile would you like to update?",
        )
        error_embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            description="I cannot update profile because you "
            "have not been onboarded for any communities. Run /join in the "
            "discord you want to join!",
        )

        message, metadata = await select_guild(ctx, embed, error_embed)
        if not metadata:
            return
        thread = await UpdateProfile(
            ctx.author.id,
            None,
            message.id,
            "",
        )
        await Redis.set(
            ctx.author.id,
            build_cache_value(
                ThreadKeys.UPDATE_PROFILE.value,
                thread.steps.hash_,
                "",
                message.id,
                metadata=metadata,
            ),
        )


@bot.slash_command(
    guild_id=GUILD_IDS,
    description="Send user history for a given community",
)
async def history(
    ctx: discord.ApplicationContext,
    days: Option(
        str,
        "Days of contribution",  # noqa: F722
        choices=["1", "7", "30", "90", "180", "365", "all"],
    ),
):
    is_guild = bool(ctx.guild)
    if not is_guild:
        embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            description="Which community would you like to get a list of "
            "engagements?",
        )
        error_embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            description="You are not a part of any communities. "
            "Please run the /history command in a guild you are in",
        )

        message, metadata = await select_guild(ctx, embed, error_embed)
        thread = await GuildSelect(
            ctx.author.id,
            None,
            message.id,
            "",
            cache=Redis,
            discord_bot=bot,
            context=ctx,
        )
        return await Redis.set(
            ctx.author.id,
            build_cache_value(
                ThreadKeys.GUILD_SELECT.value,
                thread.steps.hash_,
                "",
                message.id,
                metadata={
                    **metadata,
                    "thread_name": ThreadKeys.POINTS.value,
                    "days": days,
                },
            ),
        )

    thread = await History(
        ctx.author.id,
        None,
        None,
        ctx.guild.id,
        cache=Redis,
        discord_bot=bot,
        context=ctx,
    )
    await Redis.set(
        ctx.author.id,
        build_cache_value(
            ThreadKeys.POINTS.value,
            thread.steps.hash_,
            ctx.guild.id,
            metadata={
                "thread_name": ThreadKeys.POINTS.value,
                "days": days,
            },
        ),
    )
    await thread.send(None)


@bot.slash_command(
    guild_id=GUILD_IDS, description="Add a new guild to report contributions"
)
async def add_dao(ctx: discord.ApplicationContext):
    is_guild = bool(ctx.guild)

    # Requiring DMs for now to keep things simple
    if is_guild:
        await ctx.respond("Please run this command in a DM channel", ephemeral=True)
        return

    embed = discord.Embed(
        colour=INFO_EMBED_COLOR,
        title="Add DAO",
        description=(
            "Add a new guild so that you can report your contributions,"
            " even if Kevin Malone hasn't been added to the server"
        ),
    )
    sent_message = await ctx.response.send_message(embed=embed)

    thread = await AddDao(
        ctx.author.id,
        None,
        sent_message.id,
        None,
        cache=Redis,
        discord_bot=bot,
        context=ctx,
    )
    cache_value = build_cache_value(ThreadKeys.ADD_DAO.value, thread.steps.hash_, "")

    logger.info(f"Key: {cache_value}")
    await Redis.set(ctx.author.id, cache_value)
    await thread.send(sent_message)


@bot.slash_command(
    guild_id=GUILD_IDS,
    description="Report feedback for Kevin Malone or other parts of the Govrn platform"
)
async def feedback(ctx):
    feedback_msg = FEEDBACK_MSG_FMT % FEEDBACK_FORM_LINK
    feedback_embed = discord.Embed(
        colour=INFO_EMBED_COLOR,
        title="Feedback",
        description=feedback_msg
    )
    await ctx.respond(embed=feedback_embed)

# if bool(strtobool(constants.Bot.is_dev)):

#    @bot.slash_command(
#        guild_id=GUILD_IDS, description="Add first contributions to the guild"
#    )
#    async def add_onboarding_contributions(ctx):
#        is_guild = bool(ctx.guild)
#        if is_guild:
#           await ctx.respond("Please run this command in a DM channel", ephemeral=True)
#            return
#        else:
#            embed = discord.Embed(
#                colour=INFO_EMBED_COLOR,
#                title="Contributions",
#                description="Which community would you like to add your "
#                "initial contributions to?",
#            )
#            error_embed = discord.Embed(
#                colour=INFO_EMBED_COLOR,
#                description="I cannot add any contributions because you "
#                "have not been onboarded for any communities. Run /join in the "
#                "discord you want to join!",
#            )
#            message, metadata = await select_guild(ctx, embed, error_embed)
#            if not metadata:
#                return
#            thread = await GuildSelect(
#                ctx.author.id,
#                None,
#                message.id,
#                "",
#            )
#            await Redis.set(
#                ctx.author.id,
#                build_cache_value(
#                    ThreadKeys.GUILD_SELECT.value,
#                    thread.steps.hash_,
#                    "",
#                    message.id,
#                    metadata={
#                        **metadata,
#                        "thread_name": ThreadKeys.INITIAL_CONTRIBUTIONS.value,
#                    },
#                ),
#            )
#


async def select_guild(ctx: discord.ApplicationContext, response_embed, error_embed):
    await ctx.response.defer()
    discord_rec = await get_user_by_discord_id(ctx.author.id)
    guild_ids = discord_rec.get("guild_users")
    if not guild_ids:
        await ctx.followup.send(embed=error_embed)
        return None, None

    guild_metadata = []
    for record_id in guild_ids:
        g = await get_guild_by_id(record_id.get("guild_id"))
        guild_id = g.get("id")
        guild_discord_id = g.get("discord_id")
        guild_name = g.get("name")
        if guild_id:
            guild_metadata.append([guild_id, guild_name, guild_discord_id])
    embed = response_embed
    emojis = get_list_of_emojis(len(guild_metadata))
    daos = {}
    for idx, guild_data in enumerate(guild_metadata):
        # omitting this call, which fails with 403 if Kevin
        # hasn't yet been added to the guild_id in question
        # guild = await bot.fetch_guild(guild_id)
        emoji = emojis[idx]
        daos[emoji] = {"guild_id": guild_data[0], "guild_discord_id": guild_data[2]}
        embed.add_field(name=guild_data[1], value=emoji)
    message = await ctx.followup.send(embed=embed)
    for emoji in emojis:
        await message.add_reaction(emoji)
    return message, {"daos": daos}


# Event listners
@bot.event
async def on_application_command_error(ctx: discord.ApplicationContext, exception):
    err = ErrorHandler(exception)
    logger.info(f"Command error type {type(exception)}")
    await ctx.response.send_message(err.msg)
    ctx.response.is_done()


nonexistant_thread_message = (
    "Hey! Thanks for the %s, but it looks like you don't have a conversation"
    " going with me right now..."
    " my apologies if I forgot! Try starting another conversation by using"
    " my slash commands! Just type a `/` to see a list of them."
)


@bot.event
async def on_message(message):
    if message.author.bot is True:
        return

    # Check channel DM channel
    if not isinstance(message.channel, discord.DMChannel):
        return

    # Check if user has open thread
    thread_key = await Redis.get(message.author.id)
    if not thread_key:
        msg = nonexistant_thread_message % "message"
        await send_message_if_not_on_cooldown(message.channel, message.author.id, msg)
        return

    thread = await get_thread(message.author.id, thread_key)

    try:
        await thread.send(message)
    except errors.ApplicationCommandError as e:
        await message.channel.send(str(e))


@bot.event
async def on_raw_reaction_add(payload):
    reaction = payload
    user = await bot.fetch_user(int(payload.user_id))
    channel = await bot.fetch_channel(int(reaction.channel_id))
    if user.bot is True:
        return

    # Check channel DM channel
    if not isinstance(channel, discord.DMChannel):
        return

    # Check if user has open thread
    thread_key = await Redis.get(user.id)
    if not thread_key:
        msg = nonexistant_thread_message % "reaction"
        await send_message_if_not_on_cooldown(channel, user.id, msg)
        return

    thread = await get_thread(user.id, thread_key)
    await thread.handle_reaction(reaction, user)


# Storing as a separate key to prevent conflict with existing metadata
cooldown_key = "%s_cooldown"


async def send_message_if_not_on_cooldown(channel, user_id, msg):
    if not await is_user_on_cooldown(user_id):
        await channel.send(msg)
        await write_inactive_thread_cooldown(user_id)
    else:
        logger.info(
            f"user_id {user_id} has a cooldown entry for an inactive thread..."
            " omitting the reply until cooldown expires"
        )


async def write_inactive_thread_cooldown(user_id):
    # create an entry which expires in 15 mintues
    key = cooldown_key % user_id
    await Redis.set(key, "True", 60 * 15)
    logger.info(f"wrote cooldown entry for user {user_id}")


async def is_user_on_cooldown(user_id):
    key = cooldown_key % user_id
    val = await Redis.get(key)
    return val is not None


bot.on_application_command_error = on_application_command_error
