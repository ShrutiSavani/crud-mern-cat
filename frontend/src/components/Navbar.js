import React, { useEffect, useState } from "react";

import { Flex, Input, Text } from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";

import { serachUser } from "../features/userDetailSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ boxStyle }) => {
  const [searchData, setSearchData] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serachUser(searchData));
  }, [searchData]);

  const isAllUserPage = useMatch("/");
  const isCreateUserPage = useMatch("/create");

  const allUsers = useSelector((state) => state.app.users.length);

  return (
    <Flex
      alignItems="center"
      bg="#F4FBFF"
      color="blue.700"
      p="12px 40px"
      {...boxStyle}
    >
      <Flex flexShrink="0" gap="20px" flex="2" alignItems="center">
        <Link to="/">
          <Text fontSize="24px" fontWeight="600">
            RTK-CAT
          </Text>
        </Link>
        <Link to="/">
          <Text
            fontWeight={isAllUserPage ? "600" : ""}
            textDecoration={isAllUserPage ? "underline" : ""}
          >
            All Users ({allUsers})
          </Text>
        </Link>
        <Link to="/create">
          <Text
            fontWeight={isCreateUserPage ? "600" : ""}
            textDecoration={isCreateUserPage ? "underline" : ""}
          >
            Create User
          </Text>
        </Link>
      </Flex>
      <Input
        flex="1"
        size="sm"
        placeholder="search name..."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
    </Flex>
  );
};

export default Navbar;
