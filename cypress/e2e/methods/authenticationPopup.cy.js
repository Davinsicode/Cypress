describe('Handling the Authentication Popup',()=>{
    it('Entering the Username and Password',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:'admin', password:'admin'}})
    })
})