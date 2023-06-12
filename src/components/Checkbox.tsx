import React from "react";
import { CheckboxProps } from "./Checkbox.types";
import { Checkbox as _Checkbox } from "@nextui-org/react";

/**
 * @component React component responsible to render a checkbox. Modeled after the `<input>` tag.
 * @example <Checkbox options={["option 1", "option 2", ...]} />
 * @param {string[]} options
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Checkbox = ({ options, onChange }: CheckboxProps) => {
  return options.map((item, index) => (
    <div key={index}>
      <_Checkbox onChange={(value) => onChange?.(value)}>{item}</_Checkbox>
    </div>
  ));
};
