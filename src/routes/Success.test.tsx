import React from "react";

import { render, screen } from "@testing-library/react";
import { SuccessRoute } from "./Success";
import { FormContextProvider } from "../hooks/useFormContext";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("<SuccessRoute />", () => {
  it("should render the success title", () => {
    render(
      <FormContextProvider>
        <SuccessRoute />
      </FormContextProvider>
    );

    const SuccessTitle = screen.getByText(/Success/i);

    expect(SuccessTitle).toBeTruthy();
  });

  it("should render the success image", () => {
    render(
      <FormContextProvider>
        <SuccessRoute />
      </FormContextProvider>
    );

    const SuccessImage = screen.getByAltText(/Success Image/i);

    expect(SuccessImage).toBeTruthy();
  });

  it("should render the subtitle", () => {
    render(
      <FormContextProvider>
        <SuccessRoute />
      </FormContextProvider>
    );

    const confirmationEmail = screen.getByText(
      /You should receive a confirmation email soon/i
    );

    expect(confirmationEmail).toBeTruthy();
  });

  it("should render restart button", () => {
    render(
      <FormContextProvider>
        <SuccessRoute />
      </FormContextProvider>
    );

    const button = screen.getByText(/Restart/i);

    expect(button).toBeTruthy();
  });
});
