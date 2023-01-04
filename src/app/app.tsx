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
import { Tetris } from '../shared';

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Button onClick={onOpen}>Tetris</Button>
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
