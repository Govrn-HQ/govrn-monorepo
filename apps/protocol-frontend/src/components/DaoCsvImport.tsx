import { useState, useRef } from 'react';
import { DaoCsvImportFormValues } from '../types/forms';
import { Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { AiFillExclamationCircle, AiFillCheckCircle } from 'react-icons/ai';

const DaoCsvImport = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [, setIsUploading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const daoCsvUpload = useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleFileUploadButtonClick = () => {
    if (daoCsvUpload.current !== null) {
      daoCsvUpload.current.click();
    }
  };

  const handleCsvUpload: SubmitHandler<
    DaoCsvImportFormValues
  > = async values => {
    console.log('uploading csv', values);
  };

  const localForm = useForm({
    mode: 'all',
    // resolver: yupResolver(reportFormValidation),
  });

  const { register, handleSubmit, setValue, reset } = localForm;

  return (
    <Flex direction="column" gap={4} width="100%" color="gray.800">
      <form onSubmit={handleSubmit(handleCsvUpload)}>
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          gap={2}
          paddingBottom={2}
        >
          <label htmlFor="daoCsvUpload">
            <IconButton
              size="sm"
              aria-label="Upload a CSV for DAO Members"
              icon={<HiOutlinePaperClip />}
              onClick={handleFileUploadButtonClick}
              variant="outline"
            />
          </label>
          <input
            type="file"
            id="daoCsvUpload"
            accept=".csv"
            // ref={fileInputField}
            // onChange={() => console.log('test')}
            // style={{ display: 'none', visibility: 'hidden' }}
            {...register('daoCsvUpload')}
          />
          <Text fontSize="md" color="gray.900">
            {selectedFile === null
              ? 'Select a CSV with DAO Members to upload.'
              : selectedFile?.name}
          </Text>
        </Flex>
        {fileError && (
          <Flex direction="row" alignItems="center" marginY={0}>
            <Icon
              as={AiFillExclamationCircle}
              color="red.500"
              width="16px"
              height="16px"
              marginRight={2}
            />
            <Text fontSize="xs" color="red.500">
              {validationError}
            </Text>
          </Flex>
        )}
        <Flex align="flex-end">
          <Button
            type="submit"
            variant="primary"
            // onClick={handleCsvUpload} // submit handler will be added with the integration
            isDisabled={fileError !== null}
          >
            Import
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default DaoCsvImport;
