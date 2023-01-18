import { useState, useRef } from 'react';
import { Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { AiFillExclamationCircle, AiFillCheckCircle } from 'react-icons/ai';

const DaoCsvImport = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [, setIsUploading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputField = useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleFileUploadButtonClick = () => {
    if (fileInputField.current !== null) {
      fileInputField.current.click();
    }
  };

  const handleCsvUpload = () => {
    console.log('uploading csv');
  };

  return (
    <Flex direction="column" gap={4} width="100%" color="gray.800">
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        gap={2}
        paddingBottom={2}
      >
        <label htmlFor="fileUpload">
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
          id="fileUpload"
          accept=".csv"
          ref={fileInputField}
          onChange={() => console.log('test')}
          style={{ display: 'none', visibility: 'hidden' }}
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
          onClick={handleCsvUpload} // submit handler will be added with the integration
          isDisabled={fileError !== null}
        >
          Import
        </Button>
      </Flex>
    </Flex>
  );
};

export default DaoCsvImport;
