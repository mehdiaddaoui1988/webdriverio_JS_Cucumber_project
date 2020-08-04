Feature: Connect to the Login page 
Scenario: I use valid credentials to log in 
    Given  I am on the login page ORANGEHRM
    When I use a valid login and password 
    Then  I shall be on the ORANGEHRM user page