import { useEffect, useState, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { Flex, Button, Text, VisuallyHidden, Heading } from '@chakra-ui/react';
import { SiDiscord } from 'react-icons/si';
import ConnectWallet from '../components/ConnectWallet';

import { useUser } from '../contexts/UserContext';
import GovrnTextLogo from './GovrnTextLogo';
import useDisplayName from '../hooks/useDisplayName';
import useUserCreate from '../hooks/useUserCreate';
import useDiscordUserDisconnect from '../hooks/useDiscordUserDisconnect';

import { BASE_URL } from '../utils/constants';

import { UIUser } from '@govrn/ui-types';

const SignatureLayout = () => {
  const { isConnected, address } = useAccount();
  const [searchParams] = useSearchParams();
  const displayNameFromParams = searchParams.get('displayName');
  const { mutateAsync: createUser } = useUserCreate();
  const { userDataByAddress, userData } = useUser();

  const { displayName } = useDisplayName();

  const BACKEND_ADDR = `${BASE_URL}`;
  const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
  const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
  const { mutateAsync: disconnectDiscordUser } = useDiscordUserDisconnect();

  const isDiscordConnected = (userDataByAddress: UIUser | null | undefined) =>
    userDataByAddress?.discord_users?.length &&
    userDataByAddress.discord_users[0].active_token;

  const StageOne = () => (
    <>
      <Text>
        <span role="img" aria-labelledby="Wave emoji next to user name">
          👋
        </span>{' '}
        Hello! Welcome to Govrn.
      </Text>
      <Text marginBottom={{ base: 10, lg: 16 }}>
        Connect your wallet to Gnosis Chain and sign the signature request to
        verify.
      </Text>
      <ConnectWallet />
    </>
  );

  const StageTwoExistingUser = () => (
    <>
      <Text>
        Welcome back,{' '}
        <Text as="span" fontWeight="bolder">
          {displayName}
        </Text>
        <Text as="span" fontWeight="normal">
          .
        </Text>
        <Text marginBottom={{ base: 10, lg: 16 }}>
          Click the Discord button below to connect your address to your Discord
          account.
        </Text>
      </Text>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 2, lg: 4 }}
        marginTop={4}
      >
        {isDiscordConnected(userData) ? (
          <Button
            variant="tertiary"
            type="submit"
            leftIcon={<SiDiscord />}
            onClick={async () => await disconnectDiscordUser()}
          >
            Disconnect Discord
          </Button>
        ) : (
          <Button
            variant="tertiary"
            type="submit"
            onClick={() => handleDiscordAuth(false)}
            leftIcon={<SiDiscord />}
          >
            Connect Discord
          </Button>
        )}
      </Flex>
    </>
  );

  const StageTwoNewUser = () => {
    return displayNameFromParams !== null ? ( // stage 2b: creating user with the display name first then move to third screen
      <>
        <Text>
          Welcome to Govrn! The next step is creating your user with your wallet
          address and display name of{' '}
          <Text as="span" fontWeight="bolder">
            {displayNameFromParams}
          </Text>
          . We'll then verify on Discord.
        </Text>
        <Text marginBottom={{ base: 10, lg: 16 }}>
          You can always change your display name in your profile or through
          Kevin Malone.
        </Text>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 2, lg: 4 }}
          marginTop={4}
        >
          <Button
            variant="tertiary"
            onClick={() => handleDiscordAuth(true)}
            leftIcon={<SiDiscord />}
          >
            Connect to Discord
          </Button>
        </Flex>
      </>
    ) : (
      <>
        <Text marginBottom={{ base: 10, lg: 16 }}>
          Welcome to Govrn! The next step is creating your user with your wallet
          address and verifying through Discord. You can always change your
          display name in your profile or through Kevin Malone.
        </Text>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 2, lg: 4 }}
          marginTop={4}
        >
          <Button
            variant="tertiary"
            onClick={() => handleDiscordAuth(true)}
            leftIcon={<SiDiscord />}
          >
            Connect to Discord
          </Button>
        </Flex>
      </>
    );
  };

  const StageThreeSuccess = () => (
    <>
      <Text>
        <span role="img" aria-labelledby="tada emoji celebrating success">
          🎉
        </span>{' '}
        Congratulations on connecting{' '}
        <Text as="span" fontWeight="bolder">
          {displayName}
        </Text>{' '}
        <span role="img" aria-labelledby="tada emoji celebrating success">
          🎉
        </span>
        <Text marginBottom={{ base: 10, lg: 16 }}>
          Head to your profile to join or create a DAO or return to Kevin Malone
          and re-run the{' '}
          <Text as="span" fontWeight="bolder" fontFamily="monospace">
            /join
          </Text>{' '}
          command.
        </Text>
      </Text>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 2, lg: 4 }}
        marginTop={4}
      >
        <Link to="/profile">
          <Button variant="secondary">Check Out Your Profile</Button>
        </Link>
      </Flex>
    </>
  );

  const handleDiscordAuth = async (newUser: boolean) => {
    if (newUser === true) {
      if (
        userData === undefined &&
        address &&
        displayNameFromParams !== undefined
      ) {
        await createUser({
          newUser: {
            username: displayNameFromParams ?? '', // see if displayname from discord exists and create with this username if so
            address: address,
          },
          showToast: false,
        });
      }
    }
    const res = await fetch(`${BACKEND_ADDR}/discord_nonce`, {
      method: 'GET',
      credentials: 'include',
    });
    const state = await res.text();

    const params = new URLSearchParams();
    params.append('client_id', DISCORD_CLIENT_ID);
    params.append('redirect_uri', DISCORD_REDIRECT_URI);
    params.append('response_type', 'code');
    params.append('scope', 'identify guilds.join');
    params.append('state', `${state}/${address}/signature`); // generate string to prevent crsf attack and include signature as source
    params.append('prompt', 'consent');
    window.location.href = `https://discord.com/oauth2/authorize?${params.toString()}`;
  };

  console.log('userdata by address', userDataByAddress);
  return (
    <Flex
      direction="column"
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'center' }}
      overflowX="hidden"
      margin="0 auto"
      paddingX={{ base: 8, lg: 0 }}
      minHeight="100vh"
      minWidth="100vw"
      bgGradient="linear-gradient(49deg, rgba(223,31,151,1) 0%, rgba(81,0,228,1) 100%)"
    >
      <Flex
        direction="column"
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
        paddingY={{ base: '8', lg: '0' }}
        flex="1"
        minHeight={['100vh', '100vh', '0', '0']}
        gap={{ base: 4, lg: 16 }}
      >
        <VisuallyHidden>
          <Heading as="h1">Govrn</Heading>
        </VisuallyHidden>
        <GovrnTextLogo />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontSize={{ base: 'lg', lg: '2xl' }}
          fontWeight="400"
          marginBottom={{ base: 40, lg: 0 }}
          gap={1}
          maxW={{ base: '60%', lg: '75%' }}
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight="400"
            maxW={{ base: '60%', lg: '75%' }}
            textAlign="center"
          >
            {!isConnected && userDataByAddress === undefined ? ( // stage 1: connect wallet
              <StageOne />
            ) : null}
            {isConnected && !isDiscordConnected(userData) ? ( // stage 2: discord oauth
              userData ? (
                <StageTwoExistingUser />
              ) : (
                <StageTwoNewUser />
              )
            ) : null}
            {isConnected && userData && isDiscordConnected(userData) ? (
              <StageThreeSuccess />
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignatureLayout;
