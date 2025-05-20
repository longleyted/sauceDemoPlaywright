import { Locator, Page } from "playwright/test";

export default class ProductsPage{

    page: Page;
    productsText: Locator;

    constructor(page: Page){
        this.page = page;
        //Needs doing
        this.productsText = this.page.getByText('Products');// = locaotr

    }

    async visit(){
        await this.page.goto('');
    }

    async login(username: string, password: string){

        
    }

}