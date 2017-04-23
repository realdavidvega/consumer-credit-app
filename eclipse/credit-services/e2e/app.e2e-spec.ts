import { CreditServicesPage } from './app.po';

describe('credit-services App', () => {
  let page: CreditServicesPage;

  beforeEach(() => {
    page = new CreditServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
