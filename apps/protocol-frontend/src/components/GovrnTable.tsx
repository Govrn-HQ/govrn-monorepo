import {
  Box,
  Flex,
  chakra,
  Table as ChakraTable,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { flexRender, RowData, Table } from '@tanstack/react-table';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';

interface GovrnTableProps<T> extends TableProps {
  controller: Table<T>;
}

const GovrnTable = <T extends RowData>(props: GovrnTableProps<T>) => {
  const { controller, ...rest } = props;

  return (
    <ChakraTable {...rest}>
      <Thead backgroundColor="gray.50">
        {controller.getHeaderGroups().map(headerGroup => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Th key={header.id} borderColor="gray.100">
                {header.isPlaceholder ? null : (
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    {...{
                      onClick: header.column.getToggleSortingHandler(),
                      cursor: 'pointer',
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}

                    <chakra.span marginLeft="4">
                      {{
                        asc: <IoArrowUp aria-label="sorted-ascending" />,
                        desc: <IoArrowDown aria-label="sorted-descending" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </chakra.span>
                  </Flex>
                )}
              </Th>
            ))}
            <Th borderColor="gray.100" />
          </Tr>
        ))}
      </Thead>

      <Tbody>
        {controller.getRowModel().rows.map(row => {
          return (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <Td borderColor="gray.100" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
};

export default GovrnTable;
