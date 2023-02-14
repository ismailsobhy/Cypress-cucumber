// The step definitions will use the page objects
import HomePage from "../page_objects/HomePage";
import QuestionnairePage from "../page_objects/QuestionnairePage";
import ResultPage from "../page_objects/ResultPage";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage();
const questionnairePage = new QuestionnairePage();
const resultPage = new ResultPage();

Given("User opens Powerus", () => {
  cy.visit("/"); // Visits the baseUrl
  homePage.clickOnCookiesAcceptButton();
});

When("User selects Elektriker Gehalt Übersicht", () => {
  homePage.clickOnBurgerButton();
  homePage.selectBlogOption("Elektriker Gehalt Übersicht");
});

And("User clicks on Kostenlos Gehalt checken", () => {
  questionnairePage.clickOnCheckSalary();
});

And("User clicks on Kostenlos Gehalt checken", () => {
  questionnairePage.clickOnCheckSalary();
});

And("User has {} education", (educationType) => {
  questionnairePage.clickOnEducationType(educationType);
});

And("User has {} experience", (yearsOfExp) => {
  questionnairePage.clickOnYearsOfExperience(yearsOfExp);
});

And("User travels in a {} manner", (travelType) => {
  questionnairePage.clickOnTravelType(travelType);
});

And("User lives in {}", (state) => {
  questionnairePage.selectState(state);
});

And("User clicks on Kostenlos Dein Gehalt sehen to view result", () => {
  questionnairePage.clickOnSeeSalaryButton();
});

Then("User finds average salary equal to {}", (avgSalary) => {
  resultPage.verifyAvgSalary(avgSalary);
});

Then(
  "{} State contributes to salary difference for {}",
  (state, stateSalaryDifference) => {
    resultPage.verifyStateSalaryTitle(state);
    resultPage.verifyStateSalaryDifference(stateSalaryDifference);
  }
);

Then(
  "{} state contributes to salary difference for {}",
  (state, stateSalaryDifference) => {
    resultPage.verifyStateSalaryTitle(state);
    resultPage.verifyStateSalaryDifference(stateSalaryDifference);
  }
);

Then(
  "{} experience contributes to salary difference for {}",
  (yearsOfExp, yearExpDifference) => {
    resultPage.verifyYearOfExperienceTitle(yearsOfExp);
    resultPage.verifyYearOfExperienceValue(yearExpDifference);
  }
);

Then(
  "{} experience contributes to salary difference for {}",
  (yearsOfExp, yearExpDifference) => {
    resultPage.verifyYearOfExperienceTitle(yearsOfExp);
    resultPage.verifyYearOfExperienceValue(yearExpDifference);
  }
);

Then(
  "{} travel contributes to salary difference for {}",
  (travelTitle, travelDifference) => {
    resultPage.verifyTravelValue(travelDifference);
    resultPage.verifyTravelTitle(travelTitle);
  }
);

Then("User finds tips", () => {
  resultPage.verifyTipsVisible();
});

Then("Salary check provides estimations successfully", () => {
  resultPage.verifySuccessMessage();
});

Then("Salary check fails in providing estimations", () => {
  resultPage.verifyFailureMessage();
});

Then("User finds {} pay differences", (payDifferenceCount) => {
  resultPage.verifyPayDifferenceBoxCount(payDifferenceCount);
});

Then(
  "User finds 3 salary differences based on state, year of experience, and travel difference with amounts {},{},{} respectively",
  (stateSalaryDifference, yearExpDifference, travelDifference) => {
    resultPage.verifyStateSalaryDifference(stateSalaryDifference);
    resultPage.verifyYearOfExperienceValue(yearExpDifference);
    resultPage.verifyTravelValue(travelDifference);
  }
);
