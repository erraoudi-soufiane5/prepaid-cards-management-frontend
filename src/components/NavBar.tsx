import { ChevronRightIcon } from "@chakra-ui/icons";
import bankOfAfricaLogo from "../assets/bankOfAfricaLogo.jpg";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Image,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomDrawer from "./CustomDrawer";
import Login from "./Login";

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken") !== null;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <HStack>
        <Image src={bankOfAfricaLogo} htmlHeight="72px" htmlWidth="220px" />
        <Breadcrumb
          marginLeft={4}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <HStack>
        {isLoggedIn ? (
          <>
            <Wrap>
              <WrapItem>
                <button onClick={toggleDrawer}>
                  <Avatar bg="#cbd5e0" size="sm" name="ERRAOUDI Soufiane" />
                </button>
              </WrapItem>
            </Wrap>
            <CustomDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
          </>
        ) : (
          <Login />
        )}
      </HStack>
    </HStack>
  );
};

export default NavBar;
