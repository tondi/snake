import Board from './board.js';
import Snake from './snake.js';

class Game {
  constructor(board, snake) {
    this.board = board;
    this.snake = snake;


    // this.board.tiles = [];
    // console.log(this.board.tiles);

    // this.board.tiles[0] = 'test';
    // console.log(tiles);
  }

  start() {
    this.board.createBoard();

    setInterval(() => {
      console.log(this.snake.currentDirection);
    }, 200);
  }

  addListeners() {
    document.addEventListener('keydown', event => {
      if (event.key.includes('Arrow')) {
        this.snake.currentDirection = event.key;
        this.board.tiles = [0,0,1];
      }
    })
  }
}

const board = new Board();
const snake = new Snake();
const game = new Game(board, snake);
game.start();
game.addListeners();


