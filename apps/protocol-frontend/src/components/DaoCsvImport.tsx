import { useState, useRef, ReactNode } from 'react';
import {
  Button,
  Flex,
  Icon,
  IconButton,
  InputGroup,
  Text,
  FormControl,
} from '@chakra-ui/react';
import { UseFormRegisterReturn, useForm, SubmitHandler } from 'react-hook-form';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { daoCsvFormValidation } from '../utils/validations';
import { ErrorMessage } from '@govrn/protocol-ui';
import { MAX_CSV_UPLOAD_SIZE } from '../utils/constants';
interface FileUploadProps {
  register: UseFormRegisterReturn;
  accept?: string;
  children?: ReactNode;
}

const FileUpload = ({ register, accept, children }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick} width="fit-content">
      <input
        type={'file'}
        multiple={false}
        accept={accept}
        hidden
        ref={e => {
          ref(e);
          inputRef.current = e;
        }}
        {...rest}
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
  console.log('touched fields', touchedFields);
  return (
    <Flex direction="column" gap={4} width="100%" color="gray.800">
      <form onSubmit={handleSubmit(handleCsvUpload)}>
        <FormControl isInvalid={!!errors['daoCsvFile']} isRequired>
          <Flex
            alignItems="center"
            justifyContent="flex-start"
            gap={2}
            marginY={2}
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
            <Text>
              Your file should be a CSV no larger than{' '}
              {Number(MAX_CSV_UPLOAD_SIZE / (1024 * 1024)).toFixed(0)}mb
            </Text>
          </Flex>

          {errors['daoCsvFile'] ? (
            <Flex direction="row" alignItems="center" marginY={4}>
              <Icon
                as={AiFillExclamationCircle}
                color="red.500"
                width="16px"
                height="16px"
                marginRight={2}
              />
              <ErrorMessage
                marginY={0}
                errorMessage={errors['daoCsvFile']?.message?.toString()}
              />
            </Flex>
          ) : (
            getValues('daoCsvFile') !== undefined && (
              <Flex direction="row" alignItems="center" marginY={4}>
                <Icon
                  as={AiFillCheckCircle}
                  color="brand.purple"
                  width="16px"
                  height="16px"
                  marginRight={2}
                />
                <Text fontSize="sm" color="brand.purple">
                  {daoCsvFilename}
                </Text>
              </Flex>
            )
          )}
          <Flex align="flex-end" marginTop={4}>
            <Button
              type="submit"
              variant="primary"
              isDisabled={!!errors['daoCsvFile']}
            >
              Import
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Flex>
  );
};

export default DaoCsvImport;
