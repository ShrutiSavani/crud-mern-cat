import React from "react";

import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UserModal = ({ isOpen, onClose, id }) => {
  const allUsers = useSelector((state) => state.app.users);
  const user = allUsers.filter((ele) => ele._id === id);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p="24px">
        <ModalHeader p="0" mb="20px">
          User Details
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p="0">
          <Flex gap="12px">
            <Text fontWeight="600">Name : </Text>
            <Text>{user[0].name}</Text>
          </Flex>
          <Flex gap="12px">
            <Text fontWeight="600">Email : </Text>
            <Text>{user[0].email}</Text>
          </Flex>
          <Flex gap="12px">
            <Text fontWeight="600">Age : </Text>
            <Text>{user[0].age}</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
