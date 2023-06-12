import { ReactNode } from "react";

export type FormContextField = {
  value?: any;
  isInvalid?: boolean;
};

export type FormContextType = {
  fields: Record<any, FormContextField>;
  updateField: (id: string, field: FormContextField) => void;
  initializeFields: (fields: Record<any, FormContextField>) => void;
};

export type FormContextProviderType = {
  children: ReactNode;
};
