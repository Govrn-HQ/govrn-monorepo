import { useEffect, useState, useRef } from 'react';
import { uploadFileIpfs } from '../libs/ipfs';
import { MAX_FILE_UPLOAD_SIZE } from '../utils/constants';
import { Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
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
import { HiOutlinePaperClip, HiCheck } from 'react-icons/hi';

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

  const [, setIpfsUri] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputField = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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
          'File size is too large. Please select something smaller than 5 MB.',
        );
        return;
      }
    }
    setSelectedFile(file);
  };

  const handleIpfsUpload = async () => {
    if (selectedFile) {
      setIsUploading(true);
      const ipfsImageUri = await uploadFileIpfs(selectedFile);
      setIsUploading(false);
      setIpfsUri(ipfsImageUri);
      setValue('proof', ipfsImageUri);
    }
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
            {selectedFile !== null && fileError === null && (
              <Button
                isLoading={isUploading}
                fontWeight="md"
                size="sm"
                leftIcon={<HiCheck />}
                variant="outline"
                colorScheme="green"
                onClick={handleIpfsUpload}
                disabled={fileError !== null}
              >
                Upload to IPFS
              </Button>
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
      )}
    </Stack>
  );
};

export default EditContributionForm;
