import { useState } from 'react';
import { Select } from '@govrn/protocol-ui';
import { Stack, Flex, Button, Text, Progress } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';

interface BulkDaoAttributeModalProps {
  contributions: any;
}

const BulkDaoAttributeModal = ({
  contributions,
}: BulkDaoAttributeModalProps) => {
  const { allDaos } = useUser();
  const [attributing, setAttributing] = useState(false);
  const [currentAttribution, setCurrentAttribution] = useState(1);

  const bulkAttributeDaoHandler = (contributions) => {
    setAttributing(true);
    console.log('firing');
    // logic
    setAttributing(false);
  };

  const daoListOptions = allDaos.map((dao) => ({
    value: dao.id,
    label: dao.name,
  }));

  const daoReset = [
    {
      value: null,
      label: 'No DAO',
    },
  ];

  const combinedDaoListOptions = [...new Set([...daoReset, ...daoListOptions])];

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <Text paddingBottom={2}>
        Attributing {contributions.length}{' '}
        {contributions.length === 1 ? 'Contribution' : 'Contributions'}
      </Text>
      {attributing ? (
        <Progress
          color="brand.primary"
          value={currentAttribution % contributions.length}
        />
      ) : null}
      <Flex align="flex-end" marginTop={4}>
        <Select
          name="daoId"
          label="DAO"
          tip="Please select a DAO to associate this Contribution with. This is optional."
          placeholder="Select a DAO to assocaite this Contribution with."
          onChange={(dao) => {
            setValue('daoId', dao.value);
          }}
          options={daoListOptions}
          localForm={localForm}
        />
        <Button
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          onClick={() => bulkAttributeDaoHandler(contributions)}
          isLoading={attributing}
        >
          Attribute{' '}
          {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default BulkDaoAttributeModal;
