import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box height="100%" overflowY="auto">
      <Grid
        h="100%"
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        padding={3}
      >
         <GridItem
          minHeight={"190px"}
          borderRadius={14}
          colSpan={2}
          bg="#ffffff"
          padding={4} 
        >
          
          <Heading as="h2" size="md" mb={8} fontWeight={"medium"} textAlign="left">
            Balance
          </Heading>
          
          <Flex
            justify="center"
            height="100%"
            fontSize="2xl"
            color="teal.500"
          >
            $1,234.56 USD
          </Flex>
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
}

export default Dashboard;
