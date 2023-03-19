import 'cypress-iframe'
describe('Handling The iFrames',()=>
{
    it('Double Click',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        // Load the Frame
        cy.frameLoaded('#iframeResult')
        // Switch the Frame ---> Find the Element ---> Perform the Action
        cy.iframe(`#iframeResult`).find(`button[ondblclick='myFunction()']`).dblclick()
        
    })
})