import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { uploadFileIpfs } from '../libs/ipfs';
import { MAX_FILE_UPLOAD_SIZE } from '../utils/constants';
import {
  Stack,
  Flex,
  FormLabel,
  IconButton,
  Link as ChakraLink,
  Button,
  Text,
  Switch,
  Box,
} from '@chakra-ui/react';
import {
  CreatableSelect,
  Input,
  DatePicker,
  GovrnSpinner,
  Select,
  Textarea,
  SelectOption as Option,
  SelectGroupedOptions,
} from '@govrn/protocol-ui';
import { DEFAULT_ACTIVITY_TYPES } from '../utils/constants';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reportFormValidation } from '../utils/validations';
import { ContributionFormValues } from '../types/forms';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { useUserActivityTypesList } from '../hooks/useUserActivityTypesList';
import { useContributionCreate } from '../hooks/useContributionCreate';
import useUserGet from '../hooks/useUserGet';
import { useGovrnToast } from '@govrn/protocol-ui';
import { groupBy } from 'lodash';

const DEFAULT_ACTIVITY_TYPES_OPTIONS: Option<string>[] =
  DEFAULT_ACTIVITY_TYPES.map(activity => {
    return {
      label: activity,
      value: activity,
    };
  });

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
  const { userData } = useUser();
  const toast = useGovrnToast();
  const [searchParams] = useSearchParams();
  const [, setIpfsUri] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputField = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [, setIsUploading] = useState(false);
  const [ipfsError, setIpfsError] = useState(false);

  const handleFileUploadButtonClick = () => {
    if (fileInputField.current !== null) {
      fileInputField.current.click();
    }
  };

  const daoIdParam = Number(searchParams.get('daoId'));

  const handleImageSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event?.target.files ? event.target.files[0] : null;
    if (file !== null) {
      setValue('proof', '');
      setFileError(null);
      if (file.size > MAX_FILE_UPLOAD_SIZE) {
        setFileError(
          'File is too large. Please select something smaller than 5 MB.',
        );
        return;
      }
    }
    if (file && fileError === null) {
      setIsUploading(true);
      try {
        setSelectedFile(file);
        const ipfsImageUri = await uploadFileIpfs(file, true);
        if (ipfsImageUri) {
          setIpfsUri(ipfsImageUri);
          setValue('proof', ipfsImageUri);
          setIsUploading(false);
        }
      } catch (error) {
        setSelectedFile(null);
        setIpfsError(true);
        toast.error({
          title: 'Unable to upload to IPFS.',
          description: `Please select a different proof URL or try to upload another file.`,
        });
        setIsUploading(false);
      }
    }
  };

  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(reportFormValidation),
  });
  const { handleSubmit, setValue, reset } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState<Date>(
    new Date(),
  );

  const [isUserCreatingMore, setUserCreatingMore] = useState(false);

  const {
    mutateAsync: createNewContribution,
    isLoading: createNewContributionIsLoading,
  } = useContributionCreate();

  const createContributionHandler: SubmitHandler<
    ContributionFormValues
  > = async values => {
    if (selectedFile && fileError === null && !ipfsError) {
      try {
        await uploadFileIpfs(selectedFile, false);
        setIpfsError(false);
      } catch (error) {
        console.error(error);
        setIpfsError(true);
        toast.error({
          title: 'Unable to Upload to IPFS',
          description: `Something went wrong. Please try again: ${error}`,
        });
        return;
      }
    }
    if (!ipfsError) {
      const result = await createNewContribution(values);
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
    }
  };

  const toggleCreateMoreSwitch = () => {
    setUserCreatingMore(!isUserCreatingMore);
  };

  const {
    data: useUserData,
    isError: useUserError,
    isLoading: useUserLoading,
  } = useUserGet({
    userId: userData?.id,
  });
  const daoListOptions = useMemo(() => {
    return (
      useUserData?.guild_users.map(dao => ({
        value: dao.guild.id,
        label: dao.guild.name ?? '',
      })) || []
    );
  }, [useUserData]);

  useEffect(() => {
    const matchedDao = daoListOptions.find(dao => dao.value === daoIdParam);
    setValue('engagementDate', engagementDateValue);
    setValue('daoId', matchedDao?.value ?? null); // allows user to submit contribution with a preset daoId query param without needing to touch the field
  }, [engagementDateValue, setValue, daoListOptions, daoIdParam]);

  // renaming these on destructuring incase we have parallel queries:
  const {
    isLoading: userActivityTypesIsLoading,
    isError: userActivityTypesIsError,
    data: userActivityTypesData,
  } = useUserActivityTypesList();

  const combinedActivityTypeOptions: SelectGroupedOptions<string> =
    useMemo(() => {
      const groupedActivityTypes = groupBy(
        userActivityTypesData?.map(activity => ({
          activity: activity.name,
          guild: activity.guilds[0]?.guild?.name,
        })),
        'guild',
      );

      return [
        ...DEFAULT_ACTIVITY_TYPES_OPTIONS,
        ...Object.keys(groupedActivityTypes).map(key => ({
          label: key,
          options: groupedActivityTypes[key].map(item => ({
            value: item.activity,
            label: item.activity,
          })),
        })),
      ];
    }, [userActivityTypesData]);

  // the loading and fetching states from the query are true:
  if (userActivityTypesIsLoading || useUserLoading) {
    return <GovrnSpinner />;
  }

  // there is an error with the query:
  if (userActivityTypesIsError) {
    return <Text>An error occurred fetching User Activity Types.</Text>;
  }

  if (useUserError) {
    return <Text>An error occurred fetching DAOs.</Text>;
  }

  // we can now return the component knowing that it is no longer loading and fetching, and there is no error:
  return (
    <Stack spacing={{ base: '6', lg: '4' }} width="100%" color="gray.900">
      <FormProvider {...localForm}>
        <form>
          <Input
            name="name"
            label="Name of Contribution"
            tip="Please add the name of your contribution."
            placeholder="Govrn Protocol Pull Request"
            localForm={localForm}
            dataTestId="reportForm-name"
          />
          <Select
            name="daoId"
            label="DAO"
            tip={
              <>
                Please select a DAO to associate this contribution with.
                <Box fontWeight={700} lineHeight={2}>
                  This is optional. Don't see your DAO? Request to add it{' '}
                  <ChakraLink
                    href="https://airtable.com/shrOedOjQpH9xlg7l"
                    isExternal
                    textDecoration="underline"
                  >
                    here
                  </ChakraLink>
                </Box>
              </>
            }
            placeholder="Select a DAO to associate this contribution with."
            onChange={dao => {
              setValue('daoId', (Array.isArray(dao) ? dao[0] : dao)?.value);
            }}
            options={daoListOptions}
            defaultValue={daoListOptions.find(dao => dao.value === daoIdParam)}
            localForm={localForm}
          />
          <CreatableSelect
            name="activityType"
            label="Activity Type"
            placeholder="Select an activity type or add a new one"
            onChange={activity => {
              setValue('activityType', (activity as Option<string>)?.value);
            }}
            options={combinedActivityTypeOptions}
            localForm={localForm}
          />
          <Textarea
            name="details"
            label="Details"
            tip="Briefly describe your contribution"
            placeholder="I added a section to our onboarding documentation that provides an overview of our Discord channels."
            variant="outline"
            localForm={localForm}
          />
          <Input
            name="proof"
            label="Proof of Contribution"
            tip="Please add a URL to a proof of your contribution or upload a file to IPFS (smaller than 5 MB)."
            placeholder="https://github.com/DAO-Contributor/DAO-Contributor/pull/1"
            localForm={localForm}
            dataTestId="reportForm-proof"
            onChange={e => {
              if (ipfsError === true) {
                setSelectedFile(null);
                setIpfsError(false);
                setValue('proof', e?.target?.value);
              }
            }}
          />
          <Flex
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
            paddingBottom={2}
          >
            <label htmlFor="fileUpload">
              <IconButton
                size="sm"
                aria-label="Upload a file for your contribution proof"
                icon={<HiOutlinePaperClip />}
                onClick={handleFileUploadButtonClick}
                variant="outline"
              />
            </label>
            <input
              type="file"
              id="fileUpload"
              ref={fileInputField}
              onChange={handleImageSelect}
              style={{ display: 'none', visibility: 'hidden' }}
            />
            <Text fontSize="xs" color="gray.700">
              {selectedFile === null
                ? 'Select a file to upload to IPFS. Files uploaded to IPFS are publicly available.'
                : selectedFile?.name}
            </Text>
          </Flex>
          <Flex paddingBottom={4}>
            {fileError && (
              <Text fontSize="xs" color="red.500">
                {fileError}
              </Text>
            )}
          </Flex>
          <DatePicker
            name="engagementDate"
            localForm={localForm}
            label="Date of Contribution Engagement (UTC)"
            tip="Please select the date when you did this contribution."
            defaultValue={engagementDateValue}
            maxDate={new Date()}
            onChange={date => {
              if (Array.isArray(date)) {
                return;
              }
              setEngagementDateValue(date ?? new Date());
              setValue('engagementDate', date);
            }}
          />
          <Flex paddingBottom={4}>
            {ipfsError && (
              <Text fontSize="xs" color="red.500">
                Something went wrong uploading to IPFS. Please select a
                different proof URL or try to upload another file.
              </Text>
            )}
          </Flex>
          <Flex
            direction="row"
            justifyContent="flex-start"
            marginTop={4}
            gap={4}
          >
            <Button
              variant="primary"
              isLoading={createNewContributionIsLoading}
              data-cy="addContribution-btn"
              disabled={ipfsError}
              onClick={handleSubmit(createContributionHandler)}
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
    </Stack>
  );
};

export default ReportForm;
