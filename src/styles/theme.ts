import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: `Montserrat, sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default theme;
