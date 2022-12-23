import { Box, Center, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <Box role="alert" padding={10}>
      <Center>
        <VStack>
          <Text>Something went wrong:</Text>
          <Text as="pre">{error.message}</Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default ErrorFallback;
