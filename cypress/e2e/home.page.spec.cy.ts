import { ANY_LOREM_RESPONSE } from '../../test/mocks/constants';

describe('Page: Home', () => {
  it('should visit the page', () => {
    cy.visit('/');
    cy.contains('Hello World!');
    cy.contains('Click me').click();
    cy.contains(ANY_LOREM_RESPONSE);
  });
});
