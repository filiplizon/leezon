import React from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  header: string;
  body: string;
}

const Modal = ({ isModalOpen, setIsModalOpen, header, body }: ModalProps) => {
  return (
    <ChakraModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(!isModalOpen)}
      isCentered
      size="xs"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={2} fontFamily="primary">
          {header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={5} pr={0} fontFamily="secondary">
          {body}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
