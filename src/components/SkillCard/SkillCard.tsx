import React from "react";
import {
  Flex,
  Text,
  Image,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
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
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Flex
      as="a"
      href={`#${t("navigation.skills.link")}`}
      width={isDesktop ? "30%" : "45%"}
      mb={8}
      textAlign="center"
      p={2}
      flexDirection="column"
      alignItems="center"
      bg={`mode.${colorMode}.background`}
      borderRadius={10}
      border="1px solid transparent"
      borderColor={isActive ? `mode.${colorMode}.text` : "transparent"}
      color={isActive ? `mode.${colorMode}.text` : `mode.${colorMode}.gray`}
      cursor="pointer"
      shadow={isActive ? "lg" : "none"}
      onClick={onClick}
      _hover={{
        color: `mode.${colorMode}.text`,
        borderColor: `mode.${colorMode}.text`,
        shadow: "lg",
      }}
    >
      <Image
        src={technology.image}
        alt={technology.name}
        width={isDesktop ? "80%" : "75%"}
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
