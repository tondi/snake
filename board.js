import Tile from './helpers/tile.js';

export default class Board {
  constructor({tilesInDimension, boardSizeInPx}) {
    this.tilesInDimension = tilesInDimension;
    this.tiles = [];

    this.boardSizeInPx = boardSizeInPx;
    this.nativeElement = document.querySelector('.board');
    this.nativeElement.style.width = boardSizeInPx;
    this.nativeElement.style.height = boardSizeInPx;
    console.log(this.nativeElement);
    this.createBoard();
  }
  createBoard() {
    for (let x = 0; x < this.tilesInDimension; x++) {
      this.tiles.push([]);
      for (let y = 0; y < this.tilesInDimension; y++) {
        const tile = new Tile(x, y);
        tile.nativeElement.style.width = `${this.boardSizeInPx / this.tilesInDimension}px`;
        tile.nativeElement.style.height = `${this.boardSizeInPx / this.tilesInDimension}px`;
        this.tiles[x].push(tile);
        this.nativeElement.appendChild(tile.nativeElement);
      }
    }
  }
}
