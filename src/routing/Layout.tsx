import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      height="100vh"
      templateRows="65px 1fr"
      position="relative" // Set position to relative for z-index to work
    >
      <GridItem
        area="nav"
        bg="#ffffff"
        position="fixed"
        width="100%"
        zIndex="100">
        {" "}
        {/* Set zIndex to a high value */}
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" position="fixed" top="60px">
          <Aside />
        </GridItem>
      </Show>

      <GridItem
        area="main"
        bg="#F5F5F5"
        paddingLeft={3}
        paddingBottom={3}
        paddingTop={3}
        paddingRight={1}
        flex="1"
        height="1fr">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
