import React, { FormEvent, useEffect, useState } from "react";
import {
  Box,
  Spinner,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useNavigation } from "react-router-dom";
import { useSignUpState } from "src/contexts/signUpStateContext";
import request from "src/utils/requestClient";

const SignUpConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { state: navState } = useNavigation();
  const { signUpState } = useSignUpState();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!signUpState.firstName || !signUpState.email || !signUpState.password) {
      navigate("/");
    }

    if (!signUpState.favoriteColor || !signUpState.agreeTermsAndConditions) {
      navigate("/more-info");
    }
  }, []);

  const submitSignUp = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await request.post("submit", {
        json: {
          name: signUpState.firstName,
          email: signUpState.email,
          password: signUpState.password,
          color: signUpState.favoriteColor,
          terms: signUpState.agreeTermsAndConditions,
        },
      });
      navigate("/success");
    } catch (error) {
      console.log(error);
      navigate("/error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      {navState === "loading" ? (
        <Spinner size="xl" />
      ) : (
        <Box
          as="form"
          data-testid="confirmation-form"
          width="100%"
          onSubmit={submitSignUp}
        >
          <VStack spacing={6}>
            <Heading as="h1">Confirmation</Heading>
            <Text>Make sure everything looks ok.</Text>
            <List fontSize="xl" spacing={4}>
              <ListItem>
                <HStack wrap="wrap">
                  <Box fontWeight="light">First Name:</Box>
                  <Box data-testid="first-name-value">
                    {signUpState.firstName}
                  </Box>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack wrap="wrap">
                  <Box fontWeight="light">Email:</Box>
                  <Box data-testid="email-value">{signUpState.email}</Box>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack wrap="wrap">
                  <Box fontWeight="light">Password:</Box>
                  <Box data-testid="password-value">
                    {showPassword
                      ? signUpState.password
                      : signUpState.password?.split("").map((x) => `•`)}
                  </Box>
                  <Button
                    data-testid="show-password-btn"
                    size="sm"
                    variant="outline"
                    onClick={(event) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack wrap="wrap">
                  <Box fontWeight="light">Favorite Color:</Box>
                  <Box data-testid="color-value">
                    {signUpState.favoriteColor}
                  </Box>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack wrap="wrap">
                  <Box fontWeight="light">Accepted Terms and Conditions: </Box>
                  <Box data-testid="terms-value">
                    {signUpState.agreeTermsAndConditions
                      ? "Accepted"
                      : "Declined"}
                  </Box>
                </HStack>
              </ListItem>
            </List>
            <HStack justifyContent="space-between" width="100%">
              <Button
                type="button"
                variant="outline"
                colorScheme="green"
                onClick={(event) => navigate("/more-info")}
              >
                Back
              </Button>
              <Button
                data-testid="submit-btn"
                type="submit"
                variant="solid"
                colorScheme="green"
                isDisabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Spinner data-testid="submit-btn-spinner" />
                ) : (
                  "Submit"
                )}
              </Button>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default SignUpConfirmation;
