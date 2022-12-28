import PasswordValidationList from "./PasswordValidationList";
import { render, screen, waitFor } from "@testing-library/react";
import { FieldErrorsImpl } from "react-hook-form";
import { SignUpStartInputs } from "src/views/SignUpStart";

describe("PasswordValidationList", () => {
  it("should render all validation items as errored", async () => {
    const errors: FieldErrorsImpl<SignUpStartInputs> = {
      password: {
        message: "",
        type: "required",
        types: {
          required: true,
          passwordLowercase: true,
          passwordNumber: true,
          passwordSpecial: true,
          passwordUppercase: true,
        },
      },
    };

    const { container } = render(<PasswordValidationList errors={errors} />);

    await waitFor(() =>
      screen.findAllByTestId("password-validation-list-item-error")
    );

    const listErrors = await screen.findAllByTestId(
      "password-validation-list-item-error"
    );
    expect(listErrors.length).toEqual(5);
    expect(container).toMatchSnapshot();
  });

  it("should render all validation items as valid", async () => {
    const errors: FieldErrorsImpl<SignUpStartInputs> = {
      password: {
        message: "",
        type: "required",
        types: {},
      },
    };

    const { container } = render(<PasswordValidationList errors={errors} />);

    await waitFor(() =>
      screen.findAllByTestId("password-validation-list-item-valid")
    );

    const listValids = await screen.findAllByTestId(
      "password-validation-list-item-valid"
    );
    expect(listValids.length).toEqual(5);
    expect(container).toMatchSnapshot();
  });
});
