import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import ProjectCard from "../ProjectCard/ProjectCard";
import DottedElement from "../DottedElement/DottedElement";
import PaginationBar from "../PaginationBar/PaginationBar";
import Button from "../Button/Button";
import { projects } from "../../utils/data/projects";

const Projects: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showMore, setShowMore] = useState<boolean>(false);
  const projectsPerPage: number = isDesktop ? 3 : 4;
  const totalPages: number = Math.ceil(projects.length / projectsPerPage);
  const maxDisplayedProjects: number = showMore
    ? projects.length
    : projectsPerPage;
  const startIndex: number = isDesktop
    ? (currentPage - 1) * projectsPerPage
    : 0;
  const endIndex: number = startIndex + maxDisplayedProjects;
  const displayedProjects: string[] = projects.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber: number): void =>
    setCurrentPage(pageNumber);

  const handleButtonClick = (): void => {
    setShowMore(!showMore);
    setCurrentPage(1);
  };

  return (
    <Flex
      as="section"
      id={t("projects.id") as string}
      direction="column"
      minH="100vh"
      pt={isDesktop ? "10vh" : "14vh"}
      pb={10}
      position="relative"
      alignItems="center"
      justifyContent="center"
      bg={`mode.${colorMode}.secondary`}
    >
      <DottedElement
        width="200px"
        height={isDesktop ? "200px" : "100px"}
        top="10px"
        right="0"
      />
      <Heading level="h3">{t("projects.heading")}</Heading>
      <Flex
        maxWidth="1100px"
        direction={isDesktop ? "row" : "column"}
        mt={10}
        mb={isDesktop ? 5 : 0}
        justifyContent="space-around"
        alignItems="center"
      >
        {displayedProjects.map((title: string) => (
          <ProjectCard key={title} title={title} />
        ))}
      </Flex>
      {!isDesktop && (
        <Flex width="100%" justifyContent="center">
          <Button
            name={t("projects.buttons.seeMore")}
            width="90%"
            onClick={handleButtonClick}
          >
            {showMore
              ? t("projects.buttons.seeLess")
              : t("projects.buttons.seeMore")}
          </Button>
        </Flex>
      )}
      {isDesktop && (
        <PaginationBar
          totalPages={totalPages}
          currentPage={currentPage}
          isDesktop={isDesktop}
          handlePageClick={handlePageClick}
        />
      )}
    </Flex>
  );
};

export default Projects;
