import React, { useState, useMemo, useEffect } from "react";
import { Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import DottedSquare from "../DottedSquare/DottedSquare";
import { getTechnologies } from "../../utils/data/technologies";
import SkillCard from "../SkillCard/SkillCard";
import PaginationBar from "../PaginationBar/PaginationBar";
import { useTranslation } from "react-i18next";

interface Technology {
  name: string;
  description: string;
  image: string;
}

const Skills: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const technologies = getTechnologies(t);
  const [activeTechnology, setActiveTechnology] = useState<Technology>(
    technologies[0]
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const technologiesPerPage: number = isDesktop ? 9 : 6;
  const indexOfLastTechnology: number = currentPage * technologiesPerPage;
  const indexOfFirstTechnology: number =
    indexOfLastTechnology - technologiesPerPage;

  const totalPages: number = useMemo(
    () => Math.ceil(technologies.length / technologiesPerPage),
    [technologies.length, technologiesPerPage]
  );

  useEffect(() => {
    const updatedActiveTechnology = technologies.find(
      technology => technology.name === activeTechnology.name
    );
    setActiveTechnology(updatedActiveTechnology || technologies[0]);
  }, [t]);

  const handlePageClick = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleTechnologyClick = (technology: Technology): void => {
    setActiveTechnology(technology);
  };

  return (
    <Flex
      id={t("skills.id") as string}
      bg={`mode.${colorMode}.secondary`}
      color={`mode.${colorMode}.text`}
      pb={isDesktop ? 10 : 0}
      pt={isDesktop ? "11vh" : 0}
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
        pb={10}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          pt={isDesktop ? 0 : "14vh"}
          px={5}
          pb={isDesktop ? 10 : 5}
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
            {t("skills.heading")}
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
              {activeTechnology.name}
            </Text>
            <Text fontSize="md" height={isDesktop ? "120px" : "unset"}>
              {activeTechnology.description}
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
                isActive={activeTechnology.name === technology.name}
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
