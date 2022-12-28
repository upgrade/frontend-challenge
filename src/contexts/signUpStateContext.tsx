import React, { createContext, Dispatch, useContext, useState } from "react";

export interface SignUpState {
  firstName?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  favoriteColor?: string | undefined;
  agreeTermsAndConditions?: boolean;
}

interface SignUpStateProviderProps {
  children: React.ReactNode;
  initState?: SignUpState;
}

const SignUpStateContext = createContext<
  | { signUpState: SignUpState; setSignUpState: Dispatch<SignUpState> }
  | undefined
>(undefined);

const SignUpStateProvider = ({
  children,
  initState = {
    firstName: undefined,
    email: undefined,
    password: undefined,
    favoriteColor: undefined,
    agreeTermsAndConditions: false,
  },
}: SignUpStateProviderProps) => {
  const [signUpState, setSignUpState] = useState<SignUpState>(initState);

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
