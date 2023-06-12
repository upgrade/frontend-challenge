import { ReactNode } from "react";

export type CheckboxProps = {
  options: ReactNode[];
  onChange?: (value: string) => void;
};
