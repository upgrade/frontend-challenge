import { Spinner } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { SignUpStateProvider } from "./contexts/signUpStateContext";
import SignUpLayout from "./layouts/SignUpLayout";
import router from "./router/router";

const App = () => {
  return (
    <SignUpLayout>
      <SignUpStateProvider>
        <RouterProvider router={router} fallbackElement={<Spinner />} />
      </SignUpStateProvider>
    </SignUpLayout>
  );
};

export default App;
