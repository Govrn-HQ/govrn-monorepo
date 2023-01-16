import { useState } from 'react';
import { Stack, Button, Flex } from '@chakra-ui/react';
import { ControlledTextarea } from '@govrn/protocol-ui';
import { splitEntriesByComma } from '../utils/arrays';

const DaoTextareaForm = () => {
  const [daoMemberAddresses, setDaoMemberAddresses] = useState('');
  const handleDaoTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDaoMemberAddresses(e.target.value);
  };

  const handleDaoTextareaImport = () => {
    const parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
    console.log('dao addresses', parsedDaoMemberAddresses);
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <ControlledTextarea
        name="daoMemberAddresses"
        placeholder="ex. 0xf76d80200226ac250665139b9e435617e4ba55g9m,
0xa69690E88096C6221042394F9fCD5D9e419CDe69,
0xcb696911f2E9819A60ae6b85bEF8d39d6B8E69ccA"
        value={daoMemberAddresses}
        onChange={handleDaoTextAreaChange}
      />
      <Flex align="flex-end" marginTop={4}>
        <Button
          type="submit"
          variant="primary"
          onClick={handleDaoTextareaImport}
        >
          Import
        </Button>
      </Flex>
    </Stack>
  );
};

export default DaoTextareaForm;
