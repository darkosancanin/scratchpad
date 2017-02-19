import { Injectable } from '@angular/core';
import { PuzzleState } from './puzzle-state'

@Injectable()
export class StorageService {

  savePuzzleState(puzzleState: PuzzleState){
    localStorage.setItem("tileLocations", JSON.stringify(puzzleState.tileLocations));
    localStorage.setItem("totalMoveCount", puzzleState.totalMoveCount.toString());
    localStorage.setItem("isSolved", puzzleState.isSolved.toString());
    localStorage.setItem("elapsedSeconds", puzzleState.elapsedSeconds.toString());
  }

  getSavedPuzzleState() : PuzzleState{
    if(localStorage.getItem("tileLocations") == null){
      return new PuzzleState();
    }
    let tileLocations = JSON.parse(localStorage.getItem("tileLocations"));
    let totalMoveCount = +localStorage.getItem("totalMoveCount");
    let isSolved = localStorage.getItem("isSolved") == 'true' ? true : false;
    let elapsedSeconds = +localStorage.getItem("elapsedSeconds");
    return new PuzzleState(tileLocations, totalMoveCount, isSolved, elapsedSeconds);
  }

}
