import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useToast, VStack, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleBooking = () => {
    // This is a placeholder for the booking logic
    toast({
      title: "Booking Confirmed!",
      description: "Your tennis court has been booked.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Tennis Court Booking
        </Heading>

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1551773188-0801da12ddae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwwfHx8fDE3MDk4NDQ3MTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tennis Court" />
          </Box>
          <Box flex="2">
            <Stack spacing={4} as="form">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="John Doe" type="text" icon={<FaUser />} />
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>Date</FormLabel>
                <Input type="date" icon={<FaCalendarAlt />} />
              </FormControl>
              <FormControl id="location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input placeholder="123 Tennis Court St." type="text" icon={<FaMapMarkerAlt />} />
              </FormControl>
              <Button colorScheme="teal" size="lg" onClick={handleBooking}>
                Book Now
              </Button>
            </Stack>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
