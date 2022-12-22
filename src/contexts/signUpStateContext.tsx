import React, { createContext, Dispatch, useContext, useState } from "react";

interface SignUpState {
  firstName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  favoriteColor: string | undefined;
  agreeTermsAndConditions: boolean;
}

interface SignUpStateProviderProps {
  children: React.ReactNode;
}

const SignUpStateContext = createContext<
  | { signUpState: SignUpState; setSignUpState: Dispatch<SignUpState> }
  | undefined
>(undefined);

const SignUpStateProvider = ({ children }: SignUpStateProviderProps) => {
  const [signUpState, setSignUpState] = useState<SignUpState>({
    firstName: undefined,
    email: undefined,
    password: undefined,
    favoriteColor: undefined,
    agreeTermsAndConditions: false,
  });

  return (
    <SignUpStateContext.Provider value={{ signUpState, setSignUpState }}>
      {children}
    </SignUpStateContext.Provider>
  );
};

const useSignUpState = () => {
  const context = useContext(SignUpStateContext);
  if (!context) {
    throw new Error("useSignUpState needs to be used with SignUpStateProvider");
  }
  return context;
};

export { SignUpStateProvider, useSignUpState };
