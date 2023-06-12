import React from "react";

import { render, screen } from "@testing-library/react";
import { FormContextProvider } from "../hooks/useFormContext";
import { ConfirmationRoute } from "./Confirmation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("<ConfirmationRoute />", () => {
  it("should render the confirmation title", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <ConfirmationRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const confirmationTitle = screen.getByText(/Confirmation/i);

    expect(confirmationTitle).toBeTruthy();
  });

  it("should render firstName, email, password, favorite color, and terms", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <ConfirmationRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const firstName = screen.getByText(/First Name/i);
    const email = screen.getByText(/E-Mail/i);
    const password = screen.getByText(/Password/i);
    const favoriteColor = screen.getByText(/Favorite Color/i);
    const terms = screen.getByText(/Terms and Conditions/i);

    expect(firstName).toBeTruthy();
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
    expect(favoriteColor).toBeTruthy();
    expect(terms).toBeTruthy();
  });

  it("should render back button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <ConfirmationRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const button = screen.getByText(/Back/i);

    expect(button).toBeTruthy();
  });

  it("should render submit button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <ConfirmationRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const button = screen.getByText(/Submit/i);

    expect(button).toBeTruthy();
  });
});
