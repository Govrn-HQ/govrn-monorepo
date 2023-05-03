import { Box, Button, Heading, Spinner, Stack } from '@chakra-ui/react';
import { ControlledSelect, SelectOption as Option } from '@govrn/protocol-ui';
import { useMemo, useState } from 'react';
import { useGuildXYZListGuilds } from '../hooks/useGuildXYZListGuilds';
import { useOverlay } from '../contexts/OverlayContext';

interface GuildImportProps {
  onSuccess: (guildId: number) => void;
}

const GuildImportTitle = ({ title }: { title: string }) => {
  return (
    <Heading as="h5" size="sm" width="80%">
      {title}
    </Heading>
  );
};

const GuildImportModalError = ({ message }: { message: string }) => {
  return (
    <Stack direction="column" width="100%" height="100%" spacing={8} py={8}>
      <GuildImportTitle title="Oops!" />
      <Box width="80%">
        <p>{message}</p>
      </Box>
    </Stack>
  );
};

export const GuildImportModal = ({ onSuccess }: GuildImportProps) => {
  const { setModals } = useOverlay();

  const [selectedGuild, setSelectedGuild] = useState<Option<number> | null>(
    null,
  );

  const {
    data: guildList,
    isLoading: isGuildListLoading,
    isError,
    error,
  } = useGuildXYZListGuilds();

  const daoListOptions = useMemo(() => {
    return (
      guildList?.map(guild => ({
        value: guild.id,
        label: guild.name,
        image: guild.imageUrl,
      })) || []
    );
  }, [guildList]);

  function handleGuildImport() {
    console.log(
      `::: publish message ${guildList?.find(
        g => g.id === (selectedGuild ?? -1),
      )}`,
    );
    onSuccess(selectedGuild?.value ?? -1);
    setModals({});
  }

  if (isGuildListLoading) {
    return (
      <Stack direction="column" width="100%" height="100%" spacing={8} py={8}>
        <GuildImportTitle
          title={'Connecting to Guild.xyz to load joined Guilds...'}
        />
        <Spinner alignContent="center" alignSelf="center" />
      </Stack>
    );
  }

  if (isError && error instanceof Error) {
    return (
      <GuildImportModalError
        message={error?.message ?? 'Failed to load joined guilds.'}
      />
    );
  }

  if (guildList?.length === 0) {
    return (
      <GuildImportModalError
        message={'You have not joined any guilds on Guild.xyz.'}
      />
    );
  }

  return (
    <Stack direction="column" width="100%" height="100%" spacing={8} py={8}>
      <GuildImportTitle title="Success! You are connected to Guild.xyz and can import your DAO here" />
      <Box width="50%" height="100%">
        <ControlledSelect
          isDisabled={isGuildListLoading}
          label="Select a DAO to Join"
          isMulti={false}
          onChange={dao => {
            if (dao instanceof Array || !dao) {
              return;
            }
            setSelectedGuild(dao);
          }}
          value={selectedGuild ?? null}
          options={daoListOptions}
          isSearchable={false}
          isClearable
        />
      </Box>

      <Button
        variant="primary"
        onClick={handleGuildImport}
        isLoading={isGuildListLoading}
        disabled={selectedGuild === null}
        width={{ base: '100%', lg: 'min-content' }}
      >
        Import
      </Button>
    </Stack>
  );
};
