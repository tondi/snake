class Board {
  constructor() {
    
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
    
    const boardElement = document.querySelector('.board');
    board.reduce((previousValue, currentValue, index, array) => {
      return previousValue.concat(currentValue);
    }).map(el => {
      boardElement.appendChild(el);
    })
  }  
}