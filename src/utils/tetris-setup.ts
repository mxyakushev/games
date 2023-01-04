import { IPlayer, ITetromino, KeyChar } from 'types';

export const WIDTH = 10;
export const HEIGHT = 17;
export const ROWPOINTS = [40, 100, 300, 1200];
export const tetromino: ITetromino = {
  0: { shape: [[0]], color: 'black' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: 'red',
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: 'blue',
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: 'yellow',
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: 'purple',
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: 'green',
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
    color: 'orange',
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: 'lightgreen',
  },
};

export const randomTetrominoes = () => {
  const keys: KeyChar[] = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
  const indexKey = Math.floor(Math.random() * keys.length);
  const randKey: KeyChar = keys[indexKey];
  return tetromino[randKey];
};

export const buildBoard = () =>
  Array.from({ length: HEIGHT }, () =>
    Array.from({ length: WIDTH }, (): [KeyChar, string] => [0, 'clear'])
  );

export const isColliding = (
  player: IPlayer,
  board: [KeyChar, string][][],
  { moveX, moveY }: { moveX: number; moveY: number }
) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !board[y + player.pos.y + moveY] ||
          !board[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          board[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }

  return false;
};
