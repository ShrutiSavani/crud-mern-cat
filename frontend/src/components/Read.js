import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Code,
  useDisclosure,
} from "@chakra-ui/react";

import UserModal from "./UserModal";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";

const Read = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);

  const [id, setId] = useState();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <Text>loading....</Text>;
  }

  return (
    <Flex justifyContent="center">
      {isOpen && <UserModal isOpen={isOpen} onClose={onClose} id={id} />}
      <Flex direction="column" gap="40px">
        <Flex direction="column" gap="16px">
          <Text
            alignSelf="center"
            fontSize="24px"
            fontWeight="600"
            color="blue.700"
          >
            User Details
          </Text>
          <Flex gap="12px" alignSelf="center">
            <Code>MERN</Code>
            <Code>+</Code>
            <Code>Redux toolkit</Code>
          </Flex>
          <Code alignSelf="center" fontSize={{ base: "16px", lg: "20px" }}>
            with createAsyncThunk
          </Code>
        </Flex>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Sr</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Age</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users
                .filter((ele) => {
                  if (searchData.length === 0) {
                    return ele;
                  } else {
                    return ele.name
                      .toLowerCase()
                      .includes(searchData.toLowerCase());
                  }
                })
                .map((user, i) => {
                  return (
                    <Tr key={i}>
                      <Td>{i + 1}</Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.age}</Td>
                      <Td>
                        <Flex gap="12px">
                          <Button
                            p="4px 8px"
                            h="auto"
                            fontSize="14px"
                            color="white"
                            bg="blue.400"
                            onClick={() => [setId(user._id), onOpen()]}
                          >
                            show
                          </Button>
                          <Link to={`/update/${user._id}`}>
                            <Button
                              p="4px 8px"
                              h="auto"
                              fontSize="14px"
                              color="white"
                              bg="blue.600"
                            >
                              Edit
                            </Button>
                          </Link>
                          <Button
                            p="4px 8px"
                            h="auto"
                            fontSize="14px"
                            color="white"
                            bg="red.600"
                            onClick={() => dispatch(deleteUser(user._id))}
                          >
                            Delete
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default Read;
