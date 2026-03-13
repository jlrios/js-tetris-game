import { Grid } from "/scripts/grid.js";

export class BoardTetris extends Grid {
  constructor(canvas, rows, cols, cellSize, space) {
    super(canvas, rows, cols, cellSize, space);
  }

  isInside(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  isEmpty(row, col) {
    return this.matrix[row][col] === 0 && this.isInside(row, col);
  }

  isRowFull(row) {
    return this.matrix[row].every(element => element !== 0);
  }

  isRowEmpty(row) {
    return this.matrix[row].every(element => element === 0);
  }

  clearRow(row) {
    this.matrix[row].fill(0);
  }
}