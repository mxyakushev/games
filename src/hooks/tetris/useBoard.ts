import { useCallback, useEffect, useState } from 'react';
import { buildBoard } from 'utils';
import { IPlayer, KeyChar } from 'types';

export const useBoard = (player: IPlayer, resetPlayer: () => void) => {
  const [board, setBoard] = useState(buildBoard());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    if (!player.pos) return;

    setRowsCleared(0);

    const sweepRows = (newBoard: [KeyChar, string][][]): [KeyChar, string][][] => {
      return newBoard.reduce((ack, row) => {
        // If we don't find a 0 it means that the row is full and should be cleared
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          // Create an empty row at the beginning of the array to push the Tetrominos down
          // instead of returning the cleared row
          ack.unshift(new Array(newBoard[0].length).fill([0, 'clear']) as [KeyChar, string][]);
          return ack;
        }

        ack.push(row);
        return ack;
      }, [] as [KeyChar, string][][]);
    };
    const updateBoard = (prevState: [KeyChar, string][][]) => {
      const newStage: [KeyChar, string][][] = prevState.map((row: [KeyChar, string][]) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    setBoard((prevState) => updateBoard(prevState));
  }, [player, resetPlayer]);

  const resetBoard = useCallback(() => {
    setBoard(buildBoard);
  }, []);
  return [board, resetBoard, rowsCleared] as const;
};
