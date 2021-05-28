"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// import _ from 'lodash'
var _ = require('lodash');
var WIDTH = 4;
var HEIGHT = 4;
var deadBoard = function () {
    var emptyArr = new Array(HEIGHT).fill(false).map(function (_) { return new Array(WIDTH).fill(false); });
    var s = [];
    emptyArr.forEach(function (row, yCoor) {
        row.forEach(function (cell, xCoor) {
            s.push({
                xCoor: xCoor,
                yCoor: yCoor,
                numOfNeighbors: 0,
                alive: false
            });
        });
    });
    return s;
};
var state = deadBoard();
var getNumberOfNeighbors = function (cell) {
    var count = state.filter(function (c) {
        if (c.alive && !_.isEqual(c, cell)) {
            // return (c.xCoor )
            return Math.abs(c.xCoor - cell.xCoor) <= 1 && Math.abs(c.yCoor - cell.yCoor) <= 1;
        }
        else {
            return false;
        }
    }).length;
    return count;
};
state[0] = __assign(__assign({}, state[0]), { alive: true });
var killCell = function (cell) {
    cell.alive = false;
};
var reviveCell = function (cell) {
    cell.alive = true;
};
var nextState = function () {
    var newState = [];
    state.forEach(function (c, i) {
        newState.push(__assign(__assign({}, state[i]), { numOfNeighbors: getNumberOfNeighbors(c) }));
    });
    newState.forEach(function (ee) {
        if (+ee.numOfNeighbors >= 1)
            reviveCell(ee);
    });
    state = newState;
};
nextState();
nextState();
console.log(state);
