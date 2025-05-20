import { Locator, Page } from "playwright/test";

export default class LoginPage{

    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    lockedOutText: Locator;

    constructor(page: Page){
        this.page = page;
        //Needs doing
        this.usernameField = this.page.getByRole('textbox', {name: 'Username'})// = locaotr
        this.passwordField = this.page.getByRole('textbox', {name: 'Password'})
        this.loginButton = this.page.getByRole('button', {name:'Login'})
        this.lockedOutText = this.page.getByText('Epic sadface: Sorry, this user has been locked out.');
    }

    async visit(){
        await this.page.goto('');
    }

    async login(username: string, password: string){
        //Make this 
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
        
    }

}