import {
  Box,
  Center,
  VStack,
  useColorMode,
  Switch,
  HStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";

interface SignUpLayoutProps {
  children: React.ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box padding={4}>
      <VStack spacing={4}>
        <HStack p={2} width="100%" justifyContent="space-between">
          <Heading>Product Logo</Heading>
          <Switch onChange={toggleColorMode}>
            {colorMode === "light" ? "Light" : "Dark"}
          </Switch>
        </HStack>
        <Center>{children}</Center>
      </VStack>
    </Box>
  );
};

export default SignUpLayout;
