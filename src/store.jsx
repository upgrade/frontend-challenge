/**********************************************************************************/
/* store.jsx: 
/* The configuration for the redux store.
/* @author: Elvis Goncalves
/**********************************************************************************/

import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'

export default configureStore({
  reducer: {
    appReducer: appReducer
  }
})
