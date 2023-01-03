import { useCallback, useState } from 'react';
import { IPlayer, KeyChar } from 'types';
import { isColliding, randomTetrominoes, WIDTH } from 'utils';

export const usePlayer = () => {
  const [player, setPlayer] = useState<IPlayer>({
    collided: false,
    pos: { x: WIDTH / 2 - 2, y: 0 },
    tetromino: randomTetrominoes().shape,
  });

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    // eslint-disable-next-line no-return-assign
    setPlayer((prevState) => ({
      ...prevState,
      pos: { x: (prevState.pos.x += x), y: (prevState.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      collided: false,
      pos: { x: WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetrominoes().shape,
    });
  }, []);
  const rotate = (matrix: KeyChar[][]) => {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, i) => matrix.map((column) => column[i]));
    // Reverse each row to get a rotated matrix
    return mtrx.map((row) => row.reverse());
  };

  const rotatePlayer = (stage: [KeyChar, string][][]): void => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);

    // This one is so the player can't rotate into the walls or other tetrominos that's merged
    const posX = clonedPlayer.pos.x;
    let offset = 1;
    while (isColliding(clonedPlayer, stage, { moveX: 0, moveY: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.tetromino[0].length) {
        clonedPlayer.pos.x = posX;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };
  return [player, updatePlayerPos, resetPlayer, rotatePlayer] as const;
};
