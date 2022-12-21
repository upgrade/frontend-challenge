import { createBrowserRouter } from "react-router-dom";
import NotFound from "../views/NotFound";
import SignUpAdditionalInfo from "../views/SignUpAdditionalInfo";
import SignUpConfirmation from "../views/SignUpConfirmation";
import SignUpError from "../views/SignUpError";
import SignUpStart from "../views/SignUpStart";
import SignUpSuccess from "../views/SignUpSuccess";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpStart/>,
  },
  {
    path: '/more-info',
    element: <SignUpAdditionalInfo/>,
  },
  {
    path: '/confirmation',
    element: <SignUpConfirmation/>,
  },
  {
    path: '/success',
    element: <SignUpSuccess/>,
  },
  {
    path: '/error',
    element: <SignUpError/>,
  },
  {
    path: '*', //catch all
    element: <NotFound/>,
  }
]);

export default router;