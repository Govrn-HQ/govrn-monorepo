import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DaoTextareaFormValues } from '../types/forms';
import { AiFillExclamationCircle, AiFillCheckCircle } from 'react-icons/ai';

import { Textarea } from '@govrn/protocol-ui';
import { splitEntriesByComma } from '../utils/arrays';
import { daoTextareaFormValidation, isEthAddress } from '../utils/validations';
import { isArray } from 'lodash';

const DaoTextareaForm = () => {
  // const [daoMemberAddresses, setDaoMemberAddresses] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(daoTextareaFormValidation),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = localForm;

  const daoTextareaImportHandler: SubmitHandler<
    DaoTextareaFormValues
  > = async values => {
    const { daoMemberAddresses } = values;
    setImporting(true);
    const parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
    const uniqueParsedDaoMemberAddresses = [
      ...new Set(parsedDaoMemberAddresses),
    ];
    console.log('values', daoMemberAddresses);
    console.log(
      'uniqueParsedDaoMemberAddresses',
      uniqueParsedDaoMemberAddresses,
    );

    setImporting(false);
  };

  return (
    <Flex direction="column" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(daoTextareaImportHandler)}>
        <Textarea
          name="daoMemberAddresses"
          tip='Enter a comma-separated list of Ethereum addresses. For example: "0x..., 0x...'
          placeholder="0x..., 0x..."
          onChange={addresses => setValue('daoMemberAddresses', addresses)}
          localForm={localForm}
        />
        {!errors['daoMemberAddresses'] &&
          touchedFields['daoMemberAddresses'] === true && (
            <Flex direction="row" alignItems="center" marginY={4}>
              <Icon
                as={AiFillCheckCircle}
                color="brand.purple"
                width="16px"
                height="16px"
                marginRight={2}
              />
              <Text fontSize="sm" color="brand.purple">
                Address list meets formatting requirements.
              </Text>
            </Flex>
          )}
        <Flex align="flex-end">
          <Button
            variant="primary"
            type="submit"
            disabled={importing || errors['daoMemberAddresses'] !== undefined}
          >
            Import
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default DaoTextareaForm;
