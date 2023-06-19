import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

interface PaginationBarProps {
  totalPages: number;
  currentPage: number;
  isDesktop: boolean;
  handlePageClick: (pageNumber: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalPages,
  currentPage,
  isDesktop,
  handlePageClick,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex>
      {Array.from({ length: totalPages }, (_, i: number) => (
        <Box
          as="button"
          key={i}
          aria-label={`page ${i + 1}`}
          width={isDesktop ? "10px" : "20px"}
          height={isDesktop ? "10px" : "20px"}
          mt="10px"
          mx="5px"
          bg={i + 1 === currentPage ? `mode.${colorMode}.text` : "transparent"}
          borderRadius="full"
          border={i + 1 === currentPage ? "none" : "1px solid"}
          borderColor={
            i + 1 === currentPage ? "none" : `mode.${colorMode}.text`
          }
          cursor="pointer"
          onClick={() => handlePageClick(i + 1)}
        />
      ))}
    </Flex>
  );
};

export default PaginationBar;
