import { Box, Container, Heading, Stack, VStack, useToast, Button } from "@chakra-ui/react";
import { useState } from "react";

const Calendar = () => {
  const toast = useToast();
  const [timeSlots, setTimeSlots] = useState([
    { time: "9 AM - 10 AM", isBooked: false },
    { time: "10 AM - 11 AM", isBooked: true },
    { time: "11 AM - 12 PM", isBooked: false },
  ]);

  const bookTimeSlot = (index) => {
    let newTimeSlots = [...timeSlots];
    newTimeSlots[index].isBooked = true;
    setTimeSlots(newTimeSlots);
    toast({
      title: "Booking Confirmed!",
      description: `You have booked the time slot: ${newTimeSlots[index].time}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Availability Calendar
        </Heading>
        <Box border="1px" borderColor="gray.200">
          <Stack p={4}>
            {timeSlots.map((slot, index) => (
              <Box key={index} p={2} bg={slot.isBooked ? "red.100" : "green.100"} cursor={slot.isBooked ? "not-allowed" : "pointer"} onClick={() => !slot.isBooked && bookTimeSlot(index)}>
                {slot.time} {slot.isBooked ? "(Booked)" : "(Available)"}
                {!slot.isBooked && (
                  <Button ml={4} colorScheme="teal" size="sm">
                    Book Now
                  </Button>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Calendar;
