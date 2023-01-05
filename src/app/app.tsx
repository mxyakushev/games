import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { Background, DiceMenu, MemoryMenu, TetrisMenu } from 'components';
import { motion } from 'framer-motion';

export const App = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Background />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <Card>
          <CardHeader fontSize="30px">Play some games !</CardHeader>
          <CardBody>
            <TetrisMenu />
            <MemoryMenu />
            <DiceMenu />
          </CardBody>
        </Card>
      </motion.div>
    </Box>
  );
};
