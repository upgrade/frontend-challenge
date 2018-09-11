# Upgrade Challenge

## Prerequisites

- Latest [Node.js LTS](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)

## Goals

The review team will be evaluating your solution based on:

- Completion: The provided solution works as intended
- Code organization: How well structured is the solution
- JavaScript Knowledge: Good usage of language features in order to solve the proposed problem
- UX/UI: Consistent usage of good user experience patterns and overall attention to detail

_If you have questions regarding the challenge or feel the instructions are unclear, please reach out to your contact at Upgrade._

## Implementing your solution

This repository contains an empty project boilerplate created using [create-react-app](https://github.com/facebook/create-react-app). We ask that you please [fork](https://help.github.com/articles/fork-a-repo/) this repo and [clone](https://help.github.com/articles/cloning-a-repository/) this forked version to your local computer in order to start working on a solution. 

### Quick start

```sh
# with yarn
yarn
yarn start

# with npm
npm i
npm start
```

This will install all required dependencies and start a development server.

> For more information on how to manage the development server and tooling, please consult the [create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

Once you're confident with your result, please submit your solution by contacting HR with a link to your working repository. Optionally, you may add a `INTRODUCTION.md` file to explain the different concepts explored within your implementation and why you decided to implement things the way they are, just keep in mind that the goal is to help guide the person that is going to be reviewing your code so try to make it clear and concise.

## Challenge

The proposed scenario aims to replicate the regular tasks our front end team might have during the development phase of a project. The goal is to be short enough in order to not be too time consuming (we recommend the candidates to try and stay within an average of 3h-6h of work in their solution) while also allowing us to assess the candidate abilities in an environment that is closer to that of day to day development.

The challenge implementation is a web form that should submit basic user data from some standard web form, the only special requirement is that the form should be separated into two different parts (each of them with their own route). A confirmation page should be displayed at the end along with a submit button in order to post the form data and also an error page in case things go wrong.

### Routes

Your app should contain the follow routes:

- `/`: Initial form, should contain 3 fields: first name, email and password and a next button
- `/more-info`: Second part, should have 2 form fields: favorite color select field, an agreement checkbox and a back/next button
- `/confirmation`: Should display data from the 2 previous steps and show a submit button that sends the form request (also a back button to allow changes)
- `/success`: Final page to be shown if form is successfully submitted
- `/error` Error page that the user should be taken to in case anything goes wrong

### Wireframes

The following wireframe represent how each of these pages should look like and the expected flow:

![wireframe](20180829-wireframe001.png)

### Important implementation details

- There's a second server that gets started on `npm|yarn start` that provides the mocked API endpoints: `http://localhost:3001`
- The list of colors to be displayed in the `/more-info` page should be built from the response of `http://localhost:3001/api/colors` endpoint
- In order to submit the form data use an `application/json` content type in your `POST` request to `http://localhost:3001/api/submit` endpoint
  - Data should look like:
  ```json
  {
      "name": "",
      "email": "",
      "password": "",
      "color": "",
      "terms": false
  }
  ```
- Show success / error page according to the returned http status from the submit response
- Make sure to add a loading indicator (spinner) to all API requests in order to provide UX feedback since the mocked server will have a delayed response

