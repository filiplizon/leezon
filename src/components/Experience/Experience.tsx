import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import { experienceData } from "../../utils/data/experience";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  return (
    <Flex
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      bg={`mode.${colorMode}.secondary`}
      id="experience"
      pt="14vh"
      pb={isDesktop ? "10vh" : 0}
      position="relative"
    >
      <Heading color={`mode.${colorMode}.text`} level="h3">
        Work Experience
      </Heading>
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent="space-around"
        alignItems="center"
        my={10}
        maxWidth="1100px"
      >
        {experienceData.work.map(data => (
          <ExperienceCard key={data.title} {...data} />
        ))}
      </Flex>
      <Heading color={`mode.${colorMode}.text`} level="h3" mb={10}>
        Education
      </Heading>
      <ExperienceCard
        title={experienceData.education.title}
        company={experienceData.education.company}
        date={experienceData.education.date}
        description={experienceData.education.description}
        width="35%"
      />
    </Flex>
  );
};

export default Experience;
