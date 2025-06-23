import { Locator, Page } from "playwright/test";

export default class LoginPage{

    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async visit(){
        await this.page.goto('');
    }
}