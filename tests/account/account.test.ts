// tests/account/account.spec.ts

import { test, expect } from "@playwright/test";

// test.describe("Customer 01 my account specs", () => {
//   test.use({ storageState: ".auth/customer01.json" });
  
//   test("validate customer 01 my account page", async ({ page }) => {
//     await page.goto("/#/account");

//     expect(await page.getByTestId("nav-menu").innerText()).toContain("abc ac");
//     await page.getByTestId("nav-menu").click();
//     expect(await page.getByTestId("nav-my-account").innerText()).toContain("My account");
//     expect(await page.getByTestId("nav-my-favorites").innerText()).toContain("My favorites");
//   });
// });

test.describe("Customer 02 my account specs", () => {
  test.use({ storageState: ".auth/customer02.json" });

  test("validate customer 02 my account page", async ({ page }) => {
    await page.goto("/#/account");

    expect(await page.getByTestId("nav-menu").innerText()).toContain("Jack Howe");
    await page.getByTestId("nav-menu").click();
    expect(await page.getByTestId("nav-my-account").innerText()).toContain("My account");
    expect(await page.getByTestId("nav-my-favorites").innerText()).toContain("My favorites");
  });
});

test.describe("Admin my account specs", () => {
  test.use({ storageState: ".auth/admin.json" });

  test("Validate admin my account page fails to load", async ({ page }) => {
    await page.goto("/#/account");

    expect(page.url()).toContain("/#/account");
    expect(await page.getByTestId("nav-menu").innerText()).toContain("John Doe");
  });
});