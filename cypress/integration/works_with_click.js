const footballPage = 'http://www.test.bbc.co.uk/sport/beta/live/football/23031537';

describe('Get Involved', () => {
  it('Does not do much!', () => {
    cy.visit(footballPage);

    cy
      .get('#post_58d3a03ee4b0e1456fe22080')
      .click()
      .should('be.visible');
  });
});
