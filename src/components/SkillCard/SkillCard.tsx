import React from "react";
import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";

interface Technology {
  name: string;
  description: string;
  image: string;
}

const SkillCard = ({
  technology,
  isActive,
  onClick,
}: {
  technology: Technology;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const activeStyle = isActive ? "lightdark" : "dark";
  const grayscaleStyle = isActive ? "0%" : "100%";

  return (
    <Flex
      width={isDesktop ? "30%" : "45%"}
      mb={8}
      textAlign="center"
      p={2}
      flexDirection="column"
      alignItems="center"
      bg={activeStyle}
      borderRadius={10}
      filter={`grayscale(${grayscaleStyle})`}
      _hover={{
        bg: "lightdark",
        filter: "grayscale(0%)",
        color: "white",
      }}
      color={isActive ? "white" : "gray"}
      cursor="pointer"
      shadow="lg"
      onClick={onClick}
    >
      <Image
        src={technology.image}
        alt={technology.name}
        width={isDesktop ? "75%" : "unset"}
        borderRadius={10}
        zIndex={2}
      />
      <Text fontFamily="secondary" mt={2}>
        {technology.name}
      </Text>
    </Flex>
  );
};

export default SkillCard;
