import { expect } from 'playwright/test';
import {test} from '../pages/fixtures/base'


test("login as first user 123", async ({loginPage, productsPage, page}) => {
    await loginPage.visit();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(productsPage.productsText).toBeVisible();
    await productsPage.clickAddToCart('Sauce Labs Backpack');
    await expect(page.getByRole('button', {name: 'remove'})).toBeVisible()
})
    