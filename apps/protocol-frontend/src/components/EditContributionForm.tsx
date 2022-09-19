import { useEffect, useState } from 'react';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import {
  CreatableSelect,
  DatePicker,
  Input,
  Select,
  Textarea,
} from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../contexts/UserContext';
import { editContributionFormValidation } from '../utils/validations';
import { UIContribution } from '@govrn/ui-types';
import { ContributionFormValues } from '../types/forms';

interface EditContributionFormProps {
  contribution: UIContribution;
  onClose?: () => void;
}

const EditContributionForm = ({
  contribution,
  onClose,
}: EditContributionFormProps) => {
  const { updateContribution, userActivityTypes, allDaos } = useUser();
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(editContributionFormValidation),
  });
  const { handleSubmit, setValue, reset } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState<Date | null>(
    new Date(contribution?.date_of_engagement),
  );

  useEffect(() => {
    setValue('name', contribution?.name);
    setValue('details', contribution?.details);
    setValue('proof', contribution?.proof);
    setValue('engagementDate', new Date(contribution?.date_of_engagement));
    setValue('activityType', contribution?.activity_type.name);
    setValue(
      'daoId',
      contribution?.guilds[0]?.guild.id
        ? contribution?.guilds[0]?.guild.id
        : daoReset[0].value,
    );
  }, [contribution]);

  const activityTypesList = [
    'Pull Request',
    'Documentation',
    'Note Taking',
    'Design',
    'Other',
  ];
  const combinedActivityTypesList = [
    ...new Set([
      ...activityTypesList,
      ...userActivityTypes.map(activity => activity.name),
    ]),
  ];

  const combinedActivityTypeOptions = combinedActivityTypesList.map(
    activity => ({
      value: activity,
      label: activity,
    }),
  );

  const daoListOptions = allDaos.map(dao => ({
    value: dao.id,
    label: dao.name ?? '',
  }));

  const daoReset = [
    {
      value: null,
      label: 'No DAO',
    },
  ];

  const combinedDaoListOptions = [...new Set([...daoReset, ...daoListOptions])];

  const updateContributionHandler: SubmitHandler<
    ContributionFormValues
  > = async values => {
    updateContribution(contribution, values);
    reset();
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      {contribution !== undefined && (
        <form onSubmit={handleSubmit(updateContributionHandler)}>
          <Text paddingBottom={2}>{contribution?.name}</Text>
          <Input
            name="name"
            label="Contribution Name"
            tip="What is the name of this Contribution?"
            placeholder="DAOContributor"
            defaultValue={contribution?.name}
            localForm={localForm}
            dataTestId="editContributionForm-name"
          />
          <CreatableSelect
            name="activityType"
            label="Activity Type"
            defaultValue={{
              value: contribution?.activity_type?.name,
              label: contribution?.activity_type?.name,
            }}
            onChange={activity => {
              setValue('activityType', activity.value);
            }}
            options={combinedActivityTypeOptions}
            localForm={localForm}
          />
          <Textarea
            name="details"
            label="Details"
            tip="Briefly describe your Contribution"
            placeholder="I added a section to our onboarding documentation that provides an overview of our Discord channels."
            variant="outline"
            defaultValue={contribution?.details ?? ''}
            localForm={localForm}
          />
          <Input
            name="proof"
            label="Proof of Contribution"
            tip="Please add a URL to a proof of your contribution."
            placeholder="https://github.com/DAO-Contributor/DAO-Contributor/pull/1"
            defaultValue={contribution?.proof ?? ''}
            localForm={localForm} //TODO: resolve this type issue -- need to investigate this
            dataTestId="editContributionForm-proof"
          />
          <Select
            name="daoId"
            label="DAO"
            placeholder="Select a DAO to associate this Contribution with."
            defaultValue={{
              value: contribution?.guilds[0]?.guild.id
                ? contribution?.guilds[0]?.guild.id
                : daoReset[0].value,
              label: contribution?.guilds[0]?.guild.name
                ? contribution?.guilds[0]?.guild.name
                : daoReset[0].label,
            }}
            onChange={dao => {
              setValue('daoId', (Array.isArray(dao) ? dao[0] : dao)?.value);
            }}
            options={combinedDaoListOptions}
            localForm={localForm}
          />
          <DatePicker
            name="engagementDate"
            localForm={localForm}
            label="Date of Contribution Engagement (UTC)"
            defaultValue={engagementDateValue}
            maxDate={new Date()}
            onChange={date => {
              if (Array.isArray(date)) {
                return;
              }
              setEngagementDateValue(date);
              setValue('engagementDate', date);
            }}
          />
          <Flex align="flex-end" marginTop={4}>
            <Button
              type="submit"
              width="100%"
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.100' }}
              data-cy="updateContribution-test-btn"
            >
              Update Contribution
            </Button>
          </Flex>
        </form>
      )}
    </Stack>
  );
};

export default EditContributionForm;
