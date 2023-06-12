import React from "react";

import { render, screen } from "@testing-library/react";
import { HomeRoute } from "./Home";
import { FormContextProvider } from "../hooks/useFormContext";
import { MoreInfoRoute } from "./MoreInfo";
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

describe("<MoreInfoRoute />", () => {
  it("should render the additional info title", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <MoreInfoRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const additionalInfoTitle = screen.getByText(/Additional Info/i);

    expect(additionalInfoTitle).toBeTruthy();
  });

  it("should render back button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <MoreInfoRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const button = screen.getByText(/Back/i);

    expect(button).toBeTruthy();
  });

  it("should render next button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <MoreInfoRoute />
        </FormContextProvider>
      </QueryClientProvider>
    );

    const button = screen.getByText(/Next/i);

    expect(button).toBeTruthy();
  });
});
