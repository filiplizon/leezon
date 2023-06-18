import * as React from "react";
import { Box, Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { Project } from "../../utils/types/project";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { slideFromBottom } from "../../utils/animations";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useEffect, useRef } from "react";
import { lastSingleLetterToNewLine } from "../../utils/helpers";

const ProjectCard: React.FC<Project> = ({ title }) => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const buttonWidth = "48%";
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      lastSingleLetterToNewLine(element);
    }
  }, [t]);

  const data = useStaticQuery(graphql`
    query ProjectImage {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const projectImage = data.allFile.edges
    .filter((edge: any) => {
      const path = edge.node.relativePath;
      return path === `projects/${title}.webp`;
    })
    .map((edge: any) => getImage(edge.node.childImageSharp.gatsbyImageData));

  return (
    <Flex
      ref={ref}
      flexDirection="column"
      bg={`mode.${colorMode}.background`}
      pb={5}
      color={`mode.${colorMode}.text`}
      fontFamily="secondary"
      borderRadius={10}
      w={isDesktop ? "31%" : "90%"}
      zIndex="5"
      position="relative"
      mb={isDesktop ? 0 : 10}
      shadow="md"
      transform={isDesktop ? "translateY(0)" : "translateY(50%)"}
      animation={
        inView && !isDesktop
          ? `${slideFromBottom} .5s ease-in-out forwards`
          : "none"
      }
    >
      <Box
        height="50%"
        borderBottom="1px solid"
        borderBottomColor={`mode.${colorMode}.gray`}
        borderTopRadius={10}
        mb={5}
      >
        {projectImage[0] && (
          <GatsbyImage
            image={projectImage[0]}
            alt={`screen from ${title}`}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />
        )}
      </Box>
      <Box px={5}>
        <Heading level="h4" fontSize="xl" mb={2}>
          {t(`projects.${title}.title`)}
        </Heading>
        <Text
          my={2}
          color={`mode.${colorMode}.gray`}
          fontSize={isDesktop ? 14 : 16}
        >
          {t(`projects.${title}.stack`)}
        </Text>
        <Text
          ref={textRef}
          fontFamily="secondary"
          h={isDesktop ? "65px" : "unset"}
          fontSize={isDesktop ? 14 : 16}
          dangerouslySetInnerHTML={{
            __html: t(`projects.${title}.description`) as string,
          }}
        />
        <Flex width="100%" mt={5} justifyContent="space-between">
          <Button
            name={t("projects.buttons.live")}
            isLink
            href={t(`projects.${title}.liveURL`) as string}
            py={2}
            width={buttonWidth}
          >
            {t("projects.buttons.live")}
          </Button>
          <Button
            name={t("projects.buttons.github")}
            isLink
            href={t(`projects.${title}.githubURL`) as string}
            py={2}
            width={buttonWidth}
          >
            {t("projects.buttons.github")}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
