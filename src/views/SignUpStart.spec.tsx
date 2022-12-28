import { renderView } from "src/utils/testUtils";
import SignUpStart from "./SignUpStart";
import { waitFor, screen, fireEvent } from "@testing-library/react";

describe("SignUpStart", () => {
  it("should render three inputs", async () => {
    const { container } = renderView({
      routes: [
        {
          path: "/",
          element: <SignUpStart />,
        },
      ],
      routerOptions: { initialEntries: ["/"] },
    });

    await waitFor(() =>
      Promise.all([
        screen.findByTestId("first-name-input"),
        screen.findByTestId("email-input"),
        screen.findByTestId("password-input"),
      ])
    );

    expect(await screen.findByTestId("first-name-input")).not.toBe(null);
    expect(await screen.findByTestId("email-input")).not.toBe(null);
    expect(await screen.findByTestId("password-input")).not.toBe(null);
    expect(container).toMatchSnapshot();
  });

  it("should pre-populate name and email, if set in state", async () => {
    renderView({
      routes: [
        {
          path: "/",
          element: <SignUpStart />,
        },
      ],
      routerOptions: { initialEntries: ["/"] },
      signUpState: { firstName: "test", email: "test@test.com" },
    });

    await waitFor(() =>
      Promise.all([
        screen.findByTestId("first-name-input"),
        screen.findByTestId("email-input"),
      ])
    );

    const nameInput = (await screen.findByTestId(
      "first-name-input"
    )) as HTMLInputElement;
    const emailInput = (await screen.findByTestId(
      "email-input"
    )) as HTMLInputElement;

    expect(nameInput.value).toBe("test");
    expect(emailInput.value).toBe("test@test.com");
  });

  it("should display errors for invalid inputs on next click", async () => {
    renderView({
      routes: [
        {
          path: "/",
          element: <SignUpStart />,
        },
      ],
      routerOptions: { initialEntries: ["/"] },
    });

    await waitFor(() => Promise.all([screen.findByTestId("next-btn")]));

    const nextBtn = await screen.findByTestId("next-btn");
    fireEvent.click(nextBtn);

    expect(await screen.findByTestId("first-name-input-error")).not.toBe(null);
    expect(await screen.findByTestId("email-input-error")).not.toBe(null);
    expect(await screen.findByTestId("password-input-error")).not.toBe(null);
  });
});
