import { FC, memo } from 'react';
import { tetromino } from 'utils';
import { KeyChar } from 'types';
import { Box } from '@chakra-ui/react';

interface IProps {
  type: KeyChar;
}

const BoardCell: FC<IProps> = ({ type }) => {
  return <Box borderRadius="5px" backgroundColor={tetromino[type]?.color} />;
};

export const Cell = memo(BoardCell);
