import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Avatar,
  HStack,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  FiUser,
  FiSettings,
  FiLogOut,
  FiThumbsUp,
  FiBell,
  FiHelpCircle,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear access token from localStorage
    localStorage.removeItem("accessToken");

    // Navigate to the landing page
    navigate("/");
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <HStack alignItems="center">
            <Avatar bg="#cbd5e0" size="sm" name="ERRAOUDI Soufiane" />
            <Text fontSize="md" fontWeight="bold">
              ERRAOUDI Soufiane
            </Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} align="stretch">
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiUser} />}
              justifyContent="flex-start">
              Your Profile
            </Button>
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiSettings} />}
              justifyContent="flex-start">
              Settings
            </Button>
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiHelpCircle} />}
              justifyContent="flex-start">
              Help
            </Button>
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiBell} />}
              justifyContent="flex-start">
              Notifications
            </Button>
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiPhone} />}
              justifyContent="flex-start">
              Contact Us
            </Button>
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiLogOut} />}
              justifyContent="flex-start"
              onClick={handleLogout}>
              Log Out
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
