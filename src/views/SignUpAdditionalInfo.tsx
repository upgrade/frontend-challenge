import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { useSignUpState } from "src/contexts/signUpStateContext";
import { useForm, SubmitHandler } from "react-hook-form";

export interface SignUpAdditionalInfoInputs {
  favoriteColor: string;
  agreeTermsAndConditions: boolean;
}

const SignUpAdditionalInfo: React.FC = () => {
  const navigate = useNavigate();
  const { signUpState, setSignUpState } = useSignUpState();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpAdditionalInfoInputs>({ defaultValues: { agreeTermsAndConditions: false }});
  const colors = useLoaderData() as string[];

  useEffect(() => {
    if (!signUpState.firstName || !signUpState.email || !signUpState.password) {
      navigate("/");
    }

    if (signUpState.favoriteColor) {
      setValue("favoriteColor", signUpState.favoriteColor);
    }
  }, []);

  const onSubmit: SubmitHandler<SignUpAdditionalInfoInputs> = (data) => {
    setSignUpState({
      ...signUpState,
      favoriteColor: data.favoriteColor,
      agreeTermsAndConditions: data.agreeTermsAndConditions
    });
    navigate("/confirmation");
  };

  return (
    <Box>
      <VStack spacing={6}>
        <Heading as="h1">Sign Up</Heading>
        <Text>Lets get started with some basic information.</Text>
        <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.favoriteColor}>
              <FormLabel>Choose your favorite color</FormLabel>
              <Select
                placeholder="Choose a color"
                {...register("favoriteColor", { required: true })}
              >
                { colors.map((color) => <option value={color} key={color}>{color}</option>) }
              </Select>
              {errors.favoriteColor && errors.favoriteColor.type === "required" && (
                <FormErrorMessage>Favorite color is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.agreeTermsAndConditions}>
              <HStack>
                <Checkbox {...register("agreeTermsAndConditions", { required: true })}>
                  I Agree to <Link to="#">Terms and Conditions</Link>
                </Checkbox>
              </HStack>
              <FormErrorMessage>You must agree to the terms and conditions.</FormErrorMessage>
            </FormControl>
            <HStack justifyContent="space-between" width="100%">
              <Button type="button" variant="outline" colorScheme="green" onClick={(event) => navigate('/')}>Back</Button>
              <Button type="submit" variant="solid" colorScheme="green">
                Next
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default SignUpAdditionalInfo;
