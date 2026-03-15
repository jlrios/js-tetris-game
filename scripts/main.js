import { BoardTetris } from "/scripts/boardTetris.js";
import { Tetromino, TetrominoTypes } from "./tetromino.js";
import { Game } from "./game.js";

const canvasTetris = document.getElementById("canvas-tetris");
const canvasNext = document.getElementById("canvas-next");
const canvasHold = document.getElementById("canvas-hold");
const score = document.getElementById("canvas-hold");
const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btn-start");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const game = new Game(canvasTetris, rows, cols, cellSize, space, canvasNext, canvasHold);
// const boardTetris = new BoardTetris(canvasTetris, rows, cols, cellSize, space);
const tetrominoType = TetrominoTypes.O;
// const tetromino = new Tetromino(canvasTetris, cellSize, tetrominoType.shapes, tetrominoType.initPosition, tetrominoType.id);

function update() {
  // boardTetris.draw();
  // tetromino.draw(boardTetris);
  if (game.gameOver) {
    menu.style.display = "flex";
  } else {
    game.update();
    score.innerHTML = game.score;
  }
  requestAnimationFrame(update);
}

btnMenu.addEventListener("click", () => {
  setTimeout(() => {
    menu.style.display = "none";
    game.reset()
  }, 200);
});

update();