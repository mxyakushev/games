import { FC, useEffect, useState } from 'react';
import { Cell } from 'shared';
import { IBoard } from 'types';
import { Grid } from '@chakra-ui/react';
import { HEIGHT, WIDTH } from 'utils';

export const Board: FC<IBoard> = ({ board }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <Grid
      gap={1}
      templateRows={`repeat(${HEIGHT}, ${width > 460 ? 30 : 20}px)`}
      templateColumns={`repeat(${WIDTH}, ${width > 460 ? 30 : 20}px)`}
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
