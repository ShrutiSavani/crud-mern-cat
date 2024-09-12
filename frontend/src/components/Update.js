import React, { useEffect, useState } from "react";

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { users } = useSelector((state) => state.app);

  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    if (id) {
      const user = users.filter((ele) => ele._id === id);
      setUpdateData(user[0]);
    }
  }, []);

  const getUserData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
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
          Update Details
        </Text>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Name :
          </Text>
          <Input
            flex="3"
            size="sm"
            name="name"
            value={updateData && updateData.name}
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
            value={updateData && updateData.email}
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
            type="number"
            value={updateData && updateData.age}
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

export default Update;
