import React from "react";
import {
  Flex,
  Text,
  Image,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";

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
  const { colorMode } = useColorMode();
  const activeStyle = isActive
    ? `mode.${colorMode}.background`
    : `mode.${colorMode}.secondary`;
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
        bg: `mode.${colorMode}.background`,
        filter: "grayscale(0%)",
        color: `mode.${colorMode}.text`,
      }}
      color={isActive ? `mode.${colorMode}.text` : `mode.${colorMode}.gray`}
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
