import React, { useEffect } from "react";
import { useSignUpState } from "src/contexts/signUpStateContext";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import Lottie from "lottie-react";
import successAnimation from "src/animations/success.json";
import { useNavigate } from "react-router-dom";

const SignUpSuccess: React.FC = () => {
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
        <Heading as="h1">Success!</Heading>
        <Text>You should recieve a confirmation email soon.</Text>
        <Box width="60%">
          <Lottie animationData={successAnimation} loop={false}></Lottie>
        </Box>
        <Button onClick={(event) => navigate("/", { replace: true })}>
          Restart
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpSuccess;
