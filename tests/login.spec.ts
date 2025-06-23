import {test} from '../pages/fixtures/base'

test("login as first user 123", async ({loginPage}) => {
    await loginPage.visit();
})
    