import React from "react";
import {
  Box,
  Spinner,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, useNavigation } from "react-router-dom";
import { useSignUpState } from "src/contexts/signUpStateContext";

const SignUpConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { state: navState } = useNavigation();
  const { signUpState, setSignUpState } = useSignUpState();

  return (
    <Box>
      {navState === "loading" ? (
        <Spinner size="xl" />
      ) : (
        <VStack spacing={6}>
          <Heading as="h1">Confirmation</Heading>
          <Text>Make sure everything looks ok.</Text>
          <List>
            <ListItem>
              First Name: {signUpState.firstName}
            </ListItem>
            <ListItem>
              Email: {signUpState.email}
            </ListItem>
            <ListItem>
              Password: {signUpState.password?.split('').map((x) => `•`)}
            </ListItem>
            <ListItem>
              Favorite Color: {signUpState.favoriteColor}
            </ListItem>
            <ListItem>
              Accepted Terms and Conditions: {signUpState.agreeTermsAndConditions}
            </ListItem>
          </List>
        </VStack>
      )}
    </Box>
  );
};

export default SignUpConfirmation;
