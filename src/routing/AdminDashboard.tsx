import { Box, Grid, GridItem } from "@chakra-ui/react";

function AdminDashboard() {
  return (
    <Box height="100%" overflowY="auto">
      <Grid
        h="100%"
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        padding={3}
      >
        {/* <GridItem
          minHeight={"190px"}
          borderRadius={14}
          colSpan={2}
          bg="#ffffff"
        >
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
        </GridItem> */}
      </Grid>
    </Box>
  );
}

export default AdminDashboard;
