import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { getExperience } from "../../utils/data/experience";

const Experience = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const experience = getExperience(t);

  return (
    <Flex
      as="section"
      id={t("experience.id") as string}
      minH="100vh"
      pt="14vh"
      pb={isDesktop ? "10vh" : 0}
      px={5}
      position="relative"
      direction="column"
      alignItems="center"
      bg={`mode.${colorMode}.secondary`}
      textAlign="center"
    >
      <Heading level="h3">{t("experience.workExperience.heading")}</Heading>
      <Flex
        maxWidth="1100px"
        mt={10}
        mb={isDesktop ? 10 : 0}
        direction={isDesktop ? "row" : "column"}
        justifyContent="space-around"
        alignItems="center"
      >
        {experience.work.map(data => (
          <ExperienceCard key={data.title} {...data} />
        ))}
      </Flex>
      <Heading level="h3" mb={10}>
        {t("experience.education.heading")}
      </Heading>
      <ExperienceCard
        school={experience.education.school}
        degree={experience.education.degree}
        date={experience.education.date}
        description={experience.education.description}
        width="40%"
      />
    </Flex>
  );
};

export default Experience;
