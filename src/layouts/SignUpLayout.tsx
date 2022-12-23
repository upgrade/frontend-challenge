import {
  Box,
  Center,
  VStack,
  useColorMode,
  Switch,
  HStack,
  Heading,
  Link,
  Card,
  CardBody,
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
        <HStack wrap="wrap" p={2} width="100%" justifyContent="space-between">
          <Heading>
            <Link href="/">Product Logo</Link>
          </Heading>
          <Switch onChange={toggleColorMode}>
            {colorMode === "light" ? "Light" : "Dark"}
          </Switch>
        </HStack>
        <Center>
          <Card>
            <CardBody p={8}>{children}</CardBody>
          </Card>
        </Center>
      </VStack>
    </Box>
  );
};

export default SignUpLayout;
