## Overall Architecture 
Single page application with a component library and basic browser state management.
I went with the SPA approach since little resources are needed to load the entire experience.
Component library makes it easier/faster to add components that are well tested and work for this purpose.
State management for the data that is moved between pages as the navigation changes.

### Dependencies
`react-router-dom` - since the app relies on multiple pages to display the experience I wanted a library that would make it easy to setup routing
`material-ui` - adding some components for a better UX
`react` - updated to 18 so that matrial-ui and react-router-dom would work together

## Running app
`npm start`
### Navigation
Each route is accessible directly from the browser.
The app will keep state of the user's entries as the user navigate forwards and backwords through the app.
The state of the app is reset when the user reaches `/error` or `/success` pages.

## Routes and Pages
All the pages can be found under `src/routes`.  There is a `Layout` component that each page uses for basic container setting.
Route definition through the `react-router-dom` library provides a data loader configuration that ensures that data is loaded before the page is loaded.  Because of this architecture the UX spinners for async data loads need to render on the previous page.

## State Management
Since the application needs to keep state between pages and the overall footprint of the application is small I decided to use react context.
With react context each 
### Initial State
The initial state sets each value in the store to `null` this allows the downstream validation system to know if the value has been edited by user.

## Form Management
Forms are built from material-ui components, data capturing and validations is done by internal code.
### Validation
The two forms have validation to do basic checks.  The validator will not validate if the value is `null`.   
### Data Submission
Data is submitted with `fetch` and routing decisions are conducted in code based on response.

## Missing
1. Unit Test - would use react-testing-library for this app
2. Routing logic - any page is accessible at the moment no matter if necessary data is missing