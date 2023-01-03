import { useCallback, useEffect, useState } from 'react';
import { Board } from 'shared';
import { useBoard, useInterval, usePlayer } from 'hooks';
import { isColliding } from 'utils';
import { Box, Button } from '@chakra-ui/react';

export const Tetris = () => {
  const [dropTime, setDropTime] = useState(500);
  const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer();
  const [gameOver, setGameOver] = useState(true);
  const [board, resetBoard] = useBoard(player, resetPlayer);

  const movePlayer = useCallback(
    (dir: number) => {
      if (!isColliding(player, board, { moveX: dir, moveY: 0 }))
        updatePlayerPos({ x: dir, y: 0, collided: false });
    },
    [board, player, updatePlayerPos]
  );

  const drop = useCallback(() => {
    if (!isColliding(player, board, { moveX: 0, moveY: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else if (player.pos.y === 0) {
      setGameOver(true);
    } else {
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }, [board, player, updatePlayerPos]);

  const dropPlayer = useCallback(() => {
    setDropTime(50);
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
    [dropPlayer, gameOver, movePlayer, rotatePlayer]
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
    >
      <Button
        mb={4}
        maxWidth="340px"
        w="100%"
        onClick={() => {
          if (gameOver) {
            resetBoard();
            resetPlayer();
          }
          setGameOver((prevState) => !prevState);
        }}
      >
        {gameOver ? 'Start' : 'End Game'}
      </Button>
      <Board board={board} />
    </Box>
  );
};
