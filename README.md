# Powerus-cypress-cucumber

The project is done using Page object model and uses:
- cypress-cucumber-preprocessor for Behavior Driven Development (BDD)
- multiple-cucumber-html-reporter for reporting

# Installation
Run this to install the project
<br />
`npm install`
 
# Usage
To run and select the browser you can use
<br />
`npx cypress open`

To run the project in headless mode
<br />
`npx cypress run --spec cypress/e2e/spec.feature --browser chrome`

# Generate reports
After runnning the automation, you will have reports/cucumber-json folder created

You need to have ts-node installed
<br />
`npm install -g ts-node`

Run the script (this depends on reports/cucmber-json folder)
<br />
`ts-node generate-report.ts`

This will create report/testcases-report, open index.html in your browser
