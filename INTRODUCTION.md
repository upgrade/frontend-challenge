# Project Structure

This document provides a brief overview of the project's organization and key areas of focus.

## Components

All components reside in the `src/components` directory. Each component includes an optional `.types.ts` extension, facilitating clearer understanding of the props each component is expected to receive.

## Hooks

The Hooks directory is divided into two categories: `standard` and `api`. The `src/hooks/api` section is for all React Query abstractions.

Any other Hooks involved in state management are located within `src/hooks`.

## Form Context

We utilize React Context to manage form state, avoiding other state management libraries to decrease complexity.

As we scale the form for broader application use, improvements may be necessary. This is an area open for future improvements.

## Router

For application navigation, we are using React Router alongside with `useNavigation`, provided by the API.

Each route resides in `src/routes` as a functional component.

## Utilities

All utility functions are centralized in the `src/util`s directory (currently only validators).

## Theme

`NextUI` is being used to maintain style consistency across components. An alternate approach could involve implementing our own UI library using `styled-components` or `emotion` in the future.

## Testing

Jest is our testing suite of choice for the signup flow. Basic rendering checks are implemented, but there's room for improvement, especially in the area of testing our custom React Hooks.
