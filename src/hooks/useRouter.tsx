import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./useRouter.types";
import { RootRoute } from "../routes/root";
import { MoreInfoRoute } from "../routes/moreInfo";
import { ConfirmationRoute } from "../routes/confirmation";
import { SuccessRoute } from "../routes/success";
import { ErrorRoute } from "../routes/error";

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
      element: <RootRoute />,
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
