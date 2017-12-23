export default class Board {
  constructor() {
    // this.tiles = new Proxy([], {
    //   set([x, y, newValue]) {
    //     this.tiles = newValue;
    //     console.log('new tiles:', this.tiles);
    //     return true;
    //   },
    //   get() {
    //     return this.tiles;
    //   }
    // });

    // this.tiles = 1;

    // Object.defineProperty(this, 'tiles', {
    // });


  }

  createBoard() {
    const board = [];
    for (let x = 0; x < 10; x++) {
      board.push([]);
      for (let y = 0; y < 10; y++) {
        const html = `<div data-position-x="${x}" data-position-y="${y}" class="board__tile"></div>`;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const tile = wrapper.firstElementChild;
        board[x].push(tile);
      }
    }

    // this.board = board;
    
    const boardElement = document.querySelector('.board');
    board.reduce((previousValue,   currentValue, index, array) => {
      return previousValue.concat(currentValue);
    }).map(el => {
      boardElement.appendChild(el);
    })
  }  
}
