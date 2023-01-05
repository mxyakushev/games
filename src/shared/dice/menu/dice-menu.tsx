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
import { Dice } from '../game';

export const DiceMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mb={2}>
      <Button width="full" onClick={onOpen}>
        Dice
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="#fff"
        size={window.innerWidth < 500 ? 'xs' : 'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <Box mb={4}>
            <ModalCloseButton />
          </Box>
          <ModalBody>
            <Dice />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
