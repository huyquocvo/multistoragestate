// lib/pages/loginPage.ts

import { Locator, Page,expect } from "@playwright/test";

export class LoginPage {
  readonly username:Locator;
  readonly password:Locator;
  readonly submit:Locator;
  readonly navUserMenu:Locator;
  readonly navAdminMenu:Locator;
  readonly navSignOut:Locator;
  readonly navSignIn:Locator;
constructor(private readonly page: Page) 

    {
    this.username = this.page.getByTestId("email");
    this.password = this.page.getByTestId("password");
    this.submit = this.page.getByTestId("login-submit");
    this.navUserMenu = this.page.getByTestId("nav-menu");
    this.navAdminMenu = this.page.getByTestId("nav-menu");
    this.navSignOut = this.page.getByTestId("nav-sign-out");
    this.navSignIn = this.page.getByTestId("nav-sign-in");
    }

  async goto() 
  {
  await this.page.goto("/auth/login/");
  
  // Expect a title "to contain" a substring.
  //await expect(this.page).toHaveTitle(/Practice Software Testing/);

  }

  async login(email: string, password: string) {
   // await this.goto();
    await this.username.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}