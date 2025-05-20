import LoginPage from "../loginPage"
import {test as base} from 'playwright/test'

type commonFixtures = {
    loginPage: LoginPage

}

export const test = base.extend<commonFixtures>({

    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

})
