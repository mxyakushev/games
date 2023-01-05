import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { Background, DiceMenu, MemoryMenu, TetrisMenu } from 'shared';

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
      <Card>
        <CardHeader fontSize="30px">Play some games !</CardHeader>
        <CardBody>
          <TetrisMenu />
          <MemoryMenu />
          <DiceMenu />
        </CardBody>
      </Card>
    </Box>
  );
};
