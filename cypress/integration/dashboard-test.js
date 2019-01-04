describe('Match Dashboard Test', function() {
  it('visits the match dashboard', function() {
    cy.visit('http://wr-lb-match-dash-int-394575891.eu-central-1.elb.amazonaws.com/')
  	cy.contains("jungle")
  })
})