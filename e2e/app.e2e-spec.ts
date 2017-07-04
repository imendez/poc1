import { Poc1Page } from './app.po';

describe('poc1 App', () => {
  let page: Poc1Page;

  beforeEach(() => {
    page = new Poc1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
