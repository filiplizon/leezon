import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import { experienceData } from "../../utils/data/experience";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      bg="lightdark"
      id="experience"
      mt="12vh"
      pt="14vh"
      pb={24}
      position="relative"
    >
      <Heading level="h3">Work Experience</Heading>
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent="space-around"
        my={10}
        maxWidth="1100px"
      >
        {experienceData.work.map(data => (
          <ExperienceCard key={data.title} {...data} />
        ))}
      </Flex>
      <Heading level="h3" mb={10}>
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
