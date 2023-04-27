import * as React from "react";
import { Flex, IconButton, Text, Box } from "@chakra-ui/react";
import { Link } from "gatsby";
import Logo from "../Logo/Logo";
import { GoMail } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <Box color="white" bgColor="dark" p={5} borderBottom="1px solid white">
      <Flex justifyContent="space-between" maxWidth="1300px" mx="auto">
        <Logo />
        <IconButton
          aria-label="expand menu"
          icon={<HiOutlineMenuAlt3 />}
          fontSize="30"
          sx={{
            "@media (min-width: 1100px)": {
              display: "none",
            },
          }}
        />
        <Box
          sx={{
            "@media (max-width: 1100px)": {
              display: "none",
            },
          }}
        >
          <Link to="/contact">
            <Flex alignItems="center">
              <IconButton
                aria-label="get in touch"
                icon={<GoMail />}
                mr={1}
                fontSize="25"
              />
              <Text fontFamily="secondary">GET IN TOUCH</Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
