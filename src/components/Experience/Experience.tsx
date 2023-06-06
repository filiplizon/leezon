import React from "react";
import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Heading from "../Heading/Heading";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { getExperience } from "../../utils/data/experience";

const Experience = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const experience = getExperience(t);

  return (
    <Flex
      id={t("experience.id") as string}
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      bg={`mode.${colorMode}.secondary`}
      pt="14vh"
      pb={isDesktop ? "10vh" : 0}
      px={5}
      textAlign="center"
      position="relative"
    >
      <Heading color={`mode.${colorMode}.text`} level="h3">
        {t("experience.workExperience.heading")}
      </Heading>
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent="space-around"
        alignItems="center"
        my={10}
        maxWidth="1100px"
      >
        {experience.work.map(data => (
          <ExperienceCard key={data.title} {...data} />
        ))}
      </Flex>
      <Heading color={`mode.${colorMode}.text`} level="h3" mb={10}>
        {t("experience.education.heading")}
      </Heading>
      <ExperienceCard
        title={experience.education.title}
        company={experience.education.company}
        date={experience.education.date}
        description={experience.education.description}
        width="35%"
      />
    </Flex>
  );
};

export default Experience;
