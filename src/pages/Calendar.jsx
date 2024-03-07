import { Box, Container, Heading, Stack, VStack, useToast, Button } from "@chakra-ui/react";
import { useState } from "react";

const Calendar = () => {
  const toast = useToast();
  const [timeSlots, setTimeSlots] = useState([
    { time: "9 AM - 10 AM", isBooked: false, name: "" },
    { time: "10 AM - 11 AM", isBooked: true, name: "John Doe" },
    { time: "11 AM - 12 PM", isBooked: false, name: "" },
  ]);

  const toggleBooking = (index, isCanceling = false) => {
    const name = isCanceling ? "" : prompt("Please enter your name for the booking:");
    const newTimeSlots = [...timeSlots];
    if (!isCanceling) {
      newTimeSlots[index].name = name;
    }
    newTimeSlots[index].isBooked = !isCanceling;
    setTimeSlots(newTimeSlots);
    const action = isCanceling ? "canceled" : "booked";
    const status = isCanceling ? "info" : "success";
    const title = isCanceling ? "Booking Canceled!" : "Booking Confirmed!";
    toast({
      title: title,
      description: `You have ${action} the time slot: ${newTimeSlots[index].time}`,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  const cancelTimeSlot = (index) => toggleBooking(index, true);
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Availability Calendar
        </Heading>
        <Box border="1px" borderColor="gray.200">
          <Stack p={4}>
            {timeSlots.map((slot, index) => (
              <Box key={index} p={2} bg={slot.isBooked ? "red.100" : "green.100"}>
                {slot.time} {slot.isBooked ? `(Booked by ${slot.name})` : "(Available)"}
                {slot.isBooked && (
                  <Button ml={4} colorScheme="red" size="sm" onClick={() => cancelTimeSlot(index)}>
                    Cancel
                  </Button>
                )}
                {!slot.isBooked && (
                  <Button ml={4} colorScheme="teal" size="sm" onClick={() => toggleBooking(index, false)}>
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
