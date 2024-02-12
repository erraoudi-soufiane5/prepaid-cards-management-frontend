import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Image,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import bankOfAfricaLogo from "../assets/bankOfAfricaLogo.jpg";
import React from "react";
import Login from "./Login";

const NavBarLandingPage = () => {
  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <HStack>
        <Image src={bankOfAfricaLogo} htmlHeight="72px" htmlWidth="220px" />
      </HStack>
      <HStack>
        <Login />
      </HStack>
    </HStack>
  );
};

export default NavBarLandingPage;
