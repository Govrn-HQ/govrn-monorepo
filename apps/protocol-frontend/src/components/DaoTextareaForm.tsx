import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { AiFillExclamationCircle, AiFillCheckCircle } from 'react-icons/ai';
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
    if (validationError !== null) {
      setValidationError(null);
    }
    setDaoMemberAddresses(e.target.value);
    validateDaoMemberAddresses();
  };

  const validateDaoMemberAddresses = () => {
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
    <Flex direction="column" gap={4} width="100%" color="gray.800">
      <ControlledTextarea
        name="daoMemberAddresses"
        tip='Enter a comma-separated list of Ethereum addresses. For example: "0x..., 0x...'
        placeholder="0x..., 0x..."
        value={daoMemberAddresses}
        onChange={handleDaoTextAreaChange}
        onBlur={validateDaoMemberAddresses}
      />
      {validationError !== null ? (
        <Flex direction="row" alignItems="center" marginY={0}>
          <Icon
            as={AiFillExclamationCircle}
            color="red.500"
            width="16px"
            height="16px"
            marginRight={2}
          />
          <Text fontSize="xs" color="red.500">
            {validationError}
          </Text>
        </Flex>
      ) : (
        <Flex direction="row" alignItems="center" marginY={0}>
          {daoMemberAddresses !== '' ? (
            <>
              <Icon
                as={AiFillCheckCircle}
                color="brand.purple"
                width="16px"
                height="16px"
                marginRight={2}
              />
              <Text fontSize="xs" color="brand.purple">
                Address list meets formatting requirements.
              </Text>
            </>
          ) : null}
        </Flex>
      )}
      <Flex align="flex-end">
        <Button
          type="submit"
          variant="primary"
          onClick={validateDaoMemberAddresses} // submit handler will be added with the integration
          isDisabled={validationError !== null}
        >
          Import
        </Button>
      </Flex>
    </Flex>
  );
};

export default DaoTextareaForm;
