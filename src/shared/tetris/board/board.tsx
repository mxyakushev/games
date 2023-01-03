import { FC } from 'react';
import { Cell } from 'shared';
import { IBoard } from 'types';
import { Grid } from '@chakra-ui/react';
import { HEIGHT, WIDTH } from 'utils';

export const Board: FC<IBoard> = ({ board }) => {
  return (
    <Grid
      gap={1}
      templateRows={`repeat(${HEIGHT}, 30px)`}
      templateColumns={`repeat(${WIDTH}, 30px)`}
    >
      {board.map((row) => {
        return row.map((cell) => {
          return <Cell key={Math.random()} type={cell[0]} />;
        });
      })}
    </Grid>
  );
};
