import React from "react";
import { IconProps } from "./Icon.types";

/**
 * @component React component responsible to render a icon. Modeled after the `<img>` tag.
 * @example <Icon src="icon.png" size={12} />
 * @param {string} src
 * @param {number} size
 * @returns {JSX.Element} The JSX element to be rendered by React.
 */
export const Icon = ({ src, size }: IconProps) => {
  return <img src={src} width={size} />;
};
