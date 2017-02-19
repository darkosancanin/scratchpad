import { Component, OnInit, Output, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { PuzzleState } from '../puzzle-state'
import { StorageService } from '../storage.service'

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  public puzzleState: PuzzleState;

  constructor(private storageService: StorageService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.puzzleState = this.storageService.getSavedPuzzleState();
    // see here for why we are running outside of angular: https://christianliebel.com/2016/11/angular-2-protractor-timeout-heres-fix/
    this.ngZone.runOutsideAngular(() => {
      Observable.interval(1000).subscribe(x => this.onEverySecondPassed(x));
    });
  }

  // increment the elapsed seconds, we could do date comparisons for more accurate timings but this should suffice for our purposes
  onEverySecondPassed(secondTicks: number){
    if(!this.puzzleState.isSolved) {
      this.ngZone.run(() => {
        this.puzzleState.incrementElapsedSeconds();
      });
      if(secondTicks % 5 == 0){ // save the state every 5 seconds
        this.storageService.savePuzzleState(this.puzzleState);
      }
    }  
  }

  startNewGame(){
    this.puzzleState = new PuzzleState();
    this.storageService.savePuzzleState(this.puzzleState);
  }

  onDragStart(event: any, numberOfTheTileBeingMoved: number){
    if(this.puzzleState.isSolved){
      event.preventDefault();
    }
    this.puzzleState.numberOfTheTileBeingMoved = numberOfTheTileBeingMoved;
  }

  onDragOver(event: any, targetTileHolderIndex: number){
    if(this.puzzleState.isMoveAllowed(targetTileHolderIndex)){
      event.preventDefault();
    }
  }

  onDrop(event: any, targetTileDiv: any, targetTileHolderIndex: number){
    event.preventDefault();
    this.puzzleState.moveTile(targetTileHolderIndex);
    this.storageService.savePuzzleState(this.puzzleState);
  }
}
