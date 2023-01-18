import { Flex, Heading, Button, Text, Box } from '@chakra-ui/react';

interface DaoImportCardProps {
  importName: string;
  importDescription: string;
  importButtonCopy: string;
  importModalHandler: () => void;
}

const DaoImportCard = ({
  importName,
  importDescription,
  importButtonCopy,
  importModalHandler,
}: DaoImportCardProps) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      background="white"
      borderRadius="md"
      gap={8}
      padding={8}
      color="gray.900"
      // minWidth="md"
    >
      <Heading as="h4" fontWeight="600" fontSize="md">
        {importName}
      </Heading>
      <Text fontSize="md" fontWeight="regular">
        {importDescription}
      </Text>
      <Button
        variant="primary"
        onClick={importModalHandler}
        width="fit-content"
      >
        {importButtonCopy}
      </Button>
    </Flex>
  );
};

export default DaoImportCard;
