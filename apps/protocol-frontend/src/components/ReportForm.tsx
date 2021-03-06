import { useCallback, useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button } from '@chakra-ui/react';
import {
  Input,
  Textarea,
  DatePicker,
  CreatableSelect,
  Select,
} from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { reportFormValidation } from '../utils/validations';
import { useNavigate } from 'react-router-dom';

const useYupValidationResolver = (reportValidationSchema: any) =>
  useCallback(
    async (data) => {
      try {
        const values = await reportFormValidation.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [reportFormValidation]
  );

const ReportForm = () => {
  const { userActivityTypes, createContribution, allDaos } = useUser();

  const navigate = useNavigate();

  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(reportFormValidation),
  });
  const { handleSubmit, setValue, reset } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState(new Date());
  const [activityValue, setActivityValue] = useState('');

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
      ...userActivityTypes.map((activity) => activity.name),
      ...activityTypesList,
    ]),
  ];

  const daoListOptions = allDaos.map((dao) => ({
    value: dao.id,
    label: dao.name,
  }));

  const combinedActivityTypeOptions = combinedActivityTypesList.map(
    (activity) => ({
      value: activity,
      label: activity,
    })
  );

  const createContributionHandler = async (values: any) => {
    setActivityValue(values.activityType);
    createContribution(values, reset, navigate);
  };

  return (
    <Stack spacing={{ base: '6', lg: '4' }} width="100%" color="gray.900">
      <form onSubmit={handleSubmit(createContributionHandler)}>
        <Input
          name="name"
          label="Name of Contribution"
          tip="Please add the name of your Contribution."
          placeholder="Govrn Protocol Pull Request"
          localForm={localForm} //TODO: resolve this type issue -- need to investigate this
        />
        <CreatableSelect
          name="activityType"
          label="Activity Type"
          placeholder="Select an activity type or add a new one"
          onChange={(activity) => {
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
          localForm={localForm} //TODO: resolve this type issue -- need to investigate this
        />
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
        <DatePicker
          name="engagementDate"
          localForm={localForm}
          label="Date of Contribution Engagement (UTC)"
          tip="Please select the date when you did this Contribution."
          defaultValue={engagementDateValue}
          maxDate={new Date()}
          onChange={(date) => {
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
          >
            Add Contribution
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default ReportForm;
