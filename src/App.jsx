import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp";
import AdditionalInfo from "./pages/AdditionalInfo";
import Confirmation from "./pages/Confirmation";
import SuccessMessage from "./pages/SuccessMessage";
import ErrorMessage from "./pages/ErrorMessage";
import Page404 from "./pages/Page404";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SignUp />} />
            <Route path="more-info" element={<AdditionalInfo />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="success" element={<SuccessMessage />} />
            <Route path="error" element={<ErrorMessage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
