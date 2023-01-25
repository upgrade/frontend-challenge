import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { InfoProvider } from "./store/info-provider";

import Error from "./routes/error"
import Signup from "./routes/signup";
import Success from "./routes/success";
import MoreInfo from "./routes/more-info"
import Confirmation from "./routes/confirmation"
import TermsConditions from "./routes/terms-conditions"

const colorsLoader = async() => {
  return fetch(`http://localhost:3001/api/colors`)
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        path="/" 
        element={<InfoProvider><Signup/></InfoProvider>}/>
      <Route 
        path="more-info" 
        loader={colorsLoader} 
        element={<InfoProvider><MoreInfo/></InfoProvider>}/>
      <Route 
        path="confirmation" 
        element={<InfoProvider><Confirmation /></InfoProvider>}/>
      <Route 
        path="success" 
        element={<InfoProvider><Success/></InfoProvider>} />
      <Route 
        path="error" 
        element={<InfoProvider><Error/></InfoProvider>} />
      <Route 
        path="terms-conditions" 
        element={<TermsConditions/>} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router}  />;
}
