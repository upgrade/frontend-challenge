import React from "react";
import { DropboxProps } from "./Dropbox.types";

/**
 * @component React component responsible to render a dropbox. Modeled after the `<input>` tag.
 * @example <Dropbox options={["option 1", "option 2", ...]} />
 * @param {string[]} options
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Dropbox = ({ name, id, options, onChange }: DropboxProps) => {
  return (
    <div>
      <select
        name={name}
        id={id}
        onChange={(event) => onChange?.(event.target.value)}
      >
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
