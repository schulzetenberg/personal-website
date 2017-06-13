import { MeanWebsite2Page } from './app.po';

describe('mean-website2 App', () => {
  let page: MeanWebsite2Page;

  beforeEach(() => {
    page = new MeanWebsite2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
