import { JSXElementConstructor, ReactElement } from "react";

type RouteName = "/" | "more-info" | "confirmation" | "success" | "error";

export type AppRoutes = {
  path: RouteName;
  element: ReactElement<any, string | JSXElementConstructor<any>>;
}[];
