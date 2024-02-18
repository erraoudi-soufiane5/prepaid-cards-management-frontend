import {
  CalendarIcon,
  DragHandleIcon,
  SettingsIcon,
  PlusSquareIcon,
  TimeIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Stack paddingX={"20px"} paddingY={"50px"} spacing={2} width={"250px"}>
      <Button
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/dashboard" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/dashboard")}>
        Dashboard
      </Button>

      <Button
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/createCards" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/createCards")}>
        Create Cards
      </Button>

      <Button
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/manageCards" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/manageCards")}>
        Manage Cards
      </Button>
      <Button
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
