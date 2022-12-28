import SignUpAdditionalInfo from "./SignUpAdditionalInfo";
import { waitFor, screen } from "@testing-library/react";
import { renderView } from "src/utils/testUtils";

describe("SignUpAdditionalInfo", () => {
  const mockColors = ["Blue", "Black", "Red"];

  it("should render dropdown with correct colors", async () => {
    const { container } = renderView({
      routes: [
        {
          path: "/more-info",
          element: <SignUpAdditionalInfo />,
          loader: () => mockColors,
        },
      ],
      routerOptions: { initialEntries: ["/more-info"] },
      signUpState: { firstName: "test", email: "test", password: "test" },
    });

    await waitFor(() => screen.findAllByTestId("color-select-option"));

    const colorOptions = (await screen.findAllByTestId(
      "color-select-option"
    )) as HTMLOptionElement[];

    expect(colorOptions.map((x) => x.value)).toEqual(mockColors);
    expect(container).toMatchSnapshot();
  });

  it("should redirect if certain states are not set", async () => {
    renderView({
      routes: [
        {
          path: "/more-info",
          element: <SignUpAdditionalInfo />,
          loader: () => mockColors,
        },
        {
          path: "/",
          element: <div>Redirected</div>,
        },
      ],
      routerOptions: { initialEntries: ["/more-info"] },
    });

    await waitFor(() => {
      screen.findByText("Redirected");
    });

    expect(await screen.findByText("Redirected")).not.toBeNull();
  });
});
