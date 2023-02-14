Feature: Powerus
    Scenario Outline: <testCaseTitle> - should give 3 salary differences
        Given User opens Powerus
        When User selects Elektriker Gehalt Übersicht
        And User clicks on Kostenlos Gehalt checken
        And User has <educationtype> education
        And User has <yearsOfExp> experience
        And User travels in a <travelType> manner
        And User lives in <state>
        And User clicks on Kostenlos Dein Gehalt sehen to view result
        Then Salary check provides estimations successfully
        Then User finds 3 pay differences
        Then User finds average salary equal to <avgSalary>
        Then <state> state contributes to salary difference for <statePayDifference>
        Then <yearsOfExp> experience contributes to salary difference for <yearOfExpPayDifference>
        Then <travelTitle> travel contributes to salary difference for <travelTypePayDifference>
        Examples:
            | testCaseTitle                                                | educationtype                   | yearsOfExp  | travelType      | state   | avgSalary         | statePayDifference  | yearOfExpPayDifference | travelTypePayDifference | travelTitle                        |
            | TC#1 Finished Ausbildung, unrestricted travel,10-20 year exp | Abgeschlossene Berufsausbildung | 10-20 Jahre | Uneingeschränkt | Bayern  | Ø 3.414 € / Monat | +162 €brutto/ Monat | +310 €brutto/ Monat    | +246 €netto/ Monat      | Uneingeschränkte Reisebereitschaft |
            | TC#2 Tech/Meister trainng, 0-2 year exp with few travel days | Techniker / Meister             | 0-2 Jahre   | Wenig           | Hamburg | Ø 2.922 € / Monat | -295 €brutto/ Monat | -730 €brutto/ Monat    | -132 €netto/ Monat      | Ein paar Tage im Monat             |
    Scenario: TC#3 In apprenticeship, cannot travel,2-5 year exp should get 2 salary differences
        Given User opens Powerus
        When User selects Elektriker Gehalt Übersicht
        And User clicks on Kostenlos Gehalt checken
        And User has Aktuell in der Ausbildung education
        And User has 2-5 Jahre experience
        And User travels in a Keine Reisen manner
        And User lives in Berlin
        And User clicks on Kostenlos Dein Gehalt sehen to view result
        Then User finds average salary equal to Ø 2.721 € / Monat
        Then Berlin state contributes to salary difference for -60 €brutto/ Monat
        Then 2-5 Jahre experience contributes to salary difference for -302 €brutto/ Monat
        Then Salary check provides estimations successfully
        Then User finds 2 pay differences

    Scenario: TC#4  Finished Ausbildung, cannot travel,5-10 year exp should get only one salary difference
        Given User opens Powerus
        When User selects Elektriker Gehalt Übersicht
        And User clicks on Kostenlos Gehalt checken
        And User has Abgeschlossene Berufsausbildung education
        And User has 5-10 Jahre experience
        And User travels in a Keine Reisen manner
        And User lives in Brandenburg
        And User clicks on Kostenlos Dein Gehalt sehen to view result
        Then User finds average salary equal to Ø 2.949 € / Monat
        Then Salary check provides estimations successfully
        Then User finds 1 pay differences
        Then Brandenburg state contributes to salary difference for -120 €brutto/ Monat


    Scenario: TC#5  no education, can travel,20+ year exp should get 0 salary differences
        Given User opens Powerus
        When User selects Elektriker Gehalt Übersicht
        And User clicks on Kostenlos Gehalt checken
        And User has Nein / Noch nicht anerkannt education
        And User has 20+ Jahre experience
        And User travels in a Häufig manner
        And User lives in Bremen
        And User clicks on Kostenlos Dein Gehalt sehen to view result
        Then Salary check fails in providing estimations
        Then User finds 0 pay differences




