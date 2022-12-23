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
    errorElement: <SignUpError />,
  },
  {
    path: "/more-info",
    element: <SignUpAdditionalInfo />,
    errorElement: <SignUpError />,
    loader: signUpAdditionalInfoLoader,
  },
  {
    path: "/confirmation",
    element: <SignUpConfirmation />,
    errorElement: <SignUpError />,
  },
  {
    path: "/success",
    element: <SignUpSuccess />,
    errorElement: <SignUpError />,
  },
  {
    path: "/error",
    element: <SignUpError />,
    errorElement: <SignUpError />,
  },
  {
    path: "*", //catch all
    element: <NotFound />,
  },
]);

export default router;
