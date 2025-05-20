import { Locator, Page } from "playwright/test";

export default class LoginPage{

    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        //Needs doing
        this.usernameField = this.page.getByRole('textbox', {name: 'Username'})// = locaotr
        this.passwordField// = locaotr
        this.loginButton// = locaotr
    }

    async visit(){
        await this.page.goto('');
    }

    async login(someString: string){
        //Make this 
        this.usernameField.fill(someString)
    }

}