import * as React from "react";
import { Link } from "gatsby";
import { Box } from "@chakra-ui/react";

interface SocialLinkProps {
  link: string;
  isDesktop: boolean;
  icon: any;
  name: string;
}

const SocialLink = ({ link, isDesktop, icon, name }: SocialLinkProps) => {
  return (
    <Link to={link} target="_blank" aria-label={name}>
      <Box
        fontSize={isDesktop ? 30 : 35}
        transition="transform 0.2s"
        _hover={{
          transform: isDesktop ? "translateY(-10%)" : "none",
        }}
      >
        {icon}
      </Box>
    </Link>
  );
};

export default SocialLink;
