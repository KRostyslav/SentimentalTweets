import { AnalysisTweetsPage } from './app.po';

describe('analysis-tweets App', () => {
  let page: AnalysisTweetsPage;

  beforeEach(() => {
    page = new AnalysisTweetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
