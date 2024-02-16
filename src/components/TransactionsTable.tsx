import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Highlight,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Transaction {
  cardNumber: string;
  employeeID: string;
  statusOperation: "Credit" | "Debit";
  amount: string;
  date: string;
}

const TransactionsTable = () => {
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!accessToken) return; // Exit early if access token is not available

        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };

        const response = await axios.get(
          "http://localhost:8000/dashboard/transactions",
          axiosConfig
        );

        if (response.status === 200) {
          const { data } = response;
          const mappedTransactions = data.map((transaction: any) => ({
            cardNumber: transaction.numeroCarte,
            employeeID: transaction.nomPerson,
            statusOperation: transaction.description.includes("Credit")
              ? "Credit"
              : "Debit",
            amount: `MAD ${transaction.montant}`,
            date: new Date(transaction.date).toLocaleDateString(),
          }));
          setTransactionsData(mappedTransactions);
          console.log("Mapped transactions:", mappedTransactions);
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

    fetchData();
  }, [accessToken]);

  return (
    <TableContainer
      mb={"9px"}
      borderRadius={14}
      bg="#ffffff"
      position="relative">
      <Table variant="striped" width="100%">
        <Thead>
          <Tr>
            <Th textAlign="center">Card number</Th>
            <Th textAlign="center">Employee ID</Th>
            <Th textAlign="center">Status Operation</Th>
            <Th textAlign="center">Amount</Th>
            <Th textAlign="center">Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactionsData.map((transaction, index) => (
            <Tr key={index}>
              <Td textAlign="center">{transaction.cardNumber}</Td>
              <Td textAlign="center">{transaction.employeeID}</Td>
              {transaction.statusOperation === "Credit" && (
                <Td textAlign="center">
                  <Highlight
                    query={transaction.statusOperation}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "red.100",
                    }}>
                    {transaction.statusOperation}
                  </Highlight>
                </Td>
              )}
              {transaction.statusOperation === "Debit" && (
                <Td textAlign="center">
                  <Highlight
                    query={transaction.statusOperation}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "green.100",
                    }}>
                    {transaction.statusOperation}
                  </Highlight>
                </Td>
              )}
              <Td textAlign="center">{transaction.amount}</Td>
              <Td textAlign="center">{transaction.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
