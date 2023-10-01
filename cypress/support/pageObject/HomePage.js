class HomePage {
    dashboardHeader() {
        return cy.xpath("//h1[text()='Dashboard']")
    }
}
export default HomePage;