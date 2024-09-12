import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

import { createUser } from "../features/userDetailSlice";

import { useDispatch } from "react-redux";

const Create = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    navigate("/");
  };

  return (
    <Flex justifyContent="center">
      <Flex direction="column" minW="400px" gap="16px">
        <Text
          alignSelf="center"
          fontSize="24px"
          fontWeight="600"
          color="blue.700"
        >
          Create New User
        </Text>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Name :
          </Text>
          <Input
            flex="3"
            size="sm"
            name="name"
            onChange={(e) => getUserData(e)}
          />
        </Flex>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Email :
          </Text>
          <Input
            flex="3"
            size="sm"
            name="email"
            onChange={(e) => getUserData(e)}
          />
        </Flex>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Age :
          </Text>
          <Input
            flex="3"
            size="sm"
            name="age"
            onChange={(e) => getUserData(e)}
          />
        </Flex>

        <Button onClick={(e) => handleSubmit(e)} color="white" bg="blue.600">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Create;
