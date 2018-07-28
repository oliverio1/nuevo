import { browser, by, element } from 'protractor';

export class GileadAPPPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
