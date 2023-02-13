# Powerus-cypress-cucumber

The project is done using Page object model and uses:
- cypress-cucumber-preprocessor for Behavior Driven Development (BDD)
- multiple-cucumber-html-reporter for reporting

# Installation
Run this to install the project
``npm install``

# Usage
To run and select the browser you can use
```npx cypress open```

To run the project in headless mode
```npx cypress run --spec cypress/e2e/spec.feature --browser chrome```

# Generate reports
After runnning the automation, you will have reports/cucumber-json folder created

You need to have ts-node installed
```npm install -g ts-node```

Run the script (this depends on reports/cucmber-json folder)
```ts-node generate-report.ts``

This will create report/testcases-report, open index.html in your browser
