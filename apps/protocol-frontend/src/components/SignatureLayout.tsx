import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { Flex, Button, Text, VisuallyHidden, Heading } from '@chakra-ui/react';
import { SiDiscord } from 'react-icons/si';
import ConnectWallet from '../components/ConnectWallet';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { GovrnSpinner } from '@govrn/protocol-ui';
import GovrnTextLogo from './GovrnTextLogo';
import useDisplayName from '../hooks/useDisplayName';
import useUserCreate from '../hooks/useUserCreate';
import useDiscordUserDisconnect from '../hooks/useDiscordUserDisconnect';

import { BASE_URL } from '../utils/constants';

import { UIUser } from '@govrn/ui-types';

const SignatureLayout = () => {
  const { isConnected, address } = useAccount();
  const { isAuthenticated } = useAuth();
  const [signatureSteps, setSignatureSteps] = useState<number | null>(null);
  const [searchParams] = useSearchParams();
  const displayNameFromParams = searchParams.get('displayName');
  const { mutateAsync: createUser } = useUserCreate();
  // console.log('display name', displayNameFromParams);
  const { userDataByAddress, userData, isUserLoading } = useUser();
  console.log('userDataByAddress', userDataByAddress);

  const { displayName } = useDisplayName();

  const BACKEND_ADDR = `${BASE_URL}`;
  const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
  const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
  const { mutateAsync: disconnectDiscordUser } = useDiscordUserDisconnect();
  // useEffect(() => {
  //   if (userDataByAddress) {
  //     setCreateProfileSteps(3);
  //   }
  //   if (!userDataByAddress) {
  //     setCreateProfileSteps(1);
  //   }
  // }, [userDataByAddress]);

  const createUserHandler = async () => {
    if (address && displayName !== undefined) {
      await createUser({
        username: displayName || '',
        address,
      });
    }
  };

  // first screen: prompt user to connect wallet
  // second screen: successful signature -> check if user exists -> if exists, move to third screen or create user with display name first then move to third screen
  // third screen: discord oauth prompt (can possibly be combined with second screen)
  // fourth screen: success / error after oauth and next steps

  const NewUserFlow = () => {
    if (isUserLoading) {
      return <GovrnSpinner />;
    }
  };

  const SignatureStageOne = () => {
    <>
      <Text marginBottom={{ base: 10, lg: 16 }} textAlign="center">
        Connect your wallet to Gnosis Chain and sign the signature request to
        verify.
      </Text>
      <ConnectWallet />
    </>;
  };

  const SignatureStageTwo = () => {
    <>
      <Text marginBottom={{ base: 10, lg: 16 }} textAlign="center">
        this would be stage 2
      </Text>
      <ConnectWallet />
    </>;
  };

  const isDiscordConnected = (userData?: UIUser | null) =>
    userDataByAddress?.discord_users?.length &&
    userDataByAddress.discord_users[0].active_token;

  const handleDiscordAuth = async () => {
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
    params.append('state', `${state}/${address}/signature`); // generate string to prevent crsf attack
    params.append('prompt', 'consent');
    window.location.href = `https://discord.com/oauth2/authorize?${params.toString()}`;
  };

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
          maxW={{ base: '70%', lg: '60%' }}
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight="400"
            maxW={{ base: '60%', lg: '70%' }}
          >
            {!isConnected ? (
              <>
                <Text marginBottom={{ base: 10, lg: 16 }} textAlign="center">
                  Connect your wallet to Gnosis Chain and sign the signature
                  request to verify.
                </Text>
                <ConnectWallet />
              </>
            ) : userDataByAddress ? (
              <>
                <Text paddingBottom={8}>
                  Welcome back,{' '}
                  <Text as="span" fontWeight="bolder">
                    {displayName}
                  </Text>
                  <Text as="span" fontWeight="normal">
                    .
                  </Text>
                  <Text>
                    Click the Discord button below to connect your address to
                    your Discord account.
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
                      onClick={handleDiscordAuth}
                      leftIcon={<SiDiscord />}
                    >
                      Connect Discord
                    </Button>
                  )}
                  <ConnectWallet />
                </Flex>
              </>
            ) : displayNameFromParams !== null ? (
              <>
                <Text>
                  Welcome to Govrn! Creating user with your wallet address and
                  the display name of{' '}
                  <Text as="span" fontWeight="bolder">
                    {displayNameFromParams}
                  </Text>
                  . You can change your display name in your profile or through
                  Kevin Malone.
                </Text>
                <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  gap={{ base: 2, lg: 4 }}
                  marginTop={4}
                >
                  {isDiscordConnected(userData) ? (
                    <Button
                      variant="secondary"
                      type="submit"
                      onClick={async () => await disconnectDiscordUser()}
                    >
                      Disconnect Discord
                    </Button>
                  ) : (
                    <Button
                      variant="tertiary"
                      type="submit"
                      onClick={handleDiscordAuth}
                      leftIcon={<SiDiscord />}
                    >
                      Connect Discord
                    </Button>
                  )}
                  <ConnectWallet />
                </Flex>
              </>
            ) : (
              <>
                <Text>
                  Welcome to Govrn! Creating user with your wallet address. You
                  can set your display name in your profile or through Kevin
                  Malone.
                </Text>
                <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  gap={{ base: 2, lg: 4 }}
                  marginTop={4}
                >
                  <Button variant="tertiary" leftIcon={<SiDiscord />}>
                    Connect to Discord
                  </Button>
                  <ConnectWallet />
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignatureLayout;
