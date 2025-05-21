import { Locator, Page } from "playwright/test";

export default class ProductsPage{

    page: Page;
    productsText: Locator;
    addToCartButton: Locator;

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

    async clickAddToCart(title: string){
        await this.page.locator('.inventory_item_description').filter({hasText: title}).getByRole('button', {name: "Add to cart"}).click() // card(text) > button
        // looks at class inventory_item_description (returns 6) then filters title text (argument) which returns one card with the text then clicks the button
    }

}