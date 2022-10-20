import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

interface GlobalFilterTypes<T> {
  preGlobalFilteredRows: T[];
  globalFilter: string;
  setGlobalFilter: (globalFilter: string) => void;
}

const GlobalFilter = <T,>({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: GlobalFilterTypes<T>) => {
  // this currently uses the Chakra UI input instead of the component library one since it is controlled
  // need to add controlled support to the one in the component library

  const rowCount = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChangeDebouncer = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Flex paddingX={{ base: '4', md: '6' }} paddingBottom={4}>
      <InputGroup maxW="xs">
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="gray.500" boxSize="5" />
        </InputLeftElement>
        <Input
          placeholder={`Search ${rowCount} ${
            rowCount === 1 ? 'Contribution' : 'Contributions'
          }`}
          value={value || ''}
          onChange={e => {
            setValue(e.target.value);
            onChangeDebouncer(e.target.value);
          }}
          variant="outline"
        />
      </InputGroup>
    </Flex>
  );
};

export default GlobalFilter;
