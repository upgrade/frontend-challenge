import { ReactNode } from "react";

export type FormContextField = {
  id: string;
  label: string;
  value: string | boolean | number;
  isValid?: boolean;
};

export type FormContextType = {
  fields?: FormContextField[] | {};
  updateField?: (field: FormContextField) => void;
};

export type FormContextProviderType = {
  children: ReactNode;
};
