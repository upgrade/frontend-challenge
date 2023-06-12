import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./useRouter.types";
import { HomeRoute } from "../routes/Home";
import { MoreInfoRoute } from "../routes/MoreInfo";
import { ConfirmationRoute } from "../routes/Confirmation";
import { SuccessRoute } from "../routes/Success";
import { ErrorRoute } from "../routes/Error";

/**
 * @typedef {import("react-router-dom").Router} Router
 */

/**
 * @description This hook creates the routes and maps it with the equivalent element for our application.
 * @returns {Router}
 */
export const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "more-info",
      element: <MoreInfoRoute />,
    },
    ,
    {
      path: "confirmation",
      element: <ConfirmationRoute />,
    },
    ,
    {
      path: "success",
      element: <SuccessRoute />,
    },
    {
      path: "error",
      element: <ErrorRoute />,
    },
  ] as AppRoutes);
};
