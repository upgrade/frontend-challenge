import { InitialEntry, RouterState } from "@remix-run/router";
import {
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import {
  SignUpState,
  SignUpStateProvider,
} from "src/contexts/signUpStateContext";
import { render } from "@testing-library/react";

interface RenderViewProps {
  routes: RouteObject[];
  routerOptions?:
    | {
        basename?: string | undefined;
        hydrationData?:
          | Partial<Pick<RouterState, "errors" | "loaderData" | "actionData">>
          | undefined;
        initialEntries?: InitialEntry[] | undefined;
        initialIndex?: number | undefined;
      }
    | undefined;
  signUpState?: SignUpState;
}

export const renderView = ({
  routes,
  routerOptions = {},
  signUpState,
}: RenderViewProps) => {
  const router = createMemoryRouter(routes, routerOptions);

  return {
    ...render(
      <SignUpStateProvider initState={signUpState}>
        <RouterProvider router={router} />
      </SignUpStateProvider>
    ),
    router,
  };
};
