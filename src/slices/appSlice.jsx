/**********************************************************************************/
/* appSlice.js: 
/* Using the ReduxToolkit, this is a function that accepts an initial state, 
/* an object of reducer functions, and a "slice name", and automatically generates
/* action creators and action types that correspond to the reducers and state.
/* @author: Elvis Goncalves
/**********************************************************************************/

import { createSlice } from '@reduxjs/toolkit'

// Get the persisted user information from the localStorage.
const localStorageUser = JSON.parse(localStorage.getItem("upgrade-user"));

// Get the persisted colors information from the localStorage.
const localStorageColors = JSON.parse(localStorage.getItem("upgrade-colors"));

// Create the slice with the initial state and reducer functions.
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    colors: localStorageColors ?? [], // To store the colors from the API call.
    loading: false, // To store the loading effect when calling the APIs
    user: {
        name: localStorageUser?.name ?? "",
        email: localStorageUser?.email ?? "",
        password: localStorageUser?.password ?? "",
        color: localStorageUser?.color ?? "",
        terms: localStorageUser?.terms ?? false
    }
  },
  reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setColors: (state, action) => {
            state.colors = action.payload;
            localStorage.setItem("upgrade-colors", JSON.stringify(state.colors));
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("upgrade-user", JSON.stringify(state.user));
        }
  }
})

// Action creators are generated for each case reducer function.
export const { setColors, setLoading, setUser } = appSlice.actions

export default appSlice.reducer