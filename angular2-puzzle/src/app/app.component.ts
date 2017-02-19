import { Component, ViewChild, } from '@angular/core';
import { PuzzleComponent } from './puzzle/puzzle.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PuzzleComponent) puzzleComponent:PuzzleComponent;

  startGame(){
    this.puzzleComponent.startNewGame();
  }
}