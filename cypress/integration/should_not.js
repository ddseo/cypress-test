// Page doesn't matter as long as it doesn't make Cypress complain about cross-reference
const url = 'http://www.test.bbc.co.uk/sport/beta/live/football/23031537';

describe('Test empty selector', () => {
    it('passes should not test on an empty selector', () => {
       cy.visit(url);
       cy.log(`Cypress Version: ${Cypress.version}`);
       cy.get('.nothingOnAnyRealPageShouldMatchThisSelector')
           .should('not.be.disabled');
       cy.get('thisShouldAlsoReturnAnEmptySelector')
           .should('not.be.visible');
    });
});
