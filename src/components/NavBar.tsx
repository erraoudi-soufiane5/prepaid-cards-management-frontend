import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import bankOfAfricaLogo from "../assets/bankOfAfricaLogo.jpg";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomDrawer from "./CustomDrawer";
import Login from "./Login";

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken") !== null;
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <HStack padding={3} justifyContent={"space-between"}>
      <HStack>
        <Image src={bankOfAfricaLogo} htmlHeight="72px" htmlWidth="220px" />
        {location.pathname !== "/" ? (
          <Breadcrumb
            marginLeft={4}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={handleHomeClick}>Home</BreadcrumbLink>{" "}
              {/* Add onClick handler */}
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ) : isLoggedIn ? ( // Check if logged in
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              style={{ marginLeft: "15px" }}>
              My Platform
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={<RepeatIcon />}
                command="⌘⇧N"
                onClick={() => {
                  navigate("/dashboard");
                }}>
                My Dashboard
              </MenuItem>
              <MenuItem
                icon={<AddIcon />}
                command="⌘T"
                onClick={() => {
                  navigate("/createCards");
                }}>
                Create Cards
              </MenuItem>
              <MenuItem
                icon={<ExternalLinkIcon />}
                command="⌘N"
                onClick={() => {
                  navigate("/manageCards");
                }}>
                Manage Cards
              </MenuItem>

              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        ) : null}{" "}
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
