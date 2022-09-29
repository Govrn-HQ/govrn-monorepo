import { useEffect, useState, useRef } from 'react';
import { uploadFileIpfs } from '../libs/ipfs';
import { MAX_FILE_UPLOAD_SIZE } from '../utils/constants';
import {
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import {
  CreatableSelect,
  DatePicker,
  GovrnSpinner,
  Input,
  Select,
  Textarea,
} from '@govrn/protocol-ui';
import { DEFAULT_ACTIVITY_TYPES } from '../utils/constants';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../contexts/UserContext';
import { editContributionFormValidation } from '../utils/validations';
import { UIContribution } from '@govrn/ui-types';
import { ContributionFormValues } from '../types/forms';
import { useContributions } from '../contexts/ContributionContext';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { useUserActivityTypesList } from '../hooks/useUserActivityTypesList';
import { useDaosList } from '../hooks/useDaosList';

interface EditContributionFormProps {
  contribution: UIContribution;
  onClose?: () => void;
}

const EditContributionForm = ({ contribution }: EditContributionFormProps) => {
  const { userData } = useUser();
  const { updateContribution } = useContributions();
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(editContributionFormValidation),
  });
  const { handleSubmit, setValue, reset } = localForm;
  const [engagementDateValue, setEngagementDateValue] = useState<Date | null>(
    new Date(contribution?.date_of_engagement),
  );

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

  const daoReset = [
    {
      value: null,
      label: 'No DAO',
    },
  ];

  const combinedDaoListOptions = [...new Set([...daoReset, ...daoListOptions])];

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

  const updateContributionHandler: SubmitHandler<
    ContributionFormValues
  > = async values => {
    if (selectedFile && fileError === null && ipfsError === false) {
      try {
        await uploadFileIpfs(selectedFile, false);
        setIpfsError(false);
      } catch (error) {
        console.error(error);
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
      updateContribution(contribution, values);
      reset();
    }
  };

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

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      {contribution !== undefined && (
        // <form onSubmit={handleSubmit(updateContributionHandler)}>
        <form>
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
            tip="Please add a URL to a proof of your Contribution or upload a file to IPFS (smaller than 5 MB)."
            placeholder="https://github.com/DAO-Contributor/DAO-Contributor/pull/1"
            localForm={localForm}
            dataTestId="editContributionForm-proof"
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
                ? 'Select a file to upload to IPFS'
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
              width="100%"
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.100' }}
              data-cy="updateContribution-test-btn"
              disabled={ipfsError}
              onClick={handleSubmit(updateContributionHandler)}
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
