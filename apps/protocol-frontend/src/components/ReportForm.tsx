import { useCallback, useState } from 'react';
import { Stack, Flex, Button } from '@chakra-ui/react';
import { Input, Textarea, DatePicker, Select } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { reportFormValidation } from '../utils/validations';

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

const activityTypesList = ['Activity Type 1', 'Activity Type 2'];

const activityTypeOptions = activityTypesList.map((activity) => ({
  value: activity,
  label: activity,
}));

const createReport = async (values: any) => {
  try {
    console.log('createReport', values);
  } catch (error) {
    console.log(error);
  }
};

const ReportForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(reportFormValidation),
  });
  const { handleSubmit, setValue } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState(new Date());

  return (
    <Stack spacing="4" width="100%">
      <form onSubmit={handleSubmit(createReport)}>
        <Select
          name="activityType"
          label="Activity Type"
          // defaultValue={getValues('family')}
          onChange={(value) => setValue('activityType', value)}
          options={activityTypeOptions}
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
        <DatePicker
          name="engagementDate"
          localForm={localForm}
          label="Date of Contribution Engagement (UTC)"
          defaultValue={engagementDateValue}
          onChange={(date) => {
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
          >
            Add Contribution
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default ReportForm;
