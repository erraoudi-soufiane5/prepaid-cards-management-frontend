import { DragHandleIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";
import { NavLink, Path, RouteProps, useLocation } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

const CustomAsideButton = ({ to, children }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  console.log(isActive);

  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <Button
        leftIcon={<DragHandleIcon />}
        borderRadius="14px"
        colorScheme={isActive ? "teal" : "transparent"}
        variant="ghost"
        justifyContent="flex-start"
      >
        {children}
      </Button>
    </NavLink>
  );
};

export default CustomAsideButton;
