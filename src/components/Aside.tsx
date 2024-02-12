import {
  CalendarIcon,
  DragHandleIcon,
  SettingsIcon,
  PlusSquareIcon,
  TimeIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Stack paddingX={"20px"} paddingY={"50px"} spacing={2} width={"250px"}>
      <Button
        leftIcon={<DragHandleIcon />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/dashboard" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </Button>

      <Button
        leftIcon={<PlusSquareIcon />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/createCards" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/createCards")}
      >
        Create Cards
      </Button>

      <Button
        leftIcon={<CalendarIcon />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant={currentPath === "/manageCards" ? "solid" : "ghost"}
        justifyContent="flex-start"
        onClick={() => navigate("/manageCards")}
      >
        <NavLink to="/manageCards">Manage Cards</NavLink>
      </Button>

      <Button
        leftIcon={<InfoOutlineIcon />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/">MyCards</NavLink>
      </Button>

      <Button
        leftIcon={<TimeIcon />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/bill Payment">Bill Payment</NavLink>
      </Button>

      <Button
        leftIcon={<SettingsIcon />}
        borderRadius={"14px"}
        colorScheme="gray"
        color={"teal"}
        variant="ghost"
        justifyContent="flex-start"
      >
        <NavLink to="/settings">Settings</NavLink>
      </Button>
    </Stack>
  );
};

export default Aside;
