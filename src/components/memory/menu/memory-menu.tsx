import React from 'react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Memory } from '../game';

export const MemoryMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mb={2}>
      <Button width="full" onClick={onOpen}>
        Memory
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="#fff"
        size={window.innerWidth < 560 ? 'xs' : 'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <Box mb={4}>
            <ModalCloseButton />
          </Box>
          <ModalBody>
            <Memory />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
