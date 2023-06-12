import React from "react";

import { Card, Container, NextUIProvider, Spacer } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { useRouter } from "./hooks/useRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { FormContextProvider } from "./hooks/useFormContext";
import { Icon } from "./components/Icon";

export const App = () => {
  const router = useRouter();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FormContextProvider>
        <NextUIProvider>
          <Spacer y={5} />
          <center>
            <Icon src="/upgrade.png" size={250} />
          </center>
          <Spacer y={2.5} />
          <Container xs>
            <Card>
              <Card.Body>
                <RouterProvider router={router} />
              </Card.Body>
            </Card>
          </Container>
        </NextUIProvider>
      </FormContextProvider>
    </QueryClientProvider>
  );
};
