import Tile from './helpers/tile.js';

export default class Board {
  constructor() {
    this.tiles = [];
    this.nativeElement = document.querySelector('.board');
  }

  createBoard() {
    for (let x = 0; x < 10; x++) {
      this.tiles.push([]);
      for (let y = 0; y < 10; y++) {
        const tile = new Tile(x, y);
        this.tiles[x].push(tile);
        this.nativeElement.appendChild(tile.nativeElement);
      }
    }
  }
}
