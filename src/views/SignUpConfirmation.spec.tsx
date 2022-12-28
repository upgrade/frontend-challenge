import SignUpConfirmation from "./SignUpConfirmation";
import { waitFor, screen, fireEvent } from "@testing-library/react";
import { renderView } from "src/utils/testUtils";

describe("SignUpConfirmation", () => {
  const mockColors = ["Blue", "Black", "Red"];

  it("should render sign up state values", async () => {
    const { container } = renderView({
      routes: [
        {
          path: "/confirmation",
          element: <SignUpConfirmation />,
        },
      ],
      routerOptions: { initialEntries: ["/confirmation"] },
      signUpState: {
        firstName: "test",
        email: "test",
        password: "test",
        favoriteColor: "test",
        agreeTermsAndConditions: true,
      },
    });

    await waitFor(() =>
      Promise.all([
        screen.findByTestId("first-name-value"),
        screen.findByTestId("email-value"),
        screen.findByTestId("password-value"),
        screen.findByTestId("color-value"),
        screen.findByTestId("terms-value"),
      ])
    );

    const renderedValues = await Promise.all([
      screen.findByTestId("first-name-value"),
      screen.findByTestId("email-value"),
      screen.findByTestId("password-value"),
      screen.findByTestId("color-value"),
      screen.findByTestId("terms-value"),
    ]);

    expect(renderedValues.map((x) => x.textContent)).toEqual([
      "test",
      "test",
      "••••",
      "test",
      "Accepted",
    ]);
    expect(container).toMatchSnapshot();
  });

  it("should show a loading spinner on submit btn click", async () => {
    renderView({
      routes: [
        {
          path: "/confirmation",
          element: <SignUpConfirmation />,
        },
        {
          path: "/success",
          element: <div>Success</div>,
        },
      ],
      routerOptions: { initialEntries: ["/confirmation"] },
      signUpState: {
        firstName: "test",
        email: "test",
        password: "test",
        favoriteColor: "test",
        agreeTermsAndConditions: true,
      },
    });

    await waitFor(() => screen.findByTestId("submit-btn"));

    const submitBtn = await screen.findByTestId("submit-btn");
    fireEvent.click(submitBtn);

    expect(await screen.findByTestId("submit-btn-spinner")).not.toBe(null);
  });
});
