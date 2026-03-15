import { Tetromino } from "./tetromino.js";

export class Grid {
  constructor(canvas, rows, cols, cellSize, space) {
    this.canvas = canvas;
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.space = space;
    // Canvas context
    this.context = canvas.getContext("2d");
    this.matrix = [];
    this.restartMatrix();
    // Canvas size.
    this.canvas.width = this.cols * this.cellSize + (this.space * this.cols);
    this.canvas.height = this.rows * this.cellSize + (this.space * this.rows);
    this.block = new Tetromino(this.canvas, this.cellSize);
  }

  restartMatrix() {
    for (let r = 0; r < this.rows; r++) {
      this.matrix[r] = [];
      for (let c = 0; c < this.cols; c++) {
        this.matrix[r][c] = 0;
      }
    }
  }

  drawSquareField(x, y, side, color, borderColor, border) {
    const borderSize = side / border;
    this.context.fillStyle = color;
    this.context.fillRect(x, y, side, side);
    this.context.strokeStyle = borderColor;
    this.context.lineWidth = borderSize;
    this.context.strokeRect(x + borderSize / 2, y + borderSize / 2, side - borderSize, side - borderSize);
  }

  getCoordinates(col, row) {
    return { x: col * (this.cellSize + this.space), y: row * (this.cellSize + this.space) };
  }

  draw() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const position = this.getCoordinates(c, r);
        if (this.matrix[r][c] !== 0) {
          this.block.drawBlock(position.x, position.y, this.matrix[r][c]);
        } else {
          this.drawSquareField(position.x, position.y, this.cellSize, "#000", "#303030", 10);
        }
      }
    }
    this.printMatrix();
  }

  draw2() {
    this.drawBackground();
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const position = this.getCoordinates(c, r);
        if (this.matrix[r][c] !== 0) {
          if (this.matrix[r][c] === 2) {
            this.block.drawBlock(position.x + this.cellSize, position.y, this.matrix[r][c]);
          } else if (this.matrix[r][c] === 3) {
            this.block.drawBlock(position.x, position.y, this.matrix[r][c]);
          } else {
            this.block.drawBlock(position.x + this.cellSize / 2, position.y, this.matrix[r][c]);
          }
        } 
      }
    }
  }

  drawBackground() {
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  printMatrix() {
    let text = "";
    this.matrix.forEach((row) => {
      text += row.join(" ") + "\n";
    });
    // console.log(text)
  }
}