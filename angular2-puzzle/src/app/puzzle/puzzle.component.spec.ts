/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PuzzleComponent } from './puzzle.component';
import { StorageService } from '../storage.service';
import { PuzzleState } from '../puzzle-state'

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;
  let storageServiceStub: StorageService;
  let puzzleState: PuzzleState;

  beforeEach(async(() => {
    storageServiceStub = {
      savePuzzleState: (puzzleState) => {},
      getSavedPuzzleState: () => { return new PuzzleState() },
    };

    TestBed.configureTestingModule({
      declarations: [ PuzzleComponent ],
      providers: [{provide: StorageService, useValue: storageServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    puzzleState = component.puzzleState;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be solved when it is first loaded', () => {
    expect(puzzleState.isSolved).toBeFalsy();
  });

});
