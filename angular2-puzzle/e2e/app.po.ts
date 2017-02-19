import { browser, element, by } from 'protractor';

export class Angular2PuzzlePage {
  navigateTo() {
    return browser.get('/');
  }

  getSuccessPanel() {
    return element(by.className('success-panel'));
  }
}
