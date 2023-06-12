import React from "react";
import { TitleProps } from "./Title.types";
import { Text } from "@nextui-org/react";

/**
 * @component React component responsible to render a title. Modeled after the `<h1>` tag.
 * @example <Title>My Custom Title</Title>
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Title = ({ children }: TitleProps) => {
  return <Text h1>{children}</Text>;
};
