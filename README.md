## Address Book [es2015]

Instructions
-------
This is the Address book challenge for week 02 in the Craft Academy programming course. The challenge is to create an address book where you can enter contact information. 

User Stories
----

```
Feature: Create contacts
  As a user
  In order to stay in touch with my friends
  I would like to be able to create a contact for them in my address book

```
```
Scenario: Create a new contact
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    Then I should have 1 contact in my address book
    And I should see "John Doe"
    And I should not see "You have no contacts in your address book"

```

```
Scenario: User creates multiple contacts
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    When I click "Add contact"
    Then I fill in "Name" with "Jane Doe"
    And I fill in "Email" with "jane@doe.com"
    And I fill in "Phone" with "01111111111"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome girl :-)"
    And I fill in "Twitter" with "janedoe"
    And I click "Save contact"
    Then I should have 2 contact in my address book
    And I should see "John Doe"
    And I should see "Jane Doe"
    And I should not see "You have no contacts in your address book"

```


Running in x
----

```
$ irb
> load 'lib/library.rb'
> library = Library.new
> library.collection
> library.books_available
> library.search('Pippi Långstrum')
> library.lend_out_book('Pippi Långstrum')
> library

```

Built with
----
The project is built with JavaScript as programming language, with html and finally styling was made with tailwind, CDN.
* Cucumber is used as testing framework for javascript feature tests.
* Chai is used to express assertions.
* Puppeteer is used to allow interaction with the browser.
* Superstatic is used to serve the application during the development.
* JavaScript is tranformed with the Webpack bundler.
* To transpile the ES6 code babeljs is used.
* Contacts are saved using LocalStorage.


Authors
----
  * Shirmen Chen (https://github.com/shirmenC)
  * Albert Stjarne (https://github.com/AlbertStjarne)

Acknowledgement
----
Thanks to the coaches for the support during the project, no one mentioned, no one forgotten :-)
