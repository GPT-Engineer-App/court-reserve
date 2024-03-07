import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex bg="gray.100" p={4} justifyContent="center" borderBottom="1px" borderColor="gray.200">
      <Box mx={2}>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
      </Box>
      <Box mx={2}>
        <Link as={RouterLink} to="/calendar" px={2}>
          Calendar
        </Link>
      </Box>
      <Box mx={2}>
        <Link as={RouterLink} to="/login" px={2}>
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
