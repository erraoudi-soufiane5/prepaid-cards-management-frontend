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

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <HStack>
        <Wrap>
          <WrapItem>
            <button onClick={toggleDrawer}>
              <Avatar bg="#cbd5e0" size="sm" name="ERRAOUDI Soufiane" />
            </button>
          </WrapItem>
        </Wrap>
      </HStack>
      <CustomDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </HStack>
  );
};

export default NavBar;
