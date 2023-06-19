import * as React from "react";
import { Heading as ChakraHeading, useColorMode } from "@chakra-ui/react";
interface HeadingProps {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  letterSpacing?: number;
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: number;
  mb?: number;
}

const Heading = ({
  children,
  level,
  letterSpacing,
  fontFamily = "primary",
  fontSize,
  fontWeight,
  mb,
}: HeadingProps) => {
  const { colorMode } = useColorMode();
  const headingStyles = {
    mb,
    fontFamily,
    letterSpacing,
    fontSize,
    fontWeight,
    color: `mode.${colorMode}.text`,
    zIndex: 2,
  };
  return (
    <ChakraHeading as={level} {...headingStyles}>
      {children}
    </ChakraHeading>
  );
};

export default Heading;
