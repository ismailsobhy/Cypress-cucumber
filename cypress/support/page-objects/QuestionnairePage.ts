class QuestionnairePage {
  elements = {
    checkSalary: () =>
      cy.get("app-salary-checker-cta").contains("Kostenlos Gehalt checken"),
    educationType: (titleText: string) =>
      cy.get(`app-hoverable-card[title='${titleText}']`),
    yearsOfExperience: (experience: string) =>
      cy.get("div.chip-text").contains(experience),
    travelType: (titleText: string) =>
      cy.get(`app-hoverable-card[title='${titleText}']`),
    StateDropdown: () => cy.get("mat-select#mat-select-0"),
    StateSelection: (optionText: string) =>
      cy.get("span.mat-option-text").contains(optionText),
    seeSalaryButton: () =>
      cy.get("button.cta").contains("Kostenlos Dein Gehalt sehen"),
  };

  clickOnCheckSalary() {
    this.elements.checkSalary().click();
  }

  clickOnEducationType(titleText: string) {
    cy.url().should("include", "/gehaltscheck");
    this.elements.educationType(titleText).click();
  }

  clickOnYearsOfExperience(experience: string) {
    cy.url().should("include", "/gehaltscheck?step=experience");
    this.elements.yearsOfExperience(experience).click();
  }

  clickOnTravelType(titleText: string) {
    cy.url().should("include", "/gehaltscheck?step=willingness-to-travel");
    this.elements.travelType(titleText).click();
  }

  selectState(optionText: string) {
    cy.url().should("include", "/gehaltscheck?step=state");
    this.elements.StateDropdown().click();
    this.elements.StateSelection(optionText).click();
  }

  clickOnSeeSalaryButton() {
    this.elements.seeSalaryButton().click();
  }
}
export default QuestionnairePage;
