import React from "react";

import { render, screen } from "@testing-library/react";
import { HomeRoute } from "./Home";
import { FormContextProvider } from "../hooks/useFormContext";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("<HomeRoute />", () => {
  it("should render the signup title", () => {
    render(
      <FormContextProvider>
        <HomeRoute />
      </FormContextProvider>
    );

    const signupTitle = screen.getByText(/Sign-up/i);

    expect(signupTitle).toBeTruthy();
  });

  it("should render firstName, email, and password", () => {
    render(
      <FormContextProvider>
        <HomeRoute />
      </FormContextProvider>
    );

    const firstName = screen.queryByPlaceholderText(/First Name/i);
    const email = screen.queryByPlaceholderText(/E-Mail/i);
    const password = screen.queryByPlaceholderText(/Password/i);

    expect(firstName).toBeTruthy();
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it("should render next button", () => {
    render(
      <FormContextProvider>
        <HomeRoute />
      </FormContextProvider>
    );

    const button = screen.getByText(/Next/i);

    expect(button).toBeTruthy();
  });
});
