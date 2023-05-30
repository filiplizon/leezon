import * as React from "react";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { Project } from "../../utils/types/project";

const ProjectCard: React.FC<Project> = ({
  title,
  image,
  technologies,
  description,
  width,
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const buttonWidth = "48%";

  return (
    <Flex
      flexDirection="column"
      bg="lightdark"
      pb={5}
      color="white"
      fontFamily="secondary"
      borderRadius={10}
      w={isDesktop ? width || "30%" : "90%"}
      zIndex="5"
      position="relative"
      transition="transform .2s"
      mb={isDesktop ? 0 : 10}
      shadow="md"
    >
      <Image mb={5} borderTopRadius={10} height="50%" src={image} />
      <Box px={5}>
        <Heading level="h4" fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Text my={2} color="lightgray" fontSize={14}>
          {technologies}
        </Text>
        <Text fontFamily="secondary" fontSize={14}>
          {description}
        </Text>
        <Flex width="100%" mt={5} justifyContent="space-between">
          <Button isLink href="#" py={2} width={buttonWidth}>
            live
          </Button>
          <Button isLink href="#" py={2} width={buttonWidth}>
            github
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
