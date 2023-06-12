import { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
};
