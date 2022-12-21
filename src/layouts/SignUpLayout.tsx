import { Box, Center, VStack } from "@chakra-ui/react";
import React from "react";

interface SignUpLayoutProps {
  children: React.ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => {
  return (
    <Box padding={4}>
      <VStack spacing={4}>
        <Center>Company Logo</Center>
        <Center>
          {children}
        </Center>
      </VStack>
    </Box>
  );
};

export default SignUpLayout;
