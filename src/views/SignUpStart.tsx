import { Box, Heading, VStack, Text, FormLabel, FormControl, Input, FormHelperText, HStack, Button } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const SignUpStart: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    console.log('submitting');
    navigate('/more-info');
    event.preventDefault();
  };

  return (
    <Box>
      <VStack spacing={6}>
        <Heading as="h1">Sign Up</Heading>
        <Text>Lets get started with some basic information.</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
              <FormHelperText>
                Password must be:
                <ul>
                  <li>long</li>
                  <li>strong</li>
                </ul>
              </FormHelperText>
            </FormControl>
            <HStack>
              <Button type="submit" variant="solid">Next</Button>
            </HStack>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default SignUpStart;
