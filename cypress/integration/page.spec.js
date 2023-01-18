const page = {
  message: () => cy.get('.App__message'),
  field: () => cy.get('input'),
};

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('Page', () => {
  beforeEach(() => {
    if (failed) Cypress.runner.stop();

    cy.visit('/');
  });

  it('should show the default message', () => {
    page.message().should('have.text', 'Nothing was pressed yet');
  });

  it('should print a correct message after pressing [Enter]', () => {
    page.field().type('{enter}');

    page.message()
      .should('have.text', 'The last pressed key is [Enter]');
  });

  it('should print a correct message after pressing [Esc]', () => {
    page.field().type('{esc}');

    page.message()
      .should('have.text', 'The last pressed key is [Escape]');
  });

  it('should print a correct message after pressing a digit', () => {
    page.field().type('1');

    page.message()
      .should('have.text', 'The last pressed key is [1]');
  });

  it('should print a correct message after pressing a letter', () => {
    page.field().type('a');

    page.message()
      .should('have.text', 'The last pressed key is [a]');
  });
});
