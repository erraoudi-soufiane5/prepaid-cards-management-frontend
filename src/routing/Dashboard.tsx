import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./styles.css";

import CardsStatusTable from "../components/CardsStatusTable";
import TransactionsTable from "../components/TransactionsTable";

function Dashboard() {
  return (
    <Box height="100%" overflowY="auto">
      <Grid
        h="100%"
        templateRows="200px 200px repeat(6, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        padding={3}>
        <GridItem
          minHeight={"190px"}
          borderRadius={14}
          colSpan={2}
          bg="#ffffff"
          padding={4}>
          <Heading
            as="h2"
            size="md"
            mb={8}
            fontWeight={"medium"}
            textAlign="left">
            Balance
          </Heading>

          <Flex justify="center" height="100%" fontSize="2xl" color="teal.500">
            $1,234.56 USD
          </Flex>
        </GridItem>
        <GridItem
          borderRadius={14}
          colSpan={3}
          rowSpan={2}
          bg="#ffffff"
          padding={4}>
          <Heading
            as="h2"
            size="md"
            mb={8}
            fontWeight={"medium"}
            textAlign="left">
            insights
          </Heading>
        </GridItem>
        <GridItem borderRadius={14} colSpan={2} bg="#ffffff" padding={4}>
          <Heading
            as="h2"
            size="md"
            mb={8}
            fontWeight={"medium"}
            textAlign="left">
            favourite
          </Heading>
        </GridItem>
        <GridItem
          borderRadius={14}
          colSpan={5}
          rowSpan={3}
          bg="#ffffff"
          padding={4}>
          <Heading
            as="h2"
            size="md"
            mb={8}
            fontWeight={"medium"}
            textAlign="left">
            Cards status
          </Heading>
          <Box maxHeight="600px" overflowY="auto">
            <CardsStatusTable />
          </Box>
        </GridItem>
        <GridItem
          borderRadius={14}
          colSpan={5}
          rowSpan={3}
          bg="#ffffff"
          padding={4}>
          <Heading
            as="h2"
            size="md"
            mb={8}
            fontWeight={"medium"}
            textAlign="left">
            Transactions
          </Heading>
          <Box maxHeight="600px" overflowY="auto">
            <TransactionsTable />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Dashboard;
