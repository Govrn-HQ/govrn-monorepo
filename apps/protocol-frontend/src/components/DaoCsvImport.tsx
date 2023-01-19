import { useRef, ReactNode } from 'react';
import {
  Button,
  Flex,
  Icon,
  IconButton,
  InputGroup,
  Text,
  Stack,
  FormControl,
} from '@chakra-ui/react';
import { UseFormRegisterReturn, useForm, SubmitHandler } from 'react-hook-form';
import { DaoCsvImportFormValues } from '../types/forms';
import { HiOutlinePaperClip } from 'react-icons/hi';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { daoCsvFormValidation } from '../utils/validations';
import { ErrorMessage, HelperText } from '@govrn/protocol-ui';
import { MAX_CSV_UPLOAD_SIZE } from '../utils/constants';
interface FileUploadProps {
  register: UseFormRegisterReturn;
  accept?: string;
  children?: ReactNode;
}

// we can split this into a component that we include in our ui library after we use and refine
const FileUploadInput = ({ register, accept, children }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick} width="fit-content">
      <input
        type="file"
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

const DaoCsvImport = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<DaoCsvImportFormValues>({
    mode: 'all',
    resolver: yupResolver(daoCsvFormValidation),
  });

  const handleCsvUpload: SubmitHandler<
    DaoCsvImportFormValues
  > = async values => {
    if (values !== undefined) {
      console.log('On Submit: ', values.daoCsvFile[0]); // placeholder -- will add the integration to send the csv to the backend
    }
  };

  const daoCsvUpload = useRef<HTMLInputElement | null>(null);

  const handleFileUploadButtonClick = () => {
    if (daoCsvUpload.current !== null) {
      daoCsvUpload.current.click();
    }
  };

  const daoCsvFilename = watch('daoCsvFile')?.[0]?.name;

  return (
    <Flex direction="column" gap={4} width="100%" color="gray.800">
      <form onSubmit={handleSubmit(handleCsvUpload)}>
        <FormControl isInvalid={!!errors['daoCsvFile']} isRequired>
          <Stack spacing={2}>
            <HelperText
              tipText="Your CSV should have columns for address, username, and role."
              fontSize="xs"
              color="gray.700"
            />
            <Flex direction="row" alignItems="center" gap={2} marginY={2}>
              <FileUploadInput
                accept={'.csv'}
                register={register('daoCsvFile')}
              >
                <IconButton
                  size="sm"
                  aria-label="Upload a CSV for the DAO import."
                  icon={<HiOutlinePaperClip />}
                  onClick={handleFileUploadButtonClick}
                  variant="outline"
                />
              </FileUploadInput>

              <Text>
                Your file should be a CSV no larger than{' '}
                {Number(MAX_CSV_UPLOAD_SIZE / (1024 * 1024)).toFixed(0)}mb
              </Text>
            </Flex>
          </Stack>

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
