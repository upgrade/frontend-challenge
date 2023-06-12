import React from "react";
import { TextInputProps } from "./TextInput.types";
import { Input as _TextInput } from "@nextui-org/react";

/**
 * @component React component responsible to render a text input. Modeled after the `<input>` tag.
 * @example <TextInput placeholder="Name" />
 * @param {string} placeholder
 * @param {void} onChange
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const TextInput = ({ placeholder, onChange }: TextInputProps) => {
  return (
    <div>
      <_TextInput
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        width="100%"
      />
    </div>
  );
};
