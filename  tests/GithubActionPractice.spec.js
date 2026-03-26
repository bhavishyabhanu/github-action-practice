import { test, expect } from "@playwright/test";


// test("Practice Test 1 ", async({ page })=> {
//     console.log("starting practice test 1 ");
//     awaitpage.goto("https://www.saucedemo.com/")
//     expect(page).toHaveTitle("Swag Labs")
//     console.log("Ending Practice Test 1 ")
// })


// test("Practice Test 2 ", async({ page })=> {
//     console.log("starting practice test 2 ");
//     awaitpage.goto("https://www.saucedemo.com/")
//     expect(page).toHaveTitle("Swag Labs")
//     console.log("Ending Practice Test 2 ")
// })


// test("Practice Test 3 ", async({ page })=> {
//     console.log("starting practice test 3");
//     awaitpage.goto("https://www.saucedemo.com/")
//     expect(page).toHaveTitle("Swag Labs wrong   ")
//     console.log("Ending Practice Test 3 ")
// })

// import {test, expect } from '@playwright/test';

test("Practice Test 1", async ({ page }) => {
  console.log("starting practice test 1");

  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveTitle("Swag Labs");

  console.log("Ending Practice Test 1");
});

test("Practice Test 2", async ({ page }) => {
  console.log("starting practice test 2");

  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveTitle("Swag Labs");

  console.log("Ending Practice Test 2");
});

test("Practice Test 3", async ({ page }) => {
  console.log("starting practice test 3");

  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveTitle("Swag Labs");

  console.log("Ending Practice Test 3");
});

// test.describe("Practice of Describe", async () =>{

//     test("Practice Test 4", async ({page, browserName})=> {
//         console.log("Starting Practice Test 4 ");
//         await page.goto("https://www.saucedemo.com/");
//         console.log(await page.title());
//         expect(page).toHaveTitle("Swag Labs")
//         console.log("Ending Practice Test 4")
//     })

//     test("Practice Test 5", async ({page, browserName})=> {
//         console.log("Starting Practice Test 5 ");
//         await page.goto("https://www.saucedemo.com/");
//         console.log(await page.title());
//         expect(page).toHaveTitle("Swag Labs")
//         console.log("Ending Practice Test 5")
//     })

//     test("Practice Test 6", async ({page, browserName})=> {
//         console.log("Starting Practice Test 6 ");
//         await page.goto("https://www.saucedemo.com/");
//         console.log(await page.title());
//         expect(page).toHaveTitle("Swag Labs")
//         console.log("Ending Practice Test 6")
//     })
// })

test.describe("Practice of Describe", () => {

  test("Practice Test 4", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("Practice Test 5", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("Practice Test 6", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
  });

});