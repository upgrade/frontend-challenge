import {
  Box,
  Heading,
  VStack,
  Text,
  FormLabel,
  FormControl,
  Input,
  FormHelperText,
  HStack,
  Button,
  FormErrorIcon,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpState } from "../contexts/signUpStateContext";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignUpStartInputs {
  firstName: string;
  email: string;
  password: string;
}

const SignUpStart: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { signUpState, setSignUpState } = useSignUpState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpStartInputs>({ criteriaMode: "all" });

  const passwordUppercase = (input: string) => /[A-Z]/.test(input);
  const passwordLowercase = (input: string) => /[a-z]/.test(input);
  const passwordNumber = (input: string) => /[0-9]/.test(input);
  const passwordSpecial = (input: string) =>
    /[~`! @#$%^&*()_\-+={[}\]|\:;"'<,>.?/]/.test(input);

  const onSubmit: SubmitHandler<SignUpStartInputs> = (data) => {
    // confirm validation
    console.log(data);

    setSignUpState({
      ...signUpState,
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    });
    navigate("/more-info");
  };

  return (
    <Box>
      <VStack spacing={6}>
        <Heading as="h1">Sign Up</Heading>
        <Text>Lets get started with some basic information.</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && errors.firstName.types?.required && (
                <FormErrorMessage>First Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email", { required: true })} />
              {errors.email && errors.email.types?.required && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    validate: {
                      passwordUppercase,
                      passwordLowercase,
                      passwordNumber,
                      passwordSpecial,
                    },
                  })}
                />
                <InputRightElement>
                  <Button
                    p={1}
                    mr={1}
                    size="sm"
                    onClick={(event) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                <Card width="100%">
                  <CardHeader>
                    <Text as="label">Passwords must:</Text>
                  </CardHeader>
                  <CardBody>
                    <ul>
                      <li>Be at least 8 characters long</li>
                      <li>Contain a uppercase letter</li>
                      <li>Contain a lowercase letter</li>
                      <li>Contain a number</li>
                      <li>Contain a special character</li>
                    </ul>
                  </CardBody>
                </Card>
              </FormErrorMessage>
            </FormControl>
            <HStack>
              <Button type="submit" variant="solid">
                Next
              </Button>
            </HStack>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default SignUpStart;
