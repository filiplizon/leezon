import React, { useState } from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import { getProjects } from "../../utils/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import DottedSquare from "../DottedSquare/DottedSquare";
import PaginationBar from "../PaginationBar/PaginationBar";
import Button from "../Button/Button";
import { Project } from "../../utils/types/project";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showMore, setShowMore] = useState<boolean>(false);
  const projects = getProjects(t);
  const projectsPerPage: number = 3;
  const totalPages: number = Math.ceil(projects.length / projectsPerPage);
  const maxDisplayedProjects: number = showMore
    ? projects.length
    : projectsPerPage;

  const handlePageClick = (pageNumber: number): void =>
    setCurrentPage(pageNumber);

  const handleButtonClick = (): void => {
    setShowMore(!showMore);
    setCurrentPage(1);
  };

  const startIndex: number = isDesktop
    ? (currentPage - 1) * projectsPerPage
    : 0;
  const endIndex: number = startIndex + maxDisplayedProjects;
  const displayedProjects: Project[] = projects.slice(startIndex, endIndex);

  return (
    <Flex
      id={t("projects.id") as string}
      flexDirection="column"
      alignItems="center"
      minH="100vh"
      bg={`mode.${colorMode}.secondary`}
      pt="14vh"
      pb={10}
      position="relative"
    >
      <DottedSquare
        width="200px"
        height={isDesktop ? "200px" : "100px"}
        top="10px"
        right="0"
      />
      <Heading color={`mode.${colorMode}.text`} level="h3">
        {t("projects.heading")}
      </Heading>
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent="space-around"
        alignItems="center"
        mt={10}
        mb={isDesktop ? 5 : 0}
        maxWidth="1100px"
      >
        {displayedProjects.map((data: Project) => (
          <ProjectCard key={data.title} {...data} />
        ))}
      </Flex>
      {!isDesktop && (
        <Flex width="100%" justifyContent="center">
          <Button width="90%" onClick={handleButtonClick}>
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
