// tests/auth.setup.ts

// Save your storage state to a file in the .auth directory via setup test
import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let adminEmail = process.env.ADMIN_USERNAME as string;
let adminPassword = process.env.ADMIN_PASSWORD as string;
const adminAuthFile = ".auth/admin.json";

let customer01Email = process.env.CUSTOMER_01_USERNAME as string;
let customer01Password = process.env.CUSTOMER_01_PASSWORD as string;
const customer01AuthFile = ".auth/customer01.json";

let customer02Email = process.env.CUSTOMER_02_USERNAME as string;
let customer02Password = process.env.CUSTOMER_02_PASSWORD as string;
const customer02AuthFile = ".auth/customer02.json";

let customer03Email = process.env.CUSTOMER_03_USERNAME as string;
let customer03Password = process.env.CUSTOMER_03_PASSWORD as string;
const customer03AuthFile = ".auth/customer03.json";

setup("Create Admin Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(adminEmail, adminPassword);
  expect(await loginPage.navAdminMenu.innerText()).toContain("John Doe");

  await context.storageState({ path: adminAuthFile });
});

setup("Create Customer 01 Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(customer01Email, customer01Password);
  expect(await loginPage.navUserMenu.innerText()).toContain("Jane Doe");

  await context.storageState({ path: customer01AuthFile });
});
setup("Create Customer 02 Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(customer02Email, customer02Password);
  expect(await loginPage.navUserMenu.innerText()).toContain("Jack Howe");

  await context.storageState({ path: customer02AuthFile });
});

setup("Create Customer 03 Auth", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(customer03Email, customer03Password);
  expect(await loginPage.navUserMenu.innerText()).toContain("Bob Smith");
  await context.storageState({ path: customer03AuthFile });
});