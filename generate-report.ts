const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cypress/reports/cucumber-json", // ** Path of .json file **//
  reportPath: "cypress/reports/testcases-report",

  metadata: {
    browser: {
    name: "Chrome",
    },
    device: "Local test machine",
    platform: {
    name: "PC",
    version: "ubuntu 20",
    },
    },
    });