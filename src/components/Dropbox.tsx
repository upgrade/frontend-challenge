import React from "react";
import { DropboxProps } from "./Dropbox.types";

/**
 * @component React component responsible to render a dropbox. Modeled after the `<input>` tag.
 * @example <Dropbox options={["option 1", "option 2", ...]} />
 * @param {string[]} options
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Dropbox = ({ name, id, options }: DropboxProps) => {
  return (
    <>
      <select name={name} id={id}>
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
};
