Feature: End to End Ecommerce valiadtion

    Application Regression
    @Regression
    Scenario:  Ecommerce product delivery
    Given open the URL
    When I add items to cart 
    And validation the total price 
    Then select the country sumbit and verify thank you

    @Smoke
    Scenario: Filling the form 
    Given open the URL
    When I fill the form details
    |name      |gender  |
    |Mamatha   | Female |
    |Maslia    | Female |
    |Saran     | Male |

    Then valiadtion the form behaviour
    And Select the shop page

