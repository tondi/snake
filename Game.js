class Game {
  constructor() {
    this.board = new Board();
    this.snake = new Snake();
  }
  start() {
    this.board.createBoard();

    setInterval(() => {
      console.log(this.snake.currentDirection);
    }, 200);
  }
  addListenters() {
    document.addEventListener('keydown', event => {
      if(event.key.includes('Arrow')) {
        this.snake.currentDirection = event.key;
      }
    })
  }
}

const game = new Game();
game.start();
game.addListenters();