import React from "react";
import { LabelProps } from "./Label.types";
import { Text } from "@nextui-org/react";

/**
 * @component React component responsible to render a label. Modeled after the `<label>` tag.
 * @example <Label>My Custom Label</Label>
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Label = ({ children }: LabelProps) => {
  return (
    <div>
      <Text h6>{children}</Text>
    </div>
  );
};
