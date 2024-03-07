import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Login() {
  return (
    <Box p={4}>
      <VStack spacing={4} align="flex-start">
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Button width="full" mt={4} type="submit">
          Sign In
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
