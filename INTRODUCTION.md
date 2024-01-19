# Upgrade Challenge

## Introduction

Hi, my name is Elvis Goncalves and this is my version of the Upgrade Challenge.

For the sake of UI simplicity i decided to start it off with bootstrap and react-strap but have also added some custom sass. You will see that i customized the look of the checkbox on step 2.

I also took the liberty to give the application a look and feel that is somewhat similar to the Upgrade.com site. I'm using the same logo and fonts.

### Note: My local server runs on port 5173, therefore i had to update the server/index.js file to support API calls from this port.
### URL for app: http://localhost:5173/

## Libraries

As you will see in the package.json file i added a few libraries to help me build this application:

- "bootstrap": For general UI layout
- "reactstrap": For the Modal component
- "react-redux": For the application state management
- "@reduxjs/toolkit": To create a slice and actions for each reducer function
- "react-router-dom": To define the different application routes
- "react-hook-form": For form validations
- "classnames": For conditionally joining classNames together
- "react-overlay-loader": For loading image during API calls
- "sass": For SASS support

## General Approach

Here are the high level steps that i took to build this app:

- Implemented the different routes for each step of the app.
- Configured a redux store and made it available to the App component.
- Used the redux store for the User information, available colors and the loading feature on the API calls.
- Implemented form validations on the steps that required user input with the help of react-hook-forms.
- Once the form is valid, the user can move on to the next step. The forms data is dispatched to the redux store.
- As the user moves through the first 2 steps, i persisted the User and Colors state in the localStorage in order not to lose the information on page refresh.
- Once the colors are fetched from the API they are persisted in the localStorage in order not to make that same API call again.
- If the user enters "Error" as a first name, the server will return an error and will redirect to the error page.
- I implemented an error 404 page in case a route does not exist.

### Unit Testing

I added some test in the App.test.jsx file to test if each of the pages can load properly.

I also added a SignUp.test.jsx to trigger the form validations and see if it would display the error messages.
