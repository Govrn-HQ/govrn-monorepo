import { Flex, Heading, IconButton, Text, Box } from '@chakra-ui/react';

interface DaoImportCardProps {
  importName: string;
  importDescription: string;
  importModalFunction: () => void;
}

const DaoImportCard = ({
  importName,
  importDescription,
  importModalFunction,
}: DaoImportCardProps) => {
  return (
    <Flex
      direction="column"
      background="white"
      minWidth="14rem"
      borderRadius="md"
      padding={8}
    >
      <Heading as="h4" fontWeight="600" fontSize="md">
        {importName}
      </Heading>
    </Flex>
  );
};

export default DaoImportCard;
