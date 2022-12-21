import React from "react";

interface SignUpLayoutProps {
  children: React.ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default SignUpLayout;
