import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button, Text, FormLabel, Switch } from '@chakra-ui/react';
import {
  Input,
  Textarea,
  DatePicker,
  CreatableSelect,
  Select,
  GovrnSpinner,
} from '@govrn/protocol-ui';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reportFormValidation } from '../utils/validations';
import { ContributionFormValues } from '../types/forms';
import { useContributions } from '../contexts/ContributionContext';

function CreateMoreSwitch({
  isChecked,
  onChange,
}: {
  isChecked: boolean;
  onChange: () => void;
}) {
  return (
    <Flex m={1} display="flex" alignItems="center" justifyContent="end">
      <FormLabel m={2} htmlFor="create-more">
        <Text fontSize="small" color="gray.600">
          Create more
        </Text>
      </FormLabel>
      <Switch
        id="create-more"
        size="sm"
        colorScheme={'brand.primary'}
        isChecked={isChecked}
        onChange={() => {
          onChange();
        }}
      />
    </Flex>
  );
}

const ReportForm = ({ onFinish }: { onFinish: () => void }) => {
  const { allDaos, isUserActivityTypesLoading, userActivityTypes } = useUser();
  const { isCreatingContribution, createContribution } = useContributions();

  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(reportFormValidation),
  });
  const { handleSubmit, setValue, reset } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState<Date | null>(
    new Date(),
  );

  const [isUserCreatingMore, setUserCreatingMore] = useState(false);

  useEffect(() => {
    setValue('engagementDate', engagementDateValue);
  }, []);

  const activityTypesList = [
    'Pull Request',
    'Documentation',
    'Note Taking',
    'Design',
    'Other',
  ];

  const combinedActivityTypesList = [
    ...new Set([
      ...userActivityTypes.map(activity => activity.name),
      ...activityTypesList,
    ]),
  ];

  const daoListOptions = allDaos.map(dao => ({
    value: dao.id,
    label: dao.name ?? '',
  }));

  const combinedActivityTypeOptions = combinedActivityTypesList.map(
    activity => ({
      value: activity,
      label: activity,
    }),
  );

  const createContributionHandler: SubmitHandler<
    ContributionFormValues
  > = async values => {
    const result = await createContribution(values);
    if (result) {
      reset({
        name: '',
        details: '',
        proof: '',
        activityType: values.activityType,
        date_of_engagement: values.engagementDate,
      });

      if (!isUserCreatingMore) onFinish();
    }
  };

  const toggleCreateMoreSwitch = () => {
    setUserCreatingMore(!isUserCreatingMore);
  };

  return (
    <Stack spacing={{ base: '6', lg: '4' }} width="100%" color="gray.900">
      {isUserActivityTypesLoading ? (
        <GovrnSpinner />
      ) : (
        <FormProvider {...localForm}>
          <form onSubmit={handleSubmit(createContributionHandler)}>
            <Input
              name="name"
              label="Name of Contribution"
              tip="Please add the name of your Contribution."
              placeholder="Govrn Protocol Pull Request"
              localForm={localForm}
              dataTestId="reportForm-name"
            />
            <CreatableSelect
              name="activityType"
              label="Activity Type"
              placeholder="Select an activity type or add a new one"
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
              localForm={localForm}
            />
            <Input
              name="proof"
              label="Proof of Contribution"
              tip="Please add a URL to a proof of your contribution."
              placeholder="https://github.com/DAO-Contributor/DAO-Contributor/pull/1"
              localForm={localForm}
              dataTestId="reportForm-proof"
            />
            <Select
              name="daoId"
              label="DAO"
              tip="Please select a DAO to associate this Contribution with. This is optional."
              placeholder="Select a DAO to associate this Contribution with."
              onChange={dao => {
                setValue('daoId', (Array.isArray(dao) ? dao[0] : dao)?.value);
              }}
              options={daoListOptions}
              localForm={localForm}
            />
            <DatePicker
              name="engagementDate"
              localForm={localForm}
              label="Date of Contribution Engagement (UTC)"
              tip="Please select the date when you did this Contribution."
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
            <Flex align="flex-end" marginTop={4} gap={4}>
              <Button
                type="submit"
                width="100%"
                color="brand.primary.600"
                backgroundColor="brand.primary.50"
                transition="all 100ms ease-in-out"
                _hover={{ bgColor: 'brand.primary.100' }}
                isLoading={isCreatingContribution}
                data-cy="addContribution-btn"
              >
                Add Contribution
              </Button>
            </Flex>

            <CreateMoreSwitch
              isChecked={isUserCreatingMore}
              onChange={() => toggleCreateMoreSwitch()}
            />
          </form>
        </FormProvider>
      )}
    </Stack>
  );
};

export default ReportForm;
