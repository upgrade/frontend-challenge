import React from "react";
import { ButtonProps } from "./Button.types";

/**
 * @component React component responsible to render a button. Modeled after the `<button>` tag.
 * @example <Button onClick={() => { alert("My Custom Button"); }}>My Custom Button</Button>
 * @param {void} onClick
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
