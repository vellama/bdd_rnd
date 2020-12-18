Feature: Outline - Email validation

  @SB-1234
  Scenario Outline: Check email is usable
    When we have to check this email: <Email>
    Then the result should be <Result>

    Examples:
      | Email                 | Result |
      | badFormattedEmail     | false  |
      | not.callable@fake.com | false  |
      | can.call@fake.com     | true   |
