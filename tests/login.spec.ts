import { expect } from 'playwright/test';
import {test} from '../pages/fixtures/base'

test("login as first user 123", async ({loginPage, productsPage}) => {
    await loginPage.visit();
    await expect(productsPage.productsText).toBeVisible();
    await loginPage.login('standard_user', 'secret_sauce');
  //  await expect(productsPage.productsText).toBeVisible();

})
    
test("login as second user", async ({loginPage, productsPage}) => {
    await loginPage.visit();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.lockedOutText).toBeVisible();


})

test("login as third user", async ({loginPage, productsPage}) => {
    await loginPage.visit();
    await loginPage.login('problem_user', 'secret_sauce');
    await expect(productsPage.productsText).toBeVisible();

    
})

test.fixme("login as fourth user", async ({loginPage, productsPage}) => {
    await loginPage.visit();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await expect(productsPage.productsText).toBeVisible();

    
})

test("login as fifth user", async ({loginPage, productsPage}) => {
    await loginPage.visit();
    await loginPage.login('error_user', 'secret_sauce');
    await expect(productsPage.productsText).toBeVisible();

    
})

test("login as sixth user", async ({loginPage, productsPage}) => {
    await loginPage.visit();
    await loginPage.login('visual_user', 'secret_sauce');
    await expect(productsPage.productsText).toBeVisible();

    
})
//steps
//fill username
//fill password
//click button
//make assertion 


//Make tests to attempt to login as every user - only use one login method per test

/*
users
standard_user
locked_out_user
problem_user
performance_glitch_user
error_user
visual_user
*/


/*
pass: secret_sauce
*/

