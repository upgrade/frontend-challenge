import { createBrowserRouter } from "react-router-dom";
import NotFound from "src/views/NotFound";
import SignUpAdditionalInfo from "src/views/SignUpAdditionalInfo";
import SignUpConfirmation from "src/views/SignUpConfirmation";
import SignUpError from "src/views/SignUpError";
import SignUpStart from "src/views/SignUpStart";
import SignUpSuccess from "src/views/SignUpSuccess";
import signUpAdditionalInfoLoader from "src/router/signUpAdditionalInfoLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpStart />,
  },
  {
    path: "/more-info",
    element: <SignUpAdditionalInfo />,
    loader: signUpAdditionalInfoLoader,
  },
  {
    path: "/confirmation",
    element: <SignUpConfirmation />,
  },
  {
    path: "/success",
    element: <SignUpSuccess />,
  },
  {
    path: "/error",
    element: <SignUpError />,
  },
  {
    path: "*", //catch all
    element: <NotFound />,
  },
]);

export default router;
