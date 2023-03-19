

describe('Orange HRM Application',()=>
{
    let userName
    let txt
    it('Login to the Application', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','opensource-demo')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
        
        // Get the UserName from the Page
        cy.get('[class="oxd-userdropdown-name"]').then((ref)=> 
        {
        
        // Verify the correct user logged in or Not
            userName=ref.text()
            expect(userName).to.contains('Paul')
        })

        // Admin Button Verification
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').then((ref)=> {
            txt = ref.text()
            expect(txt).to.contains("Admin")
            })
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        
        // Create Sysytem User
        cy.xpath(`//label[.='Username']/../following-sibling::div/input`).type('SureshKumar')
        cy.t
        cy.get(`:nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon`).enter
        
    })
            
    
   /*  // Type:2
    it.skip('Confirm the correct user logged In', ()=>
    {
        expect(userName).to.contains('PaulMrMrMr CollingsTestTestTest')
    }) */
    
})


