import React from "react";

import { RouterProvider } from "react-router-dom";
import { useRouter } from "./hooks/useRouter";

export const App = () => {
  const router = useRouter();

  return <RouterProvider router={router} />;
};
