import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useLastSingleLetterToNewLine } from "../../utils/helpers/hooks";
import { slideFromBottom } from "../../utils/animations";

const ProjectCard = ({ title }: { title: string }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const buttonWidth = "48%";

  const textRef = useRef<HTMLDivElement>(null);
  useLastSingleLetterToNewLine(textRef);

  const data = useStaticQuery(graphql`
    query ProjectImage {
      allFile(filter: { relativePath: { regex: "/projects/" } }) {
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
    .filter((edge: any) => edge.node.relativePath === `projects/${title}.webp`)
    .map((edge: any) => getImage(edge.node.childImageSharp.gatsbyImageData));

  return (
    <Flex
      ref={ref}
      w={isDesktop ? "31%" : "90%"}
      pb={5}
      mb={isDesktop ? 0 : 10}
      position="relative"
      direction="column"
      bg={`mode.${colorMode}.background`}
      color={`mode.${colorMode}.text`}
      fontFamily="secondary"
      borderRadius={10}
      zIndex="5"
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
        mb={5}
        borderBottom="1px solid"
        borderBottomColor={`mode.${colorMode}.gray`}
        borderTopRadius={10}
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
          h={isDesktop ? "65px" : "unset"}
          fontFamily="secondary"
          fontSize={isDesktop ? 14 : 16}
          dangerouslySetInnerHTML={{
            __html: t(`projects.${title}.description`) as string,
          }}
        />
        <Flex width="100%" mt={5} justifyContent="space-between">
          <Button
            name={t("projects.buttons.live")}
            href={t(`projects.${title}.liveURL`) as string}
            isLink
            width={buttonWidth}
            py={2}
          >
            {t("projects.buttons.live")}
          </Button>
          <Button
            name={t("projects.buttons.github")}
            href={t(`projects.${title}.githubURL`) as string}
            isLink
            width={buttonWidth}
            py={2}
          >
            {t("projects.buttons.github")}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
