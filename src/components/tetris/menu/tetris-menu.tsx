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
import { Tetris } from '../game';

export const TetrisMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mb={2}>
      <Button width="full" onClick={onOpen}>
        Tetris
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
            <Tetris />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
