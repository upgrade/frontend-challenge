import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpState } from "../contexts/signUpStateContext";

const SignUpAdditionalInfo: React.FC = () => {
  const navigate = useNavigate();
  const { signUpState, setSignUpState } = useSignUpState();

  useEffect(() => {
    if (!signUpState.firstName || !signUpState.email || !signUpState.password) {
      navigate("/");
    }
  }, []);

  return <></>;
};

export default SignUpAdditionalInfo;
