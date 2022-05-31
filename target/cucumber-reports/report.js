$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "\r\nDescription: This feature will test a LogIn functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User Is Already On Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Is_Already_On_Login_Page()"
});
formatter.result({
  "duration": 9821540800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-functionality;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Given User Is Already On Login Page\t//background"
    }
  ],
  "line": 10,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "john",
        "demo"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Title of the Page should be \"ParaBank | Accounts Overview\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 1733561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ParaBank | Accounts Overview",
      "offset": 33
    }
  ],
  "location": "LoginSteps.the_Title_of_the_Page_should_be(String)"
});
formatter.result({
  "duration": 19679700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User Is Already On Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_Is_Already_On_Login_Page()"
});
formatter.result({
  "duration": 5987581500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Successful Login with InValid Credentials",
  "description": "",
  "id": "login-functionality;successful-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Given User Is Already On Login Page"
    }
  ],
  "line": 18,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "jonn",
        "demo1"
      ],
      "line": 19
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The error message should be \"The username and password could not be verified.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 2240779200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The username and password could not be verified.",
      "offset": 29
    }
  ],
  "location": "LoginSteps.the_error_message_should_be(String)"
});
formatter.result({
  "duration": 53010500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});