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
  }

  restartMatrix() {
    for (let r = 0; r < this.rows; r++) {
      this.matrix[r] = [];
      for (let c = 0; c < this.cols; c++) {
        this.matrix[r][c] = 0;
      }
    }
  }

  drawSquareField(x, y, side, color, borderColor) {
    const borderSize = side / 10;
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
        this.drawSquareField(position.x, position.y, this.cellSize, "#000", "#303030")
      }
    }
    this.printMatrix();
  }

  printMatrix() {
    let text = "";
    this.matrix.forEach((row) => {
      text += row.join(" ") + "\n";
    });
    console.log(text)
  }
}