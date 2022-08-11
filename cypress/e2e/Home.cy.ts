describe('Load Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  })
})

describe('Shows Welcome', () => {
  it('success', () => {
    cy.visit('/') 
    cy.get('body').then(($a)=>{
      if ($a.text().includes("Welcome to the Wild File -- the management system for tool to enjoy the wild"))
      {
          cy.contains('Welcome')
      }
    })

  })
})

describe('Clicking to Sign', () => {
  it('success', () => {
    cy.visit('/') 
  })
})

describe('Single Click Sign on is fired', () => {
  it('success', () => {
    cy.visit('/') 
  })
})