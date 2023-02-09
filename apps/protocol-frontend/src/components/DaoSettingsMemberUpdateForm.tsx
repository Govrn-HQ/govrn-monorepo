import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DaoTextareaFormValues } from '../types/forms';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Textarea } from '@govrn/protocol-ui';
import { splitEntriesByComma } from '../utils/arrays';
import { daoMembersUpdateFormValidation } from '../utils/validations';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useUser } from '../contexts/UserContext';

interface DaoSettingsMemberUpdateFormProps {
  daoId: number;
}

const DaoSettingsMemberUpdateForm = ({
  daoId,
}: DaoSettingsMemberUpdateFormProps) => {
  const { userData } = useUser();
  const [importing, setImporting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(daoMembersUpdateFormValidation),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = localForm;

  const { mutateAsync: createDaoUser } = useDaoUserCreate();

  const daoMembersUpdateHandler: SubmitHandler<
    DaoTextareaFormValues
  > = async values => {
    const { daoMemberAddresses } = values;
    setImporting(true);
    if (daoMemberAddresses !== undefined) {
      const parsedDaoMemberAddresses = splitEntriesByComma(
        daoMemberAddresses,
      ).filter(address => address !== userData?.address);
      const uniqueParsedDaoMemberAddresses = [
        ...new Set(parsedDaoMemberAddresses),
      ];
      if (daoId === undefined) return;
      uniqueParsedDaoMemberAddresses.map(address => {
        createDaoUser({
          newDaoUser: {
            userId: userData?.id,
            guildName: values.guildName,
            userAddress: address,
            guildId: daoId,
            membershipStatus: 'Member',
          },
          creatingNewDao: false,
        });
        return true;
      });
      setImporting(false);
    }
  };

  return (
    <Flex direction="column" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(daoMembersUpdateHandler)}>
        <Textarea
          name="daoMemberAddresses"
          label="Add Member Wallet Addresses"
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
            variant="secondary"
            type="submit"
            disabled={importing || errors['daoMemberAddresses'] !== undefined}
          >
            Add
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default DaoSettingsMemberUpdateForm;
