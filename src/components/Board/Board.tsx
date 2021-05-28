import React, { useEffect, useState } from 'react';
import { deadBoard } from '../../life/game.js';
import { CellT } from '../../life/I.js';

import './Board.css';

export default () => {
  const [cells, setCells] = useState<CellT[]>([]);
  useEffect(() => {
    setCells(()=>deadBoard())
  }, []);

  return (
    <div>
      {cells.map((el) => (
        <div>aaaaaaaaaa</div>
      ))}
    </div>
  );
};
