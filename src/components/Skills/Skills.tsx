import React, { useState, useMemo } from "react";
import { Box, Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import DottedSquare from "../DottedSquare/DottedSquare";
import { technologies } from "../../utils/data/technologies";
import SkillCard from "../SkillCard/SkillCard";
import PaginationBar from "../PaginationBar/PaginationBar";

interface Technology {
  name: string;
  description: string;
  image: string;
}

const Skills: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  const [activeTechnology, setActiveTechnology] = useState<Technology>(
    technologies[0]
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const technologiesPerPage: number = isDesktop ? 9 : 6;
  const indexOfLastTechnology: number = currentPage * technologiesPerPage;
  const indexOfFirstTechnology: number =
    indexOfLastTechnology - technologiesPerPage;
  const { name, description } = activeTechnology;

  const totalPages: number = useMemo(
    () => Math.ceil(technologies.length / technologiesPerPage),
    [technologies.length, technologiesPerPage]
  );

  const handlePageClick = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleTechnologyClick = (technology: Technology): void => {
    setActiveTechnology(technology);
  };

  return (
    <Flex
      bg={`mode.${colorMode}.secondary`}
      id="skills"
      color={`mode.${colorMode}.text`}
      pb={isDesktop ? 10 : 0}
      pt={isDesktop ? "10vh" : 0}
      // mb={isDesktop ? 0 : 24}
      justifyContent="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: isDesktop ? "50%" : "0",
        background: `mode.${colorMode}.background`,
        zIndex: 1,
      }}
    >
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        maxW="1100px"
        zIndex={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          pt={isDesktop ? 0 : "14vh"}
          px={5}
          pb={isDesktop ? 0 : 5}
          textAlign={isDesktop ? "left" : "center"}
          width={isDesktop ? "48%" : "100%"}
          position="relative"
          bg={isDesktop ? "transparent" : `mode.${colorMode}.background`}
        >
          <DottedSquare
            width="200px"
            height="160px"
            left="-50%"
            top={isDesktop ? "0" : "-0px"}
          />
          <Heading level="h3" mb={isDesktop ? 5 : 10}>
            Skills
          </Heading>
          <Flex
            flexDirection="column"
            fontSize="xl"
            fontFamily="secondary"
            textAlign="left"
          >
            <Text
              display="inline"
              borderBottom="1px solid"
              borderBottomColor={`mode.${colorMode}.text`}
              fontSize="xl"
              mb={5}
            >
              {name}
            </Text>
            <Text fontSize="md" h="150px">
              {description}
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt={isDesktop ? 0 : 10}
          width={isDesktop ? "50%" : "100%"}
          px={2}
          pt={isDesktop ? 0 : 5}
          justifyContent="space-around"
          flexWrap="wrap"
          ml={isDesktop ? 20 : 0}
          position="relative"
          marginTop={isDesktop ? 10 : 0}
        >
          {technologies
            .slice(indexOfFirstTechnology, indexOfLastTechnology)
            .map((technology: Technology, index: number) => (
              <SkillCard
                key={index}
                technology={technology}
                isActive={activeTechnology === technology}
                onClick={() => handleTechnologyClick(technology)}
              />
            ))}

          <PaginationBar
            totalPages={totalPages}
            currentPage={currentPage}
            isDesktop={isDesktop}
            handlePageClick={handlePageClick}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
