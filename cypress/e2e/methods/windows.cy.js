describe('Handling the Child Window', ()=>{
    let Value
    it('Switching to child window',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
      
      // Switching the Window
        cy.get('.example>a').invoke('removeAttr','target').click()
        cy.get('.example>h3').then((ref)=>
        {
            Value = ref.text()
            cy.log("New Window Text: "+ Value)
            
        // Get ack to the Previous window
            cy.go('back')
        })
    })
}) 