import React from 'react';
import ReactDOM from "react-dom/client";

import {
RouterProvider,
createBrowserRouter,
} from "react-router-dom";

import Error from "./routes/error"
import Signup from "./routes/signup";
import Success from "./routes/success";
import MoreInfo from "./routes/more-info"
import Confirmation from "./routes/confirmation"
import TermsConditions from "./routes/terms-conditions"

const router = createBrowserRouter([
// {
//     path: "/",
//     element: <Signup />,
// },
// {
//     path: "more-info",
//     element: <MoreInfo />,
//     loader: async () => {
//     return fetch(`http://localhost:3002/api/colors`);
//     },
// },
// {
//     path: "confirmation",
//     element: <Confirmation />,
// },
// {
//     path: "success",
//     element: <Success />,
// },
// {
//     path: "error",
//     element: <Error />,
// },
{
    path: "terms-conditions",
    element: <TermsConditions />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
