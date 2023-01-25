import React from "react";

const InfoContext = React.createContext()

// initial state values are an indication to the validator that these
// values have not been interacted with.
const initialState =  {  
  name: null,
  email: null,
  password: null,
  color: null,
  terms: null
}

function infoReducer(state, action) {
  switch (action.type) {
    case 'personal': {
      return {
        name: action.firstName,
        email: action.email,
        password: action.password,
        color: state.color,
        terms: state.terms
      }
    }
    case 'color': {
      return {
        name: state.name,
        email: state.email,
        password: state.password,
        color: action.color,
        terms: action.terms

      }
    }
    case 'restart': {
      return {
        ...initialState
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function InfoProvider({children}) {
  const [state, dispatch] = React.useReducer(infoReducer, initialState)
  const value = {state, dispatch}
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>
}

function useInfo() {
  const context = React.useContext(InfoContext)
  if (context === undefined) {
    throw new Error('useInfo must be used within a InfoContext')
  }
  return context
}

export {InfoProvider, useInfo}