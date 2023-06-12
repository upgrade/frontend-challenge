import React from "react";

import { RouterProvider } from "react-router-dom";
import { useRouter } from "./hooks/useRouter";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const router = useRouter();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
