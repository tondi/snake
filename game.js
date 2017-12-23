import Board from './board.js';
import Snake from './snake.js';

class Game {
  constructor(board, snake) {
    this.board = board;
    this.snake = snake;

    this.gameLoop;
    // this.board.tiles = [];
    // console.log(this.board.tiles);

    // this.board.tiles[0] = 'test';
    // console.log(tiles);
  }

  start() {
    this.addListeners();

    this.gameLoop = setInterval(() => {
      this.snake.move((result) => {
        if(result.turnPossible)
          this.board.tiles[result.position.y][result.position.x].placeSnake();
        else {
          clearInterval(this.gameLoop);
          alert('game over');
          window.location.reload();
        }
      });
    }, 200);
  }

  addListeners() {
    document.addEventListener('keydown', event => {
      if (event.key.includes('Arrow')) {
        this.snake.currentDirection = event.key;
      }
    })
  }
}

const board = new Board({tilesInDimension: 10, boardSizeInPx: 500}); // boardSize mocked
const snake = new Snake({x: 0, y: 0}, board);
const game = new Game(board, snake);
game.start();
