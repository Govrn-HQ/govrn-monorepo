import { useState, useRef, ReactNode } from 'react';
import { DaoCsvImportFormValues } from '../types/forms';
import { Input } from '@govrn/protocol-ui';
import {
  Button,
  Flex,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  Text,
  FormControl,
} from '@chakra-ui/react';
import {
  FormProvider,
  UseFormRegisterReturn,
  useForm,
  SubmitHandler,
  useController,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { daoCsvFormValidation } from '../utils/validations';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { AiFillExclamationCircle, AiFillCheckCircle } from 'react-icons/ai';

interface FileUploadProps {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
}

const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick} width="fit-content">
      <input
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={e => {
          ref(e);
          inputRef.current = e;
        }}
      />
      {children}
    </InputGroup>
  );
};

type FormValues = {
  daoCsvFile: File;
};

const DaoCsvImport = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [, setIsUploading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(daoCsvFormValidation),
  });

  const handleCsvUpload = handleSubmit(data => {
    // const file = data.daoCsvFile
    console.log('On Submit: ', data);
  });

  const { ref, ...rest } = register as unknown as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const daoCsvUpload = useRef<HTMLInputElement | null>(null);

  const handleFileUploadButtonClick = () => {
    if (daoCsvUpload.current !== null) {
      daoCsvUpload.current.click();
    }
  };

  console.log('errors', errors);
  console.log('getValues', getValues('daoCsvFile'));
  return (
    <Flex direction="column" gap={4} width="100%" color="gray.800">
      <form onSubmit={handleSubmit(handleCsvUpload)}>
        <FormControl isInvalid={!!errors['daoCsvFile']} isRequired>
          <Flex
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
            paddingBottom={2}
          >
            <FileUpload
              accept={'.csv'}
              register={register('daoCsvFile', { validate: validateFiles })}
            >
              {/* <Button leftIcon={<Icon as={FiFile} />}>Upload</Button> */}
              <IconButton
                size="sm"
                aria-label="Upload a file for your contribution proof"
                icon={<HiOutlinePaperClip />}
                onClick={handleFileUploadButtonClick}
                variant="outline"
              />
            </FileUpload>
            <Text>Your file should be a CSV no larger than 5mb.</Text>
          </Flex>

          {errors['daoCsvFile'] && (
            <Text>{errors['daoCsvFile']?.message?.toString()}</Text>
          )}
        </FormControl>
        {/* <Text fontSize="xs" color="gray.700">
          {getValues('daoCsvFile') === null
            ? 'csv'
            : getValues('daoCsvFile').name}
        </Text> */}
        <Flex
          align="flex-end"
          marginTop={
            !errors['daoCsvFile'] || touchedFields['daoCsvFile'] === false
              ? 4
              : 0
          }
        >
          <Button
            type="submit"
            variant="primary"
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

{
  /* <form onSubmit={handleSubmit(handleCsvUpload)}>
        <FormControl isRequired>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
            paddingBottom={2}
          >
            <InputGroup onClick={handleFileUploadButtonClick}>
              <input
                type="file"
                id="daoCsvUpload"
                accept=".csv"
                style={{ display: 'none', visibility: 'hidden' }}
                {...register('daoCsvUpload')}
                ref={daoCsvUpload}
              />
              <IconButton
                size="sm"
                aria-label="Upload a file for your contribution proof"
                icon={<HiOutlinePaperClip />}
                onClick={handleFileUploadButtonClick}
                variant="outline"
              />
            </InputGroup>
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
        </FormControl>
      </form> */
}
// </Flex>
