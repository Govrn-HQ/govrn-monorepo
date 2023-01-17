import { useState } from 'react';
import { Stack, Button, Flex, Text } from '@chakra-ui/react';
import { ControlledTextarea } from '@govrn/protocol-ui';
import { splitEntriesByComma } from '../utils/arrays';
import { isEthAddress } from '../utils/validations';
import { isArray } from 'lodash';

const DaoTextareaForm = () => {
  const [daoMemberAddresses, setDaoMemberAddresses] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleDaoTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    // const parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
    // if (
    //   !isArray(parsedDaoMemberAddresses) ||
    //   !parsedDaoMemberAddresses.length
    // ) {
    //   setValidationError('Need to include at least one address.');
    //   throw new Error('Need to include at least one address.');
    // }
    // if (!parsedDaoMemberAddresses.every(isEthAddress)) {
    //   setValidationError(`Invalid addresses included in the list.`);
    //   throw new Error('Invalid addresses included in the list.');
    // }
    if (validationError !== null) {
      setValidationError(null);
    }
    setDaoMemberAddresses(e.target.value);
  };

  const handleDaoTextareaImport = () => {
    const parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
    if (
      !isArray(parsedDaoMemberAddresses) ||
      !parsedDaoMemberAddresses.length
    ) {
      setValidationError('Need to include at least one address.');
      throw new Error('Need to include at least one address.');
    }
    if (!parsedDaoMemberAddresses.every(isEthAddress)) {
      setValidationError(`Invalid addresses included in the list.`);
      throw new Error('Invalid addresses included in the list.');
    }
    // we can uncomment this if we want to prevent duplicates in the list instead of only removing them on submission
    // if (
    //   parsedDaoMemberAddresses.length !== new Set(parsedDaoMemberAddresses).size
    // ) {
    //   setValidationError(`Duplicate addresses included in the list.`);
    //   throw new Error('Duplicate addresses included in the list.');
    // }

    const uniqueParsedDaoMemberAddresses = [
      ...new Set(parsedDaoMemberAddresses),
    ];
    setValidationError(null);
    // import dao members function with the uniqueParsedDaoMemberAddresses as the list of validated addresses to prevent duplicates
    console.log('dao members for import', uniqueParsedDaoMemberAddresses); // adding this so we dont fail the lint for unused vars
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <ControlledTextarea
        name="daoMemberAddresses"
        placeholder="ex. 0xf76d80200226ac250665139b9e435617e4ba55g9m,
0xa69690E88096C6221042394F9fCD5D9e419CDe69,
0xcb696911f2E9819A60ae6b85bEF8d39d6B8E69ccA"
        value={daoMemberAddresses}
        onChange={handleDaoTextAreaChange}
      />
      {validationError !== null && (
        <Text fontSize="xs" color="red.500">
          Something went wrong: {validationError}
        </Text>
      )}
      <Flex align="flex-end" marginTop={4}>
        <Button
          type="submit"
          variant="primary"
          onClick={handleDaoTextareaImport}
          isDisabled={validationError !== null}
        >
          Import
        </Button>
      </Flex>
    </Stack>
  );
};

export default DaoTextareaForm;
