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
export const FormContext = createContext<FormContextType>({
  fields: undefined,
  setFields: () => null,
} as FormContextType);

/**
 * @description Generic context provider used for handling form fields
 * @returns {React.JSX.Element}
 */
export const FormContextProvider = ({ children }: FormContextProviderType) => {
  const [fields, setFields] = useState({});

  /**
   * @description Update field on state and keep previous ones.
   * @returns {void}
   */
  const updateField = (field: FormContextField) => {
    setFields({
      ...fields,
      ...field,
    });
  };

  return (
    <FormContext.Provider value={{ fields, updateField }}>
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
