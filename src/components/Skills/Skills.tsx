import React, { useState, useMemo } from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import DottedSquare from "../DottedSquare/DottedSquare";
import { technologies } from "../../utils/data/technologies";
import SkillCard from "../SkillCard/SkillCard";

interface Technology {
  name: string;
  description: string;
  image: string;
}

const Skills: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
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
      bg="dark"
      id="skills"
      color="white"
      pb={isDesktop ? 10 : 0}
      mb={isDesktop ? 0 : 24}
      justifyContent="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        left: 0,
        height: "100%",
        width: "50%",
        background: "lightdark",
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
          bg="lightdark"
          pt={isDesktop ? 0 : "14vh"}
          px={5}
          pb={isDesktop ? 0 : 5}
          textAlign={isDesktop ? "left" : "center"}
          width={isDesktop ? "48%" : "100%"}
          position="relative"
        >
          <DottedSquare
            width="200px"
            height="200px"
            left="-50%"
            top={isDesktop ? "0" : "-40px"}
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
              borderBottom="1px solid white"
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
          bg="dark"
          mt={isDesktop ? 0 : 10}
          width={isDesktop ? "50%" : "100%"}
          px={2}
          pt={isDesktop ? 0 : 5}
          justifyContent="space-around"
          flexWrap="wrap"
          ml={isDesktop ? 10 : 0}
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

          <Flex>
            {Array.from({ length: totalPages }, (_, i: number) => (
              <Box
                key={i}
                as="button"
                borderRadius="full"
                bg={i + 1 === currentPage ? "white" : "transparent"}
                border={i + 1 === currentPage ? "none" : "1px solid white"}
                width={isDesktop ? "10px" : "20px"}
                height={isDesktop ? "10px" : "20px"}
                mt="10px"
                mx="5px"
                onClick={() => handlePageClick(i + 1)}
                cursor="pointer"
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
