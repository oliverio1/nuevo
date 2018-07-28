import { GileadAPPPage } from './app.po';

describe('gilead-app App', () => {
  let page: GileadAPPPage;

  beforeEach(() => {
    page = new GileadAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
