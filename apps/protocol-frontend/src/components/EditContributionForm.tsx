import { useCallback, useEffect, useState } from 'react';
import { Stack, Flex, Button, Text } from '@chakra-ui/react';
import { Input, Textarea, DatePicker, Select } from '@govrn/protocol-ui';
import { GovrnProtocol } from '@govrn/protocol-client';
import { useForm } from 'react-hook-form';
import { useUser } from '../contexts/UserContext';
import { editContributionFormValidation } from '../utils/validations';

interface EditContributionFormProps {
  contribution: any;
  onClose?: () => void;
}

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

const useYupValidationResolver = (userValidationSchema: any) =>
  useCallback(
    async (data) => {
      try {
        const values = await userValidationSchema.validate(data, {
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
    [userValidationSchema]
  );

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

const EditContributionForm = ({
  contribution,
  onClose,
}: EditContributionFormProps) => {
  const { userData } = useUser();
  const govrn = new GovrnProtocol(protocolUrl);
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(editContributionFormValidation),
  });
  const { handleSubmit, setValue, getValues } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState(
    new Date(contribution?.date_of_engagement)
  );
  console.log('contribution', contribution);
  console.log('contribution activity type', contribution.activity_type.name);

  useEffect(() => {
    setValue('engagementDate', new Date(contribution?.date_of_engagement));
    setValue('activityType', mappedSelectedActivityType);
  }, [contribution]);

  const editContribution = async (values: any) => {
    try {
      if (userData.id !== contribution.user.id) {
        throw new Error('You can only edit your own Contributions.');
      }
      console.log('values', values);
      if (contribution.status !== 'staging') {
        throw new Error(
          'You can only edit Contributions with a Staging status.'
        );
      }
      const response = await govrn.contribution.update({
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
          // date_of_engagement: new Date(values.engagementDate).toISOString(),
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
        where: {
          id: contribution.id,
        },
      });
      console.log('response', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(editContribution)}>
        <Text paddingBottom={2}>{contribution.name}</Text>
        <Input
          name="name"
          label="Contribution Name"
          tip="What is the name of this Contribution?"
          placeholder="DAOContributor"
          defaultValue={contribution.name}
          localForm={localForm} //TODO: resolve this type issue -- need to investigate this
        />
        <Select
          name="activityType"
          label="Activity Type"
          defaultValue={{
            value: contribution?.activity_type?.name,
            label: contribution?.activity_type?.name,
          }}
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
            Update Contribution
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default EditContributionForm;
