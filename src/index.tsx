import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/300.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
