import React from "react";

import { render, screen } from "@testing-library/react";
import { ErrorRoute } from "./Error";
import { FormContextProvider } from "../hooks/useFormContext";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("<ErrorRoute />", () => {
  it("should render the error title", () => {
    render(
      <FormContextProvider>
        <ErrorRoute />
      </FormContextProvider>
    );

    const errorTitle = screen.getByText(/Error/i);

    expect(errorTitle).toBeTruthy();
  });

  it("should render the error image", () => {
    render(
      <FormContextProvider>
        <ErrorRoute />
      </FormContextProvider>
    );

    const errorImage = screen.getByAltText(/Error Image/i);

    expect(errorImage).toBeTruthy();
  });

  it("should render the subtitle", () => {
    render(
      <FormContextProvider>
        <ErrorRoute />
      </FormContextProvider>
    );

    const somethingWentWrong = screen.getByText(/Uh oh, something went wrong/i);

    expect(somethingWentWrong).toBeTruthy();
  });

  it("should render restart button", () => {
    render(
      <FormContextProvider>
        <ErrorRoute />
      </FormContextProvider>
    );

    const button = screen.getByText(/Restart/i);

    expect(button).toBeTruthy();
  });
});
