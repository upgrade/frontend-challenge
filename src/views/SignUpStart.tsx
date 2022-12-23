import {
  Box,
  Heading,
  VStack,
  Text,
  FormLabel,
  FormControl,
  Input,
  HStack,
  Button,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  IconButton,
  useDisclosure,
  PopoverAnchor,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { useSignUpState } from "src/contexts/signUpStateContext";
import { useForm, SubmitHandler } from "react-hook-form";
import PasswordValidationList from "src/components/SignUpStart/PasswordValidationList";

export interface SignUpStartInputs {
  firstName: string;
  email: string;
  password: string;
}

const SignUpStart: React.FC = () => {
  const navigate = useNavigate();
  const { state: navState } = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { signUpState, setSignUpState } = useSignUpState();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpStartInputs>({ criteriaMode: "all" });

  const passwordUppercase = (input: string) => /[A-Z]/.test(input);
  const passwordLowercase = (input: string) => /[a-z]/.test(input);
  const passwordNumber = (input: string) => /[0-9]/.test(input);
  const passwordSpecial = (input: string) =>
    /[~`! @#$%^&*()_\-+={[}\]|\:;"'<,>.?/]/.test(input);

  const onSubmit: SubmitHandler<SignUpStartInputs> = (data) => {
    setSignUpState({
      ...signUpState,
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    });
    navigate("/more-info");
  };

  useEffect(() => {
    if (signUpState.firstName) {
      setValue("firstName", signUpState.firstName);
    }

    if (signUpState.email) {
      setValue("email", signUpState.email);
    }

    setSignUpState({
      ...signUpState,
      firstName: "",
      email: "",
      password: "",
    });
  }, []);

  return (
    <Box>
      {navState === "loading" ? (
        <Spinner size="xl" />
      ) : (
        <VStack spacing={6}>
          <Heading as="h1">Sign Up</Heading>
          <Text>Lets get started with some basic information.</Text>
          <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
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
                <Input
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && errors.email.types?.required && (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>
                  Password{" "}
                  <Popover isOpen={isOpen} onClose={onClose} placement="auto">
                    <PopoverAnchor>
                      <IconButton
                        onClick={onToggle}
                        aria-label="Show password requirements"
                        height="auto"
                        minW="initial"
                        icon={<InfoIcon />}
                      />
                    </PopoverAnchor>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Passwords must:</PopoverHeader>
                      <PopoverBody>
                        <List>
                          <ListItem>Be at least 8 characters long</ListItem>
                          <ListItem>Contain a uppercase letter</ListItem>
                          <ListItem>Contain a lowercase letter</ListItem>
                          <ListItem>Contain a number</ListItem>
                          <ListItem>Contain a special character</ListItem>
                        </List>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </FormLabel>
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
                      variant="ghost"
                      onClick={(event) => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  <PasswordValidationList errors={errors} />
                </FormErrorMessage>
              </FormControl>
              <HStack width="100%" justifyContent="end">
                <Button type="submit" variant="solid" colorScheme="green">
                  Next
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default SignUpStart;
