import { useCallback, useEffect, useState } from 'react';
import { Board } from 'components';
import { useBoard, useGameStats, useInterval, usePlayer } from 'hooks';
import { isColliding } from 'utils';
import { Badge, Box, Button, Heading } from '@chakra-ui/react';
import { FiRotateCw } from 'react-icons/fi';
import { HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

export const Tetris = () => {
  const [dropTime, setDropTime] = useState(500);
  const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer();
  const [gameOver, setGameOver] = useState(true);
  const [board, resetBoard, rowsCleared] = useBoard(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel } = useGameStats(rowsCleared);

  const movePlayer = useCallback(
    (dir: number) => {
      if (!isColliding(player, board, { moveX: dir, moveY: 0 }))
        updatePlayerPos({ x: dir, y: 0, collided: false });
    },
    [board, player, updatePlayerPos]
  );

  const drop = useCallback(() => {
    if (rows > level * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime((prevState) => prevState / 1.5);
    }

    if (!isColliding(player, board, { moveX: 0, moveY: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else if (player.pos.y === 0) {
      setGameOver(true);
    } else {
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }, [board, level, player, rows, setLevel, updatePlayerPos]);

  const dropPlayer = useCallback(() => {
    setDropTime(100);
    drop();
  }, [drop]);

  const move = useCallback(
    ({ keyCode, repeat }: { keyCode: number; repeat: boolean }): void => {
      if (keyCode === 37 && !repeat && !gameOver) {
        movePlayer(-1);
      } else if (keyCode === 39 && !repeat && !gameOver) {
        movePlayer(1);
      } else if (keyCode === 40 && !repeat && !gameOver) {
        dropPlayer();
      } else if (keyCode === 38 && !repeat && !gameOver) {
        rotatePlayer(board);
      }
    },
    [board, dropPlayer, gameOver, movePlayer, rotatePlayer]
  );

  useEffect(() => {
    window.addEventListener('keydown', move);
    window.addEventListener('keyup', () => {
      setDropTime(500);
    });

    return () => {
      window.removeEventListener('keydown', move);
      window.removeEventListener('keyup', () => {
        setDropTime(500);
      });
    };
  }, [move]);

  useInterval(
    () => {
      drop();
    },
    dropTime,
    gameOver
  );

  return (
    <Box pt={5} display="flex" flexDirection="column" alignItems="center">
      <Box maxWidth="500px" w="full" textAlign="center">
        <Badge colorScheme="green" fontSize={window.innerWidth < 500 ? 'sm' : 'lg'} mb={1} w="full">
          score: {score}
        </Badge>
        <Badge colorScheme="red" fontSize={window.innerWidth < 500 ? 'sm' : 'lg'} mb={1} w="full">
          rows: {rows}
        </Badge>
        <Badge
          colorScheme="purple"
          fontSize={window.innerWidth < 500 ? 'sm' : 'lg'}
          mb={1}
          w="full"
        >
          level: {level}
        </Badge>
      </Box>
      <Box
        mb={1}
        onClick={() => {
          if (gameOver) {
            setScore(0);
            setLevel(1);
            setRows(0);
            setDropTime(500);
            resetBoard();
            resetPlayer();
          }
          setGameOver(false);
        }}
      >
        <Board board={board} />
      </Box>
      {gameOver ? (
        <Heading size="lg">Click on the Board</Heading>
      ) : window.innerWidth < 1000 ? (
        <Box>
          <Box display="flex" justifyContent="center" mb={2}>
            <Button w="70px" onTouchStart={() => move({ keyCode: 38, repeat: false })}>
              <FiRotateCw size={24} />
            </Button>
          </Box>
          <Box>
            <Button w="70px" mr={1} onTouchStart={() => move({ keyCode: 37, repeat: false })}>
              <HiArrowNarrowLeft size={24} />
            </Button>
            <Button
              w="70px"
              mx={1}
              onTouchStart={() => move({ keyCode: 40, repeat: false })}
              onTouchEnd={() => setDropTime(500)}
            >
              <HiArrowNarrowDown size={24} />
            </Button>
            <Button w="70px" ml={1} onTouchStart={() => move({ keyCode: 39, repeat: false })}>
              <HiArrowNarrowRight size={24} />
            </Button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
