const url = 'http://www.test.bbc.co.uk/sport/beta/live/football/23031537';

describe('Test empty selector', () => {
    it('passes should not test on an empty selector', () => {
       cy.visit(url);
       cy.get('.nothingOnAnyRealPageShouldMatchThisSelector')
           .should('not.be.disabled');
       cy.get('thisShouldAlsoReturnAnEmptySelector')
           .should('not.be.visible');
    });
});
