export class PuzzleState {
  tileLocations: number[]; // stores the position of the tile, the array index is the location, the value is the number of the image stored there
  totalMoveCount: number = 0;
  isSolved: boolean = false;
  elapsedSeconds: number = 0;
	numberOfTheTileBeingMoved: number;
	private static readonly movesAllowed: number[][] = [[1,3], [0,2,4], [1,5], [0,4,6], [1,3,5,7], [2,4,8], [3,7], [4,6,8], [5,7]];

  constructor();
	constructor(tileLocations: number[], totalMoveCount: number, isSolved: boolean, elapsedSeconds: number);
  constructor(tileLocations?: number[], totalMoveCount?: number, isSolved?: boolean, elapsedSeconds?: number){
    this.tileLocations = tileLocations || this.generateRandomTileLocations();
    this.totalMoveCount = totalMoveCount || 0;
    this.isSolved = isSolved || false;
    this.elapsedSeconds = elapsedSeconds || 0;
  }

  moveTile(targetTileHolderIndex: number){
    let sourceTileHolderIndex = this.tileLocations.indexOf(this.numberOfTheTileBeingMoved);
    let numberOfTileToSwapWith = this.tileLocations[targetTileHolderIndex];
    // swap the image numbers in the tileLocations array
    this.tileLocations[targetTileHolderIndex] = this.numberOfTheTileBeingMoved;
    this.tileLocations[sourceTileHolderIndex] = numberOfTileToSwapWith;
    this.totalMoveCount++;
    this.isSolved = this.checkIfIsSolved();
  }

  // movesAllowed stores (zero-based numbering) where tiles are allowed to be moved, i.e. tile0 can move to position 1 and 3, tile1 can move to 0,2 or 4
	isMoveAllowed(targetTileHolderIndex: number): boolean{
		let sourceTileHolderIndex = this.tileLocations.indexOf(this.numberOfTheTileBeingMoved);
    return PuzzleState.movesAllowed[sourceTileHolderIndex].indexOf(targetTileHolderIndex) > -1;
	}

  incrementElapsedSeconds(){
    this.elapsedSeconds++;
  }

  checkIfIsSolved(): boolean{
    // check if the tile numbers are all in order in the tileLocations array
    for (let index = 0; index < this.tileLocations.length; index++) {
      if(this.tileLocations[index] != index + 1){
        return false;
      }
    }
    return true;
  }

	generateRandomTileLocations() {
		let tileLocations = [1,2,3,4,5,6,7,8,9];
		for (let i = tileLocations.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[tileLocations[i - 1], tileLocations[j]] = [tileLocations[j], tileLocations[i - 1]];
		}
		return tileLocations;
	}
}
