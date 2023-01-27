import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DaoTextareaFormValues } from '../types/forms';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Input, Textarea } from '@govrn/protocol-ui';
import { splitEntriesByComma } from '../utils/arrays';
import { daoTextareaFormValidation } from '../utils/validations';
import { useOverlay } from '../contexts/OverlayContext';

const DaoTextareaForm = () => {
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
  const { setModals } = useOverlay();

  const daoTextareaImportHandler: SubmitHandler<
    DaoTextareaFormValues
  > = async values => {
    const { daoMemberAddresses } = values;
    setImporting(true);
    if (daoMemberAddresses !== undefined) {
      const parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
      const uniqueParsedDaoMemberAddresses = [
        ...new Set(parsedDaoMemberAddresses),
      ];
      console.log(
        'uniqueParsedDaoMemberAddresses',
        uniqueParsedDaoMemberAddresses,
      ); // TODO: replace with the DAO creation logic
      setImporting(false);
      setModals({ createDaoModal: false });
    }
  };

  return (
    <Flex direction="column" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(daoTextareaImportHandler)}>
        <Input
          name="guildName"
          label="DAO Name"
          placeholder="govrn-user"
          localForm={localForm}
        />
        <Textarea
          name="daoMemberAddresses"
          label="DAO Member Addresses"
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
        <Flex
          alignItems="flex-end"
          marginTop={
            !errors['daoMemberAddresses'] ||
            touchedFields['daoMemberAddresses'] === false
              ? 4
              : 0
          }
        >
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
