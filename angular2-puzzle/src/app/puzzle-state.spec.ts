/* tslint:disable:no-unused-variable */

import { PuzzleState } from './puzzle-state';

describe('PuzzleState', () => {

  describe('constructor', () => {
    it('should assign the tileLocations if its passed in', () => {
      let tileLocations = [9,8,7,6,5,4,3,2,1];
      const fixture = new PuzzleState(tileLocations, 0, false, 0);
      let tileLocationsMatch = fixture.tileLocations.every((element, index) => {
        return element === tileLocations[index];
      });
      expect(tileLocationsMatch).toBeTruthy();
    });

    it('should assign the totalMovesCount if its passed in', () => {
      const fixture = new PuzzleState([], 55, false, 0);
      expect(fixture.totalMoveCount).toBe(55);
    });

    it('should assign the isSolved if its passed in', () => {
      const fixture = new PuzzleState([], 0, true, 0);
      expect(fixture.isSolved).toBeTruthy();
    });

    it('should assign the elapsedSeconds if its passed in', () => {
      const fixture = new PuzzleState([], 0, false, 44);
      expect(fixture.elapsedSeconds).toBe(44);
    });
  });

  describe('incrementElapsedSeconds', () => {
    it('should increment elapsedSeconds when called', () => {
      const fixture = new PuzzleState();
      expect(fixture.elapsedSeconds).toBe(0);
      fixture.incrementElapsedSeconds();
      fixture.incrementElapsedSeconds();
      fixture.incrementElapsedSeconds();
      expect(fixture.elapsedSeconds).toBe(3);
    });
  });

  describe('checkIfIsSolved', () => {
    it('should return true if all tiles are in position', () => {
      const fixture = new PuzzleState([1,2,3,4,5,6,7,8,9], 0, false, 0);
      expect(fixture.checkIfIsSolved()).toBeTruthy();
    });

    it('should return false if some tiles are not in position', () => {
      const fixture = new PuzzleState([2,1,3,4,5,6,7,8,9], 0, false, 0);
      expect(fixture.checkIfIsSolved()).toBeFalsy();
    });
  });

  describe('isMoveAllowed', () => {
    it('should return true if the move is allowed', () => {
      const fixture = new PuzzleState([1,2,3,4,5,6,7,8,9], 0, false, 0);

      fixture.numberOfTheTileBeingMoved = 1;
      expect(fixture.isMoveAllowed(1)).toBeTruthy();
      expect(fixture.isMoveAllowed(3)).toBeTruthy();

      fixture.numberOfTheTileBeingMoved = 5;
      expect(fixture.isMoveAllowed(1)).toBeTruthy();
      expect(fixture.isMoveAllowed(3)).toBeTruthy();
      expect(fixture.isMoveAllowed(5)).toBeTruthy();
      expect(fixture.isMoveAllowed(7)).toBeTruthy();
    });

    it('should return false if the move is not allowed', () => {
      const fixture = new PuzzleState([1,2,3,4,5,6,7,8,9], 0, false, 0);
      fixture.numberOfTheTileBeingMoved = 1;
      expect(fixture.isMoveAllowed(2)).toBeFalsy();
      expect(fixture.isMoveAllowed(4)).toBeFalsy();
    });
  });

  describe('generateRandomTileLocations', () => {
    it('should return different tile locations every time', () => {
      const fixture = new PuzzleState();
      let tileLocations1 = fixture.generateRandomTileLocations();
      let tileLocations2= fixture.generateRandomTileLocations();
      let tilesMatch = tileLocations1.every((element, index) => {
        return element === tileLocations2[index];
      });
      expect(tilesMatch).toBeFalsy();
    });
  });

});