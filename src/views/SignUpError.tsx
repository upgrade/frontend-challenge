import React, { useEffect } from "react";
import { useSignUpState } from "src/contexts/signUpStateContext";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import Lottie from "lottie-react";
import errorAnimation from "src/animations/error.json";
import { useNavigate } from "react-router-dom";

const SignUpError: React.FC = () => {
  const { setSignUpState } = useSignUpState();
  const navigate = useNavigate();

  useEffect(() => {
    setSignUpState({
      firstName: undefined,
      email: undefined,
      password: undefined,
      favoriteColor: undefined,
      agreeTermsAndConditions: false,
    });
  }, []);

  return (
    <Box>
      <VStack spacing={6}>
        <Heading as="h1">Error</Heading>
        <Text>Uh oh, something went wrong. Please try again later.</Text>
        <Box width="60%">
          <Lottie animationData={errorAnimation}></Lottie>
        </Box>
        <Button onClick={(event) => navigate("/", { replace: true })}>
          Restart
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpError;
