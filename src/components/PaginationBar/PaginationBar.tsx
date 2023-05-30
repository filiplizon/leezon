import React from "react";
import { Box, Flex } from "@chakra-ui/react";

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
  return (
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
  );
};

export default PaginationBar;