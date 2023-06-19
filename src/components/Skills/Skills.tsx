import React, { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import Heading from "../Heading/Heading";
import DottedElement from "../DottedElement/DottedElement";
import SkillCard from "../SkillCard/SkillCard";
import PaginationBar from "../PaginationBar/PaginationBar";
import { skills } from "../../utils/data/skills";
import { useLastSingleLetterToNewLine } from "../../utils/helpers/hooks";
import { slideFromBottom } from "../../utils/animations";

const Skills: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [activeSkill, setActiveSkill] = useState<string>(skills[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const skillsPerPage: number = isDesktop ? 9 : 6;
  const indexOfLastSkill: number = currentPage * skillsPerPage;
  const indexOfFirstSkill: number = indexOfLastSkill - skillsPerPage;

  const totalPages: number = useMemo(
    () => Math.ceil(skills.length / skillsPerPage),
    [skills.length, skillsPerPage]
  );

  useEffect(() => {
    const updatedActiveSkill = skills.find(skill => skill === activeSkill);
    setActiveSkill(updatedActiveSkill || skills[0]);
  }, [t]);

  const textRef = useRef<HTMLParagraphElement>(null);
  useLastSingleLetterToNewLine(textRef, activeSkill);

  const handlePageClick = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleSkillClick = (technology: string): void => {
    setActiveSkill(technology);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    },
    preventScrollOnSwipe: true,
  });

  return (
    <Flex
      as="section"
      id={t("skills.id") as string}
      minH="100vh"
      pb={isDesktop ? 10 : 0}
      pt={isDesktop ? "10vh" : 0}
      position="relative"
      justifyContent="center"
      bg={`mode.${colorMode}.secondary`}
      color={`mode.${colorMode}.text`}
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
        maxW="1100px"
        pb={10}
        direction={isDesktop ? "row" : "column"}
        zIndex={2}
      >
        <Flex
          width={isDesktop ? "48%" : "100%"}
          pt={isDesktop ? 0 : "14vh"}
          pb={isDesktop ? 20 : 10}
          px={5}
          position="relative"
          direction="column"
          justifyContent="center"
          bg={isDesktop ? "transparent" : `mode.${colorMode}.background`}
          textAlign={isDesktop ? "left" : "center"}
        >
          <DottedElement
            width="200px"
            height="160px"
            top={isDesktop ? "0" : "-0px"}
            left="-50%"
          />
          <Heading level="h3" mb={isDesktop ? 5 : 10}>
            {t("skills.heading")}
          </Heading>
          <Flex
            direction="column"
            fontSize="xl"
            fontFamily="secondary"
            textAlign="left"
          >
            <Text
              display="inline"
              mb={5}
              fontSize="xl"
              borderBottom="1px solid"
              borderBottomColor={`mode.${colorMode}.text`}
            >
              {t(`skills.${activeSkill}.name`)}
            </Text>
            <Box ref={ref}>
              <Text
                ref={textRef}
                height={isDesktop ? "120px" : "unset"}
                fontSize="md"
                transform="translateY(50%)"
                animation={
                  inView
                    ? `${slideFromBottom} .5s ease-in-out forwards`
                    : "none"
                }
                dangerouslySetInnerHTML={{
                  __html: t(`skills.${activeSkill}.description`) as string,
                }}
              />
            </Box>
          </Flex>
        </Flex>
        <Flex
          width={isDesktop ? "50%" : "100%"}
          pt={isDesktop ? 0 : 5}
          px={2}
          mt={isDesktop ? 5 : 0}
          ml={isDesktop ? 20 : 0}
          position="relative"
          justifyContent="space-around"
          flexWrap="wrap"
          {...swipeHandlers}
        >
          {skills
            .slice(indexOfFirstSkill, indexOfLastSkill)
            .map((skill: string, index: number) => (
              <SkillCard
                key={index}
                skill={skill}
                isActive={activeSkill === skill}
                onClick={() => handleSkillClick(skill)}
              />
            ))}
          <Flex w="100%" justifyContent="center">
            <PaginationBar
              totalPages={totalPages}
              currentPage={currentPage}
              isDesktop={isDesktop}
              handlePageClick={handlePageClick}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
