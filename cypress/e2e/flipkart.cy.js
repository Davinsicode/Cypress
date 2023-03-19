import '@cypress/xpath'

describe('Add the Product to the Cart', ()=>{
    let mobileNameInSearchPage 
    let mobileNameInOrderPage
    it('Navigate to the Application', ()=>{
        cy.visit('https://www.flipkart.com/')
        cy.url().should('eq','https://www.flipkart.com/')

        cy.get(`[title="Search for products, brands and more"]`).type('Samsung Mobiles')
        cy.get(`button[type="submit"]`).click()
        cy.title().should('contain','Samsung Mobiles')

        cy.xpath(`//div[.='SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)']`).then((ref)=>{
            mobileNameInSearchPage=ref.text()
        })

        cy.xpath(`//div[.='SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)']/ancestor::a`).invoke('removeAttr','target').click()
        
        cy.xpath(`//*[name()='span' and @class="B_NuCI"]`).should('be.visible')
        cy.title().should('contain','SAMSUNG Galaxy F13')
        cy.xpath(`//*[name()='span' and @class="B_NuCI"]`).then((ref)=>{
            mobileNameInOrderPage=ref.text()
            //expect(mobileNameInSearchPage).to.contain(mobileNameInOrderPage)
        })
        

        let ele =cy.xpath(`//*[name()='span' and @class="_2P_LDn" ]`).should('be.visible')
        cy.scrollIntoView(ele)
        cy.get(`[placeholder="Enter Delivery Pincode"]`).type('560018')
        ele.click()

        //cy.get(`button[class="_2KpZ6l _2U9uOA _3v1-ww"]`).click()


        
    })
    
})