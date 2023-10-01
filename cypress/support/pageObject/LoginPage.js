class LoginPage {
    userTextFiled() {
        return cy.xpath("//input[@id='username']")
    }
    passwordTextFiled() {
        return cy.xpath("//input[@id='password']")
    }
    loginButton() {
        return cy.xpath("//button[@id='signin']")
    }
    loginPageElemente() {
        return cy.xpath("//h1[text()=' Sign In']")
            && cy.xpath("//img[@aria-label='logo']") && cy.xpath("//label[text()='Username']")
            && cy.xpath("//label[text()='Password']") && cy.xpath("//*[@data-icon='eye']")
    }
}
export default LoginPage;