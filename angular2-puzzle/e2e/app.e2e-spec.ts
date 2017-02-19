import { Angular2PuzzlePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular2-puzzle app', function() {
  let page: Angular2PuzzlePage;

  beforeEach(() => {
    page = new Angular2PuzzlePage();
  });

  it('should hide the success panel when the page is first loaded', () => {
    page.navigateTo();
    expect(page.getSuccessPanel().isDisplayed()).toBeFalsy();
  });

  it('should set total moves to 0 when the page is first loaded', () => {
    page.navigateTo();
    let target = element(by.id('totalMoves'));
    expect(target.getText()).toBe('TOTAL MOVES: 0');
  });

  it('should set total moves to 0 when starting a new game', () => {
    page.navigateTo();
    let target = element(by.id('totalMoves'));
    let startButton = element(by.id('startGame'));
    startButton.click();
    expect(target.getText()).toBe('TOTAL MOVES: 0');
  });
});
