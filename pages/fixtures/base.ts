import LoginPage from "../loginPage"
import {test as base} from 'playwright/test'
import ProductsPage from "../productsPage"

type commonFixtures = {
    loginPage: LoginPage
    productsPage: ProductsPage

}

export const test = base.extend<commonFixtures>({

    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    productsPage: async({page},use)=>{
        const productsPage = new ProductsPage(page)
        await use(productsPage)
    },











})