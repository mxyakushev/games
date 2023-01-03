import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number, gameOver: boolean) {
  const savedCallback = useRef<null | (() => void)>(null);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = () => {
    if (savedCallback.current) savedCallback.current();
  };
  useEffect(() => {
    const id = setInterval(tick, delay);
    if (gameOver) {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [delay, gameOver]);
}
