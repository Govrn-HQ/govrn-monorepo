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
  daoCsvFile: File[];
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
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(daoCsvFormValidation),
  });

  const handleCsvUpload = handleSubmit(data => {
    console.log('On Submit: ', data.daoCsvFile[0]);
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
  const daoCsvFilename = watch('daoCsvFile')?.[0]?.name;
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
            <FileUpload accept={'.csv'} register={register('daoCsvFile')}>
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

        {getValues('daoCsvFile') !== undefined && (
          <Text fontSize="xs" color="gray.700">
            {daoCsvFilename}
          </Text>
        )}
        <Flex
          align="flex-end"
          // marginTop={
          //   !errors['daoCsvFile'] || touchedFields['daoCsvFile'] === false
          //     ? 4
          //     : 0
          // }
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
