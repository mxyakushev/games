import { Box } from '@chakra-ui/react';
import { MemoryMenu, TetrisMenu } from 'shared';

export const App = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <TetrisMenu />
      <MemoryMenu />
    </Box>
  );
};
