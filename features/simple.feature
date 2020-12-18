Feature: Simple - Email verification

  @SB-1234 case 1.a.
  Scenario: Entering a bad formatted email
    When A customer enters a bad formatted email
    Then The result is false

  @SB-1234 case 1.b.
  Scenario: Entering a right formatted email
    When A customer enters a right formatted email
    Then The result is true

