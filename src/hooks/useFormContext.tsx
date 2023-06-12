import React, { createContext, useContext, useState } from "react";
import {
  FormContextType,
  FormContextProviderType,
  FormContextField,
} from "./useFormContext.types";

/**
 * @description Generic context used for handling form fields
 * @returns {React.Context}
 */
export const FormContext = createContext<FormContextType>(
  {} as FormContextType
);

/**
 * @description Generic context provider used for handling form fields
 * @returns {React.JSX.Element}
 */
export const FormContextProvider = ({ children }: FormContextProviderType) => {
  const [fields, setFields] = useState<Record<any, FormContextField>>({});

  /**
   * @description Initialize fields based on state.
   * @returns {void}
   */
  const initializeFields = (initialFields: Record<any, FormContextField>) => {
    setFields({
      ...fields,
      ...initialFields,
    });
  };

  /**
   * @description Update field on state and keep previous ones.
   * @returns {void}
   */
  const updateField = (id: string, field: FormContextField) => {
    setFields({
      ...fields,
      [id]: {
        ...field,
      },
    });
  };

  return (
    <FormContext.Provider value={{ fields, initializeFields, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

/**
 * @description This hook initialize a form and returns the current context.
 * @returns { router: {Router} }
 */
export const useFormContext = () => {
  const context = useContext(FormContext);

  return context;
};
