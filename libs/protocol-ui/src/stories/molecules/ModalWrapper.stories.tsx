import { Story } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { ModalWrapper, ModalWrapperProps } from '../../';

export default {
  title: 'Components/Molecules/ModalWrapper',
  component: ModalWrapper,
};

const Default = () => {
  const [modals, setModals] = useState({
    storybookModal: false,
  });

  const localOverlay = {
    modals,
    setModals,
  };

  const storybookModalHandler = () => {
    setModals({ storybookModal: true });
  };

  return (
    <Box>
      <Button onClick={storybookModalHandler}>Test it out</Button>
      <ModalWrapper
        name="storybookModal"
        title="Mint Your DAO Contributions"
        localOverlay={localOverlay}
        size="3xl"
        content={
          <Box>
            <Text>Content</Text>
          </Box>
        }
      />
    </Box>
  );
};

export { Default };
