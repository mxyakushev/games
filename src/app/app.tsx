import { Route, Routes } from 'react-router-dom';
import { Tetris } from '../shared';

export const App = () => {
  return (
    <Routes>
      <Route path="/tetris" element={<Tetris />} />
    </Routes>
  );
};
