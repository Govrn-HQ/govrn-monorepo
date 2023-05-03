import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DaoTextareaFormValues } from '../types/forms';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Input, Textarea } from '@govrn/protocol-ui';
import { splitEntriesByComma } from '../utils/arrays';
import { daoTextareaFormValidation } from '../utils/validations';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useOverlay } from '../contexts/OverlayContext';
import { useUser } from '../contexts/UserContext';

interface DaoTextareaFormProps {
  onSuccess: (daoId: number) => void;
}

const DaoTextareaForm = ({ onSuccess }: DaoTextareaFormProps) => {
  const { userData } = useUser();
  const [importing, setImporting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(daoTextareaFormValidation),
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields },
  } = localForm;
  const { setModals } = useOverlay();

  const watchAddress = watch('daoMemberAddresses');

  const { mutateAsync: createDaoUser } = useDaoUserCreate();

  const daoTextareaImportHandler: SubmitHandler<
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

      const daoId = await createDaoUser({
        newDaoUser: {
          userId: userData?.id,
          guildId: 0,
          guildName: values.guildName,
          userAddress: userData?.address,
          membershipStatus: 'Admin',
        },
        creatingNewDao: true,
      }).then(data => {
        uniqueParsedDaoMemberAddresses.forEach(address => {
          createDaoUser({
            newDaoUser: {
              userId: userData?.id, // summoner's userId still needed for the resolver -- it still creates new users with a unique ID
              guildId: data.mutationData.createGuildUserCustom.guild_id,
              guildName: values.guildName,
              userAddress: address,
              membershipStatus: 'Member',
            },
          });
        });

        return data.mutationData.createGuildUserCustom.guild_id;
      });

      onSuccess(daoId);
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
          placeholder="YourDAO"
          isRequired
          localForm={localForm}
        />
        <Textarea
          name="daoMemberAddresses"
          label="DAO Member Addresses"
          tip='Enter a comma-separated list of Ethereum addresses. For example: "0x..., 0x...'
          placeholder="0x..., 0x..."
          onChange={addresses => setValue('daoMemberAddresses', addresses)}
          isRequired
          localForm={localForm}
        />
        {!errors['daoMemberAddresses'] &&
          watchAddress !== undefined &&
          watchAddress !== '' && (
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
