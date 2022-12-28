import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Box p={16}>
      <Center>
        <Heading as="h1">Page Not Found</Heading>
      </Center>
    </Box>
  );
};

export default NotFound;
