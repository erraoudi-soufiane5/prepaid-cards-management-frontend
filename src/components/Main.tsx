import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Main = () => {
  return (
    // <Grid
    //   templateAreas={{
    //     base: `"balance" "insights" "favourite" "status" "transactions"`,
    //     lg: `"balance insights" "favourite insights" "status" "transactions"`,
    //   }}
    //   templateColumns={{
    //     base: "1fr",
    //     lg: "200px 1fr",
    //   }}
    //   templateRows={{
    //     base: "1fr",
    //     lg: "193px 245px auto 1fr",
    //   }}
    // >
    //   <GridItem borderRadius={14} area="balance" margin={4} bg={"#ffffff"}>
    //     balance
    //   </GridItem>
    //   <GridItem borderRadius={14} area="insights" margin={4} bg={"#ffffff"}>
    //     insights
    //   </GridItem>
    //   <GridItem borderRadius={14} area="favourite" margin={4} bg={"#ffffff"}>
    //     favourite
    //   </GridItem>
    //   <GridItem borderRadius={14} area="status" margin={4} bg={"#ffffff"}>
    //     status
    //   </GridItem>
    //   <GridItem borderRadius={14} area="transactions" margin={4} bg={"#ffffff"}>
    //     transactions
    //   </GridItem>
    // </Grid>
    <Box height="100%" overflowY="auto">
      <Grid
        h="100%"
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        padding={3}
      >
        <GridItem height={"190px"} borderRadius={14} colSpan={2} bg="#ffffff">
          balance
        </GridItem>
        <GridItem borderRadius={14} colSpan={3} rowSpan={2} bg="#ffffff">
          insights
        </GridItem>
        <GridItem borderRadius={14} colSpan={2} bg="#ffffff">
          favourite
        </GridItem>
        <GridItem borderRadius={14} colSpan={5} rowSpan={3} bg="#ffffff">
          card status
        </GridItem>
        <GridItem borderRadius={14} colSpan={5} rowSpan={3} bg="#ffffff">
          transactions
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Main;
