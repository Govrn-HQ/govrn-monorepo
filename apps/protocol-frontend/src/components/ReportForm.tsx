import { useState, useEffect, useRef } from 'react';
import { useUser } from '../contexts/UserContext';
import { uploadFileIpfs } from '../libs/ipfs';
import { MAX_FILE_UPLOAD_SIZE } from '../utils/constants';
import {
  Stack,
  Flex,
  FormLabel,
  IconButton,
  Button,
  Text,
  Switch,
  useToast,
} from '@chakra-ui/react';
import {
  CreatableSelect,
  Input,
  DatePicker,
  GovrnSpinner,
  Select,
  Textarea,
} from '@govrn/protocol-ui';
import { DEFAULT_ACTIVITY_TYPES } from '../utils/constants';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reportFormValidation } from '../utils/validations';
import { ContributionFormValues } from '../types/forms';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { useContributions } from '../contexts/ContributionContext';
import { useUserActivityTypesList } from '../hooks/useUserActivityTypesList';
import { useDaosList } from '../hooks/useDaosList';

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
  const { isCreatingContribution, createContribution } = useContributions();
  const toast = useToast();
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
        toast({
          title: 'Unable to upload to IPFS.',
          description: `Please select a different proof URL or try to upload another file.`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
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
  const [engagementDateValue, setEngagementDateValue] = useState<Date | null>(
    new Date(),
  );

  const [isUserCreatingMore, setUserCreatingMore] = useState(false);

  useEffect(() => {
    setValue('engagementDate', engagementDateValue);
  }, []);

  const createContributionHandler: SubmitHandler<
    ContributionFormValues
  > = async values => {
    if (selectedFile && fileError === null && ipfsError === false) {
      try {
        await uploadFileIpfs(selectedFile, false);
        setIpfsError(false);
      } catch (error) {
        console.error(error);
        setIpfsError(true);
        toast({
          title: 'Unable to Upload to IPFS',
          description: `Something went wrong. Please try again: ${error}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        return;
      }
    }
    if (ipfsError === false) {
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
    }
  };

  const toggleCreateMoreSwitch = () => {
    setUserCreatingMore(!isUserCreatingMore);
  };

  // renaming these on destructuring incase we have parallel queries:
  const {
    isLoading: userActivityTypesIsLoading,
    isError: userActivityTypesIsError,
    data: userActivityTypesData,
  } = useUserActivityTypesList();

  // renaming these on destructuring incase we have parallel queries:
  const {
    isLoading: daosListIsLoading,
    isError: daosListIsError,
    data: daosListData,
  } = useDaosList({
    where: { users: { some: { user_id: { equals: userData?.id } } } }, // show only user's DAOs
  });

  const daoListOptions =
    daosListData?.map(dao => ({
      value: dao.id,
      label: dao.name ?? '',
    })) || [];

  // there is an error with the query:
  if (userActivityTypesIsError) {
    return <Text>An error occurred fetching User Activity Types.</Text>;
  }

  const combinedActivityTypesList = [
    ...new Set([
      ...(userActivityTypesData?.map(activity => activity.name) || []), // type guard since this could be undefined
      ...DEFAULT_ACTIVITY_TYPES,
    ]),
  ];

  const combinedActivityTypeOptions = combinedActivityTypesList.map(
    activity => ({
      value: activity,
      label: activity,
    }),
  );

  // the loading and fetching states from the query are true:
  if (userActivityTypesIsLoading || daosListIsLoading) {
    return <GovrnSpinner />;
  }

  // there is an error with the query:
  if (userActivityTypesIsError) {
    return <Text>An error occurred fetching User Activity Types.</Text>;
  }

  if (daosListIsError) {
    return <Text>An error occurred fetching DAOs.</Text>;
  }

  // we can now return the component knowing that it is no longer loading and fetching, and there is no error:
  return (
    <Stack spacing={{ base: '6', lg: '4' }} width="100%" color="gray.900">
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
            tip="Please add a URL to a proof of your Contribution or upload a file to IPFS (smaller than 5 MB)."
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
                aria-label="Upload a file for your Contribution proof"
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
          <Flex paddingBottom={4}>
            {ipfsError && (
              <Text fontSize="xs" color="red.500">
                Something went wrong uploading to IPFS. Please select a
                different proof URL or try to upload another file.
              </Text>
            )}
          </Flex>
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
              disabled={ipfsError}
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
