import { FC } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  isHeld: boolean;
  value: number;
  holdDice: () => object | void;
}

export const Die: FC<Props> = (props) => {
  // eslint-disable-next-line consistent-return
  function face() {
    switch (props.value) {
      case 1:
        return (
          <Box
            h="full"
            borderRadius={10}
            backgroundColor={props.isHeld ? 'rgba(247, 182, 41, 0.9)' : 'white'}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              borderRadius="200px"
              backgroundColor="black"
              w={window.innerWidth > 500 ? '20px' : '10px'}
              h={window.innerWidth > 500 ? '20px' : '10px'}
            />
          </Box>
        );
      case 2:
        return (
          <Box
            h="full"
            borderRadius={10}
            backgroundColor={props.isHeld ? 'rgba(247, 182, 41, 0.9)' : 'white'}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
          >
            <Box
              borderRadius="200px"
              backgroundColor="black"
              w={window.innerWidth > 500 ? '20px' : '10px'}
              h={window.innerWidth > 500 ? '20px' : '10px'}
            />
            <Box
              borderRadius="200px"
              backgroundColor="black"
              w={window.innerWidth > 500 ? '20px' : '10px'}
              h={window.innerWidth > 500 ? '20px' : '10px'}
              ml="auto"
            />
          </Box>
        );
      case 3:
        return (
          <Box
            h="full"
            borderRadius={10}
            backgroundColor={props.isHeld ? 'rgba(247, 182, 41, 0.9)' : 'white'}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
          >
            <Box
              borderRadius="200px"
              backgroundColor="black"
              w={window.innerWidth > 500 ? '20px' : '10px'}
              h={window.innerWidth > 500 ? '20px' : '10px'}
              ml="auto"
            />
            <Box
              borderRadius="200px"
              backgroundColor="black"
              w={window.innerWidth > 500 ? '20px' : '10px'}
              h={window.innerWidth > 500 ? '20px' : '10px'}
              alignSelf="center"
            />
            <Box
              borderRadius="200px"
              backgroundColor="black"
              w={window.innerWidth > 500 ? '20px' : '10px'}
              h={window.innerWidth > 500 ? '20px' : '10px'}
            />
          </Box>
        );
      case 4:
        return (
          <Box
            h="full"
            borderRadius={10}
            backgroundColor={props.isHeld ? 'rgba(247, 182, 41, 0.9)' : 'white'}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
          </Box>
        );
      case 5:
        return (
          <Box
            h="full"
            borderRadius={10}
            backgroundColor={props.isHeld ? 'rgba(247, 182, 41, 0.9)' : 'white'}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
          </Box>
        );
      case 6:
        return (
          <Box
            h="full"
            borderRadius={10}
            backgroundColor={props.isHeld ? 'rgba(247, 182, 41, 0.9)' : 'white'}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
              <Box
                borderRadius="200px"
                backgroundColor="black"
                w={window.innerWidth > 500 ? '20px' : '10px'}
                h={window.innerWidth > 500 ? '20px' : '10px'}
              />
            </Box>
          </Box>
        );
      default: {
        alert('error');
      }
    }
  }

  return (
    <button type="button" className="die-face" onClick={props.holdDice}>
      {face()}
    </button>
  );
};
