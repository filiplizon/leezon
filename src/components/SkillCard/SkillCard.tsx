import React from "react";
import { Flex, Text, useMediaQuery, useColorMode, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SkillCard = ({
  technology,
  isActive,
  onClick,
}: {
  technology: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query SkillIcon {
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

  const skillIcon = data.allFile.edges
    .filter((edge: any) => {
      const path = edge.node.relativePath;
      return path === `skills/${technology}.webp`;
    })
    .map((edge: any) => getImage(edge.node.childImageSharp.gatsbyImageData));

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
      <Box width={isDesktop ? "100px" : "140px"}>
        {skillIcon.length > 0 && (
          <GatsbyImage image={skillIcon[0]} alt={`${technology} icon`} />
        )}
      </Box>
      <Text fontFamily="secondary" mt={2}>
        {t(`skills.${technology}.name`)}
      </Text>
    </Flex>
  );
};

export default SkillCard;
