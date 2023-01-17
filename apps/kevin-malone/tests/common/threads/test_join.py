import pytest
import web3.auto
import eth_account.messages
from bot.common.threads.thread_builder import (
    StepKeys,
    build_cache_value,
    get_cache_metadata_key,
    write_cache_metadata,
)
from bot.common.threads.onboarding import (
    DISCORD_DISPLAY_NAME_CACHE_KEY,
    TWITTER_HANDLE_CACHE_KEY,
    AddUserTwitterStep,
    AssociateExistingUserWithGuild,
    CheckIfDiscordUserExists,
    UserDisplayConfirmationStep,
    UserDisplayConfirmationEmojiStep,
    UserDisplaySubmitStep,
    PromptUserWalletAddressStep,
)
from bot.common.threads.shared_steps import (
    VerifyUserTwitterStep,
    VerifyUserWalletStep,
    WALLET_CACHE_KEY,
    WALLET_VERIFICATION_MESSAGE_CACHE_KEY,
)
from bot.config import NO_EMOJI, SKIP_EMOJI, YES_EMOJI, REQUESTED_SIGNED_MESSAGE
from bot.exceptions import InvalidWalletAddressException, ThreadTerminatingException

from tests.test_utils import (
    MockReaction,
    MockMessage,
    assert_message_content,
    assert_message_reaction,
    mock_gql_query,
)
from tests.test_utils import assert_cache_metadata_content


@pytest.mark.asyncio
async def test_check_if_user_exists(mocker, thread_dependencies):
    user_id = "1234"
    test_display_name = "test_display_name"
    address = "0xdeadbeef"
    mock_user = {"id": "01", "display_name": test_display_name, "address": address}
    (cache, context, message, bot) = thread_dependencies

    step = CheckIfDiscordUserExists(cache)
    (msg, metadata) = await step.send(None, None)
    assert msg is None
    assert metadata is None

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    mock_gql_query(mocker, "get_user_by_discord_id", mock_user)
    next_step_key = await step.control_hook(None, user_id)
    await assert_cache_metadata_content(
        user_id, cache, "display_name", test_display_name
    )
    await assert_cache_metadata_content(user_id, cache, "wallet_address", address)
    assert next_step_key == StepKeys.ASSOCIATE_EXISTING_USER_WITH_GUILD.value


@pytest.mark.asyncio
async def test_check_if_user_exists_dne(mocker, thread_dependencies):
    user_id = "1234"
    (cache, context, message, bot) = thread_dependencies

    step = CheckIfDiscordUserExists(cache)
    mock_gql_query(mocker, "get_user_by_discord_id", None)
    next_step_key = await step.control_hook(None, user_id)
    assert len(cache.internal) == 0
    assert next_step_key == StepKeys.USER_DISPLAY_CONFIRM.value


@pytest.mark.asyncio
async def test_associate_existing_user(mocker, thread_dependencies):
    user_id = "1234"
    test_display_name = "test_display_name"
    address = "0xdeadbeef"
    mock_user = {"id": "01", "display_name": test_display_name, "address": address}
    mock_guild = {"id": "1", "name": "test_guild_name"}
    guild_id = "12345"
    (cache, context, message, bot) = thread_dependencies

    step = AssociateExistingUserWithGuild(cache, guild_id)

    next_step = await step.control_hook(message, user_id)
    assert next_step == StepKeys.END.value

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    mock_gql_query(mocker, "get_guild_by_discord_id", mock_guild)
    await write_cache_metadata(user_id, cache, "user_db_id", mock_user["id"])
    mocked_create = mock_gql_query(mocker, "create_guild_user", None)

    await write_cache_metadata(user_id, cache, "guild_name", mock_guild["name"])
    await write_cache_metadata(
        user_id, cache, "display_name", mock_user["display_name"]
    )
    await write_cache_metadata(user_id, cache, "wallet_address", mock_user["address"])

    (sent_message, metadata) = await step.send(message, user_id)

    mocked_create.assert_called_once_with(mock_user["id"], mock_guild["id"])

    assert_message_content(
        sent_message,
        AssociateExistingUserWithGuild.associate_msg_fmt
        % (test_display_name, address, mock_guild["name"]),
    )


@pytest.mark.asyncio
async def test_user_display_confirmation(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    bot.mock_user.display_name = user_id
    step = UserDisplayConfirmationStep(cache, bot)

    emojis = step.emojis
    assert YES_EMOJI in emojis
    assert NO_EMOJI in emojis
    assert len(emojis) == 2

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    (sent_message, metadata) = await step.send(message, user_id)

    assert_message_content(
        sent_message, f"{UserDisplayConfirmationStep.msg} `{user_id}`"
    )
    assert_message_reaction(sent_message, YES_EMOJI)
    assert_message_reaction(sent_message, NO_EMOJI)
    await assert_cache_metadata_content(
        user_id, cache, DISCORD_DISPLAY_NAME_CACHE_KEY, user_id
    )


@pytest.mark.asyncio
async def test_user_display_confirmation_emoji_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    bot.mock_user.display_name = user_id
    step = UserDisplayConfirmationEmojiStep(cache, bot)

    emojis = step.emojis
    assert YES_EMOJI in emojis
    assert NO_EMOJI in emojis
    assert len(emojis) == 2

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    await write_cache_metadata(user_id, cache, DISCORD_DISPLAY_NAME_CACHE_KEY, user_id)

    reaction = MockReaction(user_id, step.emojis[0])
    (next_step, skip) = await step.handle_emoji(reaction)
    assert next_step == StepKeys.PROMPT_USER_WALLET_ADDRESS.value
    assert not skip

    reaction = MockReaction(user_id, step.emojis[1])
    (next_step, skip) = await step.handle_emoji(reaction)
    assert next_step == StepKeys.USER_DISPLAY_SUBMIT.value
    assert not skip

    reaction = MockReaction(user_id, "📈")
    try:
        await step.handle_emoji(reaction)
        assert False
    except Exception as e:
        assert UserDisplayConfirmationEmojiStep.exception_msg == f"{e}"

    await step.save(message, guild_id, user_id)
    display_name = await get_cache_metadata_key(user_id, cache, "display_name")
    assert display_name == user_id


@pytest.mark.asyncio
async def test_user_display_submit_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    step = UserDisplaySubmitStep(cache)

    (sent_message, metadata) = await step.send(message, user_id)
    assert_message_content(sent_message, UserDisplaySubmitStep.display_name_prompt)
    assert metadata is None

    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    message.content = user_id
    await step.save(message, guild_id, user_id)
    await assert_cache_metadata_content(user_id, cache, "display_name", user_id)


@pytest.mark.asyncio
async def test_create_user_wallet_address_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    # random addr on etherscan
    wallet = "0xcd4A15841a4906fF78D3F2Aa8E55936F1A7Ae4a5"

    step = PromptUserWalletAddressStep(cache, guild_id)
    (sent_message, metadata) = await step.send(message, user_id)
    assert_message_content(sent_message, PromptUserWalletAddressStep.wallet_prompt)
    assert metadata is None

    message.content = "0xF"
    try:
        await step.save(message, guild_id, user_id)
        assert False
    except InvalidWalletAddressException as e:
        assert (
            f"{e}" == PromptUserWalletAddressStep.invalid_wallet_exception_fmt % "0xF"
        )

    message.content = wallet
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    await step.save(message, guild_id, user_id)
    await assert_cache_metadata_content(user_id, cache, WALLET_CACHE_KEY, wallet)


@pytest.mark.asyncio
async def test_add_user_twitter_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    step = AddUserTwitterStep(guild_id, cache)

    (sent_msg, metadata) = await step.send(message, user_id)
    assert_message_content(sent_msg, AddUserTwitterStep.handle_prompt)
    assert metadata is None

    fake_twitter = "@fake_twitter_handle"
    message.content = fake_twitter
    await step.save(message, guild_id, user_id)
    await assert_cache_metadata_content(
        user_id, cache, TWITTER_HANDLE_CACHE_KEY, fake_twitter.replace("@", "")
    )

    mock_reaction = MockReaction(user_id, "‼️")
    try:
        await step.handle_emoji(mock_reaction)
        assert False
    except Exception as e:
        assert AddUserTwitterStep.exception_message == f"{e}"

    mock_reaction = MockReaction(user_id, SKIP_EMOJI)
    (next_step, skip) = await step.handle_emoji(mock_reaction)
    assert next_step == StepKeys.ONBOARDING_CONGRATS.value
    assert not skip


@pytest.mark.asyncio
async def test_verify_user_twitter_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    step = VerifyUserTwitterStep(user_id, guild_id, cache)

    (sent_message, metadata) = await step.send(message, user_id)
    tweet = await get_cache_metadata_key(user_id, cache, "requested_tweet")
    assert sent_message.embed.description == tweet


@pytest.mark.asyncio
async def test_verify_user_wallet_send(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))

    step = VerifyUserWalletStep(cache, False)

    sent_message, _ = await step.send(message, user_id)

    verification_message = await get_cache_metadata_key(
        user_id, cache, WALLET_VERIFICATION_MESSAGE_CACHE_KEY
    )
    expected_msg = REQUESTED_SIGNED_MESSAGE[:-3]
    assert verification_message.startswith(expected_msg)

    # Two embeds should have been sent for instructions and the message
    # Not asserting the content since this will likely change
    assert len(message.channel.sent_embeds) == 2
    # Assert the sent message's content matches what's in the cache
    assert sent_message.embed.description.startswith(expected_msg)
    assert sent_message.embed.description == verification_message


@pytest.mark.asyncio
async def test_verify_user_wallet_step(mocker, thread_dependencies):
    (cache, context, message, bot) = thread_dependencies
    user_id = "1234"
    guild_id = "12345"
    # public/private pair that has been published previously
    wallet = "0x63FaC9201494f0bd17B9892B9fae4d52fe3BD377"
    private_k = "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f"
    test_display_name = "test_display_name"
    mock_guild = {"id": "1", "name": "test_guild_name"}
    mock_user = {"id": "01", "display_name": test_display_name, "address": wallet}

    message.content = wallet
    await cache.set(user_id, build_cache_value("t", "s", "1", "1"))
    await write_cache_metadata(user_id, cache, "display_name", test_display_name)
    await write_cache_metadata(
        user_id, cache, DISCORD_DISPLAY_NAME_CACHE_KEY, test_display_name
    )
    await write_cache_metadata(user_id, cache, WALLET_CACHE_KEY, wallet)

    mock_gql_query(mocker, "get_guild_by_discord_id", mock_guild)
    mock_gql_query(mocker, "get_user_by_discord_id", mock_user)
    mock_gql_query(mocker, "get_user_by_wallet", None)
    mock_gql_query(mocker, "update_user_wallet", None)
    create_user = mock_gql_query(mocker, "create_user", mock_user)
    create_guild_user = mock_gql_query(mocker, "create_guild_user", None)
    update_display = mock_gql_query(mocker, "update_user_display_name", None)

    step = VerifyUserWalletStep(cache, update=False)
    msg = MockMessage(message.channel)

    # this will store the expected message in the cache
    sent_message, _ = await step.send(message, user_id)

    # Invalid signature should fail
    try:
        msg.content = "junk"
        await step.save(msg, guild_id, user_id)
        assert False
    except ThreadTerminatingException:
        pass

    try:
        signed_wrong_message = web3.auto.w3.eth.account.sign_message(
            eth_account.messages.encode_defunct(text="wrong message"), private_k
        )
        msg.content = signed_wrong_message.signature.hex()[2:]
        await step.save(msg, guild_id, user_id)
        assert False
    except ThreadTerminatingException:
        pass

    verification_message = sent_message.embed.description
    # sign the message with our pk
    signed_message = web3.auto.w3.eth.account.sign_message(
        eth_account.messages.encode_defunct(text=verification_message), private_k
    )
    msg.content = signed_message.signature.hex()[2:]
    await step.save(msg, guild_id, user_id)

    create_user.assert_called_once_with(user_id, test_display_name, wallet)
    create_guild_user.assert_called_once_with(mock_user["id"], mock_guild["id"])
    update_display.assert_called_once_with(mock_user["id"], test_display_name)
    await assert_cache_metadata_content(user_id, cache, "user_db_id", mock_user["id"])
