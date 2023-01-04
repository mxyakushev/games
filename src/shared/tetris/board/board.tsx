import { FC } from 'react';
import { Cell } from 'shared';
import { IBoard } from 'types';
import { Grid } from '@chakra-ui/react';
import { HEIGHT, WIDTH } from 'utils';

export const Board: FC<IBoard> = ({ board }) => {
  return (
    <Grid
      gap={window.innerWidth < 500 ? 0.5 : 1}
      templateRows={`repeat(${HEIGHT}, ${window.innerWidth > 460 ? 30 : 18}px)`}
      templateColumns={`repeat(${WIDTH}, ${window.innerWidth > 460 ? 30 : 18}px)`}
      p={2}
    >
      {board.map((row) => {
        return row.map((cell) => {
          return <Cell key={Math.random()} type={cell[0]} />;
        });
      })}
    </Grid>
  );
};
