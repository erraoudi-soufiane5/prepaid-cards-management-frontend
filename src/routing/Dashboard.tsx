import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import "./styles.css";

import CardsStatusTable from "../components/CardsStatusTable";
import TransactionsTable from "../components/TransactionsTable";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const accessToken = localStorage.getItem("accessToken");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };

        const response = await axios.get(
          "http://localhost:8000/dashboard/balance",
          axiosConfig
        );
        const { data } = response;
        console.log("la balance :", response);

        if (response.status === 200) {
          setBalance(data);
        } else {
          console.error("Oops, something went wrong.");
        }
      } catch (error: any) {
        console.error(
          "Fetching data failed:",
          error.response ? error.response.data : error
        );
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);
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
            {balance} MAD
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
