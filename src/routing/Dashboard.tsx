import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./styles.css";
import InsightsGraph from "../components/InsightsGraph";

function Dashboard() {
  const insightsData = [
    { month: "January", moneyIn: 1000, moneyOut: 800 },
    { month: "February", moneyIn: 1200, moneyOut: 1000 },
    { month: "March", moneyIn: 800, moneyOut: 900 },
    // Add more data as needed
  ];
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
            {/* Adjust maxHeight as needed */}
            {/* Your transactions content goes here */}
            {/* For example: */}

            <TableContainer mb={"9px"} borderRadius={14} bg="#ffffff">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>CIN/Passeport</Th>
                    <Th>Employee name</Th>
                    <Th>Company</Th>
                    <Th isNumeric>Phone</Th>
                    <Th>Birth Date</Th>
                    <Th>Sex</Th>
                    <Th>civility</Th>
                    <Th>Select</Th>
                  </Tr>
                </Thead>
                {/* {preActivatedCards.map((card) => (
              <PreActivatedCard preActivatedCard={card} />
            ))} */}
                <Tbody>
                  {Array.from({ length: 400 }, (_, i) => (
                    <Tr>
                      <Td>Transaction {i + 1}</Td>
                      <Td>Transaction {i + 1}</Td>
                      <Td>Transaction {i + 1}</Td>
                      <Td>Transaction {i + 1}</Td>
                      <Td>Transaction {i + 1}</Td>
                      <Td>Transaction {i + 1}</Td>
                      <Td>Transaction {i + 1}</Td>

                      <Td>Moroccan</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Dashboard;
