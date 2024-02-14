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
  
  const AdminAside = () => {
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
          variant={currentPath === "/admin/newAccount" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => navigate("/admin/newAccount")}
        >
          Create Account
        </Button>
  
        <Button
          leftIcon={<PlusSquareIcon />}
          borderRadius={"14px"}
          colorScheme="gray"
          color={"teal"}
          variant={currentPath === "/admin/dashboard" ? "solid" : "ghost"}
          justifyContent="flex-start"
          onClick={() => navigate("/admin/dashboard")}
        >
          Manage Accounts
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
  
  export default AdminAside;
  