import * as React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { Project } from "../../utils/types/project";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { slideFromBottom } from "../../utils/animations";

const ProjectCard: React.FC<Project> = ({
  title,
  image,
  technologies,
  description,
  liveURL,
  githubURL,
  width,
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const buttonWidth = "48%";

  return (
    <Flex
      ref={ref}
      flexDirection="column"
      bg={`mode.${colorMode}.background`}
      pb={5}
      color={`mode.${colorMode}.text`}
      fontFamily="secondary"
      borderRadius={10}
      w={isDesktop ? width || "31%" : "90%"}
      zIndex="5"
      position="relative"
      mb={isDesktop ? 0 : 10}
      shadow="md"
      animation={
        inView ? `${slideFromBottom} .5s ease-in-out forwards` : "none"
      }
    >
      <Image
        mb={5}
        borderBottom="1px solid"
        borderBottomColor={`mode.${colorMode}.gray`}
        borderTopRadius={10}
        height="50%"
        src={image}
      />
      <Box px={5}>
        <Heading level="h4" fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Text
          my={2}
          color={`mode.${colorMode}.gray`}
          fontSize={isDesktop ? 14 : 16}
        >
          {technologies}
        </Text>
        <Text
          fontFamily="secondary"
          h={isDesktop ? "65px" : "unset"}
          fontSize={isDesktop ? 14 : 16}
        >
          {description}
        </Text>
        <Flex width="100%" mt={5} justifyContent="space-between">
          <Button isLink href={liveURL} py={2} width={buttonWidth}>
            {t("projects.buttons.live")}
          </Button>
          <Button isLink href={githubURL} py={2} width={buttonWidth}>
            {t("projects.buttons.github")}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
