import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/300.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>
);
