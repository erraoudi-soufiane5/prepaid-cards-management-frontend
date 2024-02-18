import { Button, Stack } from "@chakra-ui/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiPlusCircle,
  FiClipboard,
  FiBell,
  FiSettings,
  FiLogOut,
  FiGrid,
} from "react-icons/fi";

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Stack paddingX={"20px"} paddingY={"50px"} spacing={2} width={"250px"}>
      <Button
        display="flex"
        alignItems="center"
        leftIcon={<FiGrid />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/dashboard" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/dashboard")}>
        Dashboard
      </Button>

      <Button
        display="flex"
        alignItems="center"
        leftIcon={<FiPlusCircle />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/createCards" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/createCards")}>
        Create Cards
      </Button>

      <Button
        display="flex"
        alignItems="center"
        leftIcon={<FiClipboard />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/manageCards" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/manageCards")}>
        Manage Cards
      </Button>
      <Button
        display="flex"
        alignItems="center"
        leftIcon={<FiBell />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/notifications" ? "solid" : "ghost"}
        justifyContent="flex-start"
        // onClick={() => navigate("/notifications")}
      >
        Notifications
      </Button>
      <Button
        display="flex"
        alignItems="center"
        leftIcon={<FiSettings />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/settings" ? "solid" : "ghost"}
        justifyContent="flex-start"
        // onClick={() => navigate("/settings")}
      >
        Settings
      </Button>
      <Button
        display="flex"
        alignItems="center"
        leftIcon={<FiLogOut />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/logout" ? "solid" : "ghost"}
        justifyContent="flex-start"
        // onClick={() => navigate("/log out")}
      >
        Log out
      </Button>
    </Stack>
  );
};

export default Aside;
