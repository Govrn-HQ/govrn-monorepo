import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

interface GlobalFilterTypes {
  preGlobalFilteredRows: any;
  globalFilter: string;
  setGlobalFilter: (globalFilter: string) => void;
}

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: GlobalFilterTypes) => {
  // this currently uses the Chakra UI input instead of the component library one since it is controlled
  // need to add controlled support to the one in the component library

  const rowCount = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChangeDebouncer = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  console.log('filters', globalFilter);

  return (
    <InputGroup maxW="xs">
      <InputLeftElement pointerEvents="none">
        <Icon as={FiSearch} color="muted" boxSize="5" />
      </InputLeftElement>
      <Input
        placeholder={`Search ${rowCount} ${
          rowCount > 1 ? 'Contributions' : 'Contribution'
        }`}
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChangeDebouncer(e.target.value);
        }}
      />
    </InputGroup>
  );
};

export default GlobalFilter;
