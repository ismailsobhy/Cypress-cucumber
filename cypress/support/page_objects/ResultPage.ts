class ResultPage {
  elements = {
    avgSalary: () => cy.get("div.graph-container"),
    stateSalaryTitle: () => cy.get("app-salary-difference-box p.title").eq(0),
    stateSalaryDifference: () => cy.get("p.difference").eq(0),
    yearOfExperienceTitle: () =>
      cy.get("app-salary-difference-box p.title").eq(1),
    yearOfExperienceValue: () => cy.get("p.difference").eq(1),
    travelTitle: () => cy.get("app-salary-difference-box p.title").eq(2),
    travelValue: () => cy.get("p.difference").eq(2),
    salaryDifferenceBox: () => cy.get("app-salary-difference-box"),
    tips: () => cy.get("app-results-tips"),
    resultTitle: () => cy.get("app-layout-section.title-section"),
  };

  verifyAvgSalary(value: string) {
    cy.compareText(this.elements.avgSalary(), value);
  }

  verifyStateSalaryTitle(value: string) {
    this.elements.stateSalaryTitle().should("contain", value);
  }

  verifyStateSalaryDifference(value: string) {
    cy.compareText(this.elements.stateSalaryDifference(), value);
  }

  verifyYearOfExperienceTitle(value: string) {
    this.elements.yearOfExperienceTitle().should("contain", value);
  }

  verifyYearOfExperienceValue(value: string) {
    cy.compareText(this.elements.yearOfExperienceValue(), value);
  }

  verifyTravelTitle(value: string) {
    this.elements.travelTitle().should("contain", value);
  }

  verifyTravelValue(value: string) {
    cy.compareText(this.elements.travelValue(), value);
  }

  verifyPayDifferenceBoxCount(count: number) {
    this.elements.salaryDifferenceBox().should("have.length", count);
  }

  // If on the result page, the url is ergebnis
  verifySuccessMessage() {
    cy.url().should("include", "/ergebnis");
    this.elements
      .resultTitle()
      .should("contain", "Dein mögliches Durchschnittgehalt");
  }

  verifyFailureMessage() {
    cy.url().should("include", "/ergebnis");
    this.elements
      .resultTitle()
      .should(
        "contain",
        "Es scheint, dass Du noch keine abgeschlossene oder in Deutschland anerkannte Ausbildung hast"
      );
  }

  verifyTipsVisible() {
    this.elements.tips().should("be.visible");
  }
}
export default ResultPage;
