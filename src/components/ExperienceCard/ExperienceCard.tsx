import React, { useEffect, useRef } from "react";
import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import DottedSquare from "../DottedSquare/DottedSquare";
import Heading from "../Heading/Heading";
import { useInView } from "react-intersection-observer";
import { opacityAnimation } from "../../utils/animations";
import { lastSingleLetterToNewLine } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  width?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  description,
  width,
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 821px)");
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const descriptionRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    descriptionRefs.current.forEach(element => {
      if (element) {
        lastSingleLetterToNewLine(element);
      }
    });
  }, [descriptionRefs, t]);

  return (
    <Flex
      ref={ref}
      flexDirection="column"
      bg={`mode.${colorMode}.background`}
      p={5}
      color={`mode.${colorMode}.text`}
      fontFamily="secondary"
      shadow="xl"
      borderRadius={10}
      w={isDesktop ? width || "48%" : "100%"}
      zIndex="5"
      textAlign="left"
      position="relative"
      pr={10}
      mb={isDesktop ? 0 : 10}
      opacity={0}
      animation={
        inView ? `${opacityAnimation} .5s ease-in-out forwards` : "none"
      }
    >
      <Heading level="h4" fontSize="xl" mb={2}>
        {title}
      </Heading>
      <Heading level="h4" fontSize="xl">
        {company}
      </Heading>
      <Text my={2} fontSize="md">
        {date}
      </Text>
      <UnorderedList
        minH={isDesktop ? "260px" : "unset"}
        mt={5}
        fontSize={isDesktop ? "md" : "md"}
      >
        {description.map((item, index) => (
          <ListItem
            key={index}
            mb={2}
            dangerouslySetInnerHTML={{ __html: item }}
            ref={el => (descriptionRefs.current[index] = el ?? null)}
          />
        ))}
      </UnorderedList>
      <DottedSquare
        right="0"
        top="0"
        width={isDesktop ? "40px" : "25px"}
        height="100%"
      />
    </Flex>
  );
};

export default ExperienceCard;
