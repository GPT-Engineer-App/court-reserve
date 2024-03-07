import { Box, Container, Heading, Stack, VStack } from "@chakra-ui/react";

const Calendar = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Availability Calendar
        </Heading>
        <Box border="1px" borderColor="gray.200">
          <Stack p={4}>
            {}
            <Box p={2} bg="green.100">
              9 AM - 10 AM (Available)
            </Box>
            <Box p={2} bg="red.100">
              10 AM - 11 AM (Booked)
            </Box>
            <Box p={2} bg="green.100">
              11 AM - 12 PM (Available)
            </Box>
            {}
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Calendar;
