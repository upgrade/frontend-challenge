import React, { SetStateAction } from "react";
import { Dropdown } from "@nextui-org/react";
import { DropboxProps } from "./Dropbox.types";

/**
 * @component React component responsible to render a dropbox. Modeled after the `<input>` tag.
 * @example <Dropbox options={["option 1", "option 2", ...]} />
 * @param {string[]} options
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Dropbox = ({
  initialValue = "black",
  options,
  onChange,
}: DropboxProps) => {
  const [selected, setSelected] = React.useState(new Set([initialValue]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").split("_").join(" "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={(value) => {
          onChange?.(value as string);
          setSelected(value as SetStateAction<Set<string>>);
        }}
      >
        {options.map((item, index) => (
          <Dropdown.Item key={item}>{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
