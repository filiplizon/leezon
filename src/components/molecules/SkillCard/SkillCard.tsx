import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";
import { Flex, Text, useMediaQuery, useColorMode, Box } from "@chakra-ui/react";

interface SkillCardProps {
  skill: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillCard = ({ skill, isActive, onClick }: SkillCardProps) => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query SkillIcon {
      allFile(filter: { relativePath: { regex: "/skills/" } }) {
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
    .filter((edge: any) => edge.node.relativePath === `skills/${skill}.webp`)
    .map((edge: any) => getImage(edge.node.childImageSharp.gatsbyImageData));

  return (
    <Flex
      as="a"
      href={`#${t("navigation.skills.link")}`}
      width={isDesktop ? "30%" : "45%"}
      p={2}
      mb={8}
      textAlign="center"
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={`mode.${colorMode}.background`}
      color={isActive ? `mode.${colorMode}.text` : `mode.${colorMode}.gray`}
      borderRadius={10}
      border="1px solid"
      borderColor={isActive ? `mode.${colorMode}.text` : "transparent"}
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
          <GatsbyImage image={skillIcon[0]} alt={`${skill} icon`} />
        )}
      </Box>
      <Text fontFamily="secondary" mt={2}>
        {t(`skills.${skill}.name`)}
      </Text>
    </Flex>
  );
};

export default SkillCard;
