class HomePage {
  elements = {
    cookiesAcceptButton: () => cy.get("button#onetrust-accept-btn-handler"),
    burgerButton: () => cy.get("button[aria-label='Menü öffnen']"),
    blogButton: () =>
      cy.get("app-header-dropdown.dropdown-button").contains("expand_more"),
    blogSelection: (optionText: string) =>
      cy.get("span.mat-button-wrapper").contains(optionText),
  };

  clickOnCookiesAcceptButton() {
    this.elements.cookiesAcceptButton().click();
  }

  clickOnBurgerButton() {
    this.elements.burgerButton().click();
  }

  selectBlogOption(optionText: string) {
    this.elements.blogButton().click();
    this.elements.blogSelection(optionText).click();
  }
}

export default HomePage;
