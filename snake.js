export default class Snake {
  constructor(initialPosition = {x: 0, y: 0}, board) {
    this.currentDirection = 'ArrowDown';
    this.length = 2;
    this.currentPosition = {};
    let _currentPosition = {x: initialPosition.x, y: initialPosition.y};
    this.board = board;
    this.canMove = true;

    const self = this;

    Object.defineProperties(this.currentPosition, {
      'x': {
        set(newValue) {
          if(newValue < board.tilesInDimension && newValue >= 0)
            _currentPosition.x = newValue;
          else
            self.canMove = false;
        },
        get() {
          return _currentPosition.x;
        }
      },
      'y': {
        set(newValue) {
          if(newValue < board.tilesInDimension && newValue >= 0)
            _currentPosition.y = newValue;
          else
            self.canMove = false;
        },
        get() {
          return _currentPosition.y;
        }
      }
    })
  }

  move(cb) {
    switch (this.currentDirection) {
      case 'ArrowUp': {
        this.currentPosition.y -= 1;
        break;
      }
      case 'ArrowDown': {
        this.currentPosition.y += 1;
        break;
      }
      case 'ArrowLeft': {
        this.currentPosition.x -= 1;
        break;
      }
      case 'ArrowRight': {
        this.currentPosition.x += 1;
        break;
      }
    }
    cb({position: this.currentPosition, turnPossible: this.canMove});
  }

  eat() {
  }
}
