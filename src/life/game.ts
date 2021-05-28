import _ from 'lodash'
import { CellT } from './I';
// const _ = require('lodash');
const WIDTH = 4;
const HEIGHT = 4;



export const deadBoard = () => {
  const emptyArr = new Array(HEIGHT).fill(false).map((_) => new Array(WIDTH).fill(false));
  let s: CellT[] = [];
  emptyArr.forEach((row, yCoor) => {
    row.forEach((cell, xCoor) => {
      s.push({
        xCoor,
        yCoor,
        numOfNeighbors: 0,
        alive: false,
      });
    });
  });
  return s;
};
// export let state = deadBoard();

const getNumberOfNeighbors = (cell: CellT, state: CellT[]) => {
  let count = state.filter((c) => {
    if (c.alive && !_.isEqual(c, cell)) {
      // return (c.xCoor )
      return Math.abs(c.xCoor - cell.xCoor) <= 1 && Math.abs(c.yCoor - cell.yCoor) <= 1;
    } else {
      return false;
    }
  }).length;
  return count;
};


const killCell = (cell: CellT) => {
  cell.alive = false;
};
const reviveCell = (cell: CellT) => {
  cell.alive = true;
};
const nextState = ( state: CellT[]) => {
  let newState: CellT[] = [];
  state.forEach((c, i) => {
    newState.push({ ...state[i], numOfNeighbors: getNumberOfNeighbors(c, state) });
  });

  newState.forEach((ee) => {
    if (+ee.numOfNeighbors >= 1) reviveCell(ee);
  });
  state = newState;
};


