const { Given, When, Then } = require("cucumber");

Given("I visit the site", function() {
  return "pending";
});
Then("I should see {string}", function(string) {
  return "pending";
});

When("I click {string}", async function(string){
  return "pending"
});
Then("I fill in {string} with {string}", async function(string1, string2){
  return "pending"
});
Then("I should have {int} contact in my address book", async function(int){
  return "pending"
});
Then("I should not see {string}", async function(string){
  return "pending"
});
