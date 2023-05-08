# Implementation detail

## State management
To share the state between the different components during the sign-up flow, I'm using a reducer (/reducer/signUpReducer.js)
to manage the state logic outside of the components.

The state managed by this reducer will be put in the Context so each child component of the Context provider
will easily get access to the state.

In other words, I'm combining the reducer and context together so every component in the tree can simply call
the `dispatch` function from the reducer to update the state. Please check the `App.js` to see the tree structure.

## Routing
I'm using `react-router` v6 to easily manage the routing between the different pages in the sign-up flow.

## Form
I'm using `formik` v2 to easily manage the state and error handling in the sign-up forms. Also, I can add
a schema validation file (/schema/index.js) for the input validations.

## Components structure
I follow the atomic design. Thus, I keep atomic components in the atoms folder and components that reuse atomic
components in the components folder.
