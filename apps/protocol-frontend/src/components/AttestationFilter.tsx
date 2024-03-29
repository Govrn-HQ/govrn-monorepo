import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Text,
  Radio,
  RadioGroup,
  IconButton,
} from '@chakra-ui/react';
import { HiOutlineFilter } from 'react-icons/hi';

interface AttestationFilterProps {
  attestationFilter: (filterValue: string) => void;
}

const AttestationFilter = ({ attestationFilter }: AttestationFilterProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          background="gray.50"
          borderRadius="md"
          color="gray.600"
          borderColor="gray.400"
          boxShadow="xs"
          aria-label="Filter attestations"
          icon={<HiOutlineFilter />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Text size="sm" fontWeight="500" paddingBottom="2">
            Verification Status
          </Text>
          <RadioGroup
            onChange={e => {
              attestationFilter(e);
            }}
          >
            <Flex direction="column">
              <Radio value="showAll">
                <Text as="span" fontSize="sm">
                  Show All
                </Text>
              </Radio>
              <Radio value="showVerified">
                <Text as="span" fontSize="sm">
                  Verified
                </Text>
              </Radio>
              <Radio value="showUnverified">
                <Text as="span" fontSize="sm">
                  Unverified
                </Text>
              </Radio>
            </Flex>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AttestationFilter;
