import { useCallback, useState } from 'react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button } from '@chakra-ui/react';
import {
  Input,
  Textarea,
  DatePicker,
  CreatableSelect,
} from '@govrn/protocol-ui';
import { GovrnProtocol } from '@govrn/protocol-client';
import { useForm } from 'react-hook-form';
import { reportFormValidation } from '../utils/validations';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

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

// TODO: Update these to pull in from a set list or config file

const activityTypesList = [
  'Pull Request',
  'Documentation',
  'Note Taking',
  'Design',
  'Other',
];

const activityTypeOptions = activityTypesList.map((activity) => ({
  value: activity,
  label: activity,
}));

const ReportForm = () => {
  const { chainId } = useWallet();
  const { userData } = useUser();
  const govrn = new GovrnProtocol(protocolUrl);
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(reportFormValidation),
  });
  const { handleSubmit, setValue } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState(new Date());

  const createContribution = async (values: any) => {
    try {
      const response = await govrn.contribution.create({
        data: {
          user: {
            connectOrCreate: {
              create: {
                address: userData.address,
                chain_type: {
                  create: {
                    name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                  },
                },
              },
              where: {
                id: userData.id,
              },
            },
          },
          name: values.name,
          details: values.details,
          proof: values.proof,
          activity_type: {
            connectOrCreate: {
              create: {
                name: values.activityType,
              },
              where: {
                name: values.activityType,
              },
            },
          },
          date_of_engagement: new Date(values.engagementDate).toISOString(),
          status: {
            connectOrCreate: {
              create: {
                name: 'staging',
              },
              where: {
                name: 'staging',
              },
            },
          },
        },
      });
      console.log('response', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.900">
      <form onSubmit={handleSubmit(createContribution)}>
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
