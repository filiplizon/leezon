import * as React from "react";
import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import DottedSquare from "../DottedSquare/DottedSquare";
import Heading from "../Heading/Heading";

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
  const [isDesktop] = useMediaQuery("(min-width: 700px)");

  return (
    <Flex
      flexDirection="column"
      bg="dark"
      p={5}
      color="white"
      fontFamily="secondary"
      shadow="xl"
      borderRadius={10}
      w={isDesktop ? width || "48%" : "100%"}
      zIndex="5"
      position="relative"
      pr={10}
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
      <UnorderedList mt={5} fontSize={isDesktop ? "md" : "md"}>
        {description.map((item, index) => (
          <ListItem key={index} mb={2}>
            {item}
          </ListItem>
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
