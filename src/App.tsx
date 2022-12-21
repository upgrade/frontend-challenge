import { RouterProvider } from "react-router-dom";
import SignUpLayout from "./layouts/SignUpLayout";
import router from "./router/router";

const App = () => {
  return (
    <SignUpLayout>
      <RouterProvider router={router} />
    </SignUpLayout>
  );
}

export default App;
