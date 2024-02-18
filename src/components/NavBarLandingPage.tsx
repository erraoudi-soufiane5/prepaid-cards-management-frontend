import {
  Image,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
  Avatar,
  Button,
} from "@chakra-ui/react";
import bankOfAfricaLogo from "../assets/bankOfAfricaLogo.jpg";
import React from "react";
import Login from "./Login";

const NavBarLandingPage = () => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <HStack>
        <Image src={bankOfAfricaLogo} htmlHeight="72px" htmlWidth="220px" />
      </HStack>
      <HStack>
        {accessToken ? (
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => {
              localStorage.removeItem("accessToken");
            }}>
            Logout
          </Button>
        ) : (
          <Login />
        )}
      </HStack>
    </HStack>
  );
};

export default NavBarLandingPage;
