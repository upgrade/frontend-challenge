import React from "react";
import { SubtitleProps } from "./Subtitle.types";
import { Text } from "@nextui-org/react";

/**
 * @component React component responsible to render a title. Modeled after the `<h3>` tag.
 * @example <Subtitle>My Custom Subtitle</Subtitle>
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Subtitle = ({ children }: SubtitleProps) => {
  return <Text h3>{children}</Text>;
};
