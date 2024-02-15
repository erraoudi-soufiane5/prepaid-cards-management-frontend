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
import React from "react";

const TransactionsTable = () => {
  // Generate transaction data list with 40 rows
  const transactionsData = Array.from({ length: 40 }, (_, index) => ({
    cardNumber: `1234 5678 9012 ${index + 1}`,
    employeeID: `EMP${index + 1}`,
    statusOperation: index % 2 === 0 ? "Credit" : "Debit",
    amount: `MAD ${(index + 1) * 1000}`,
    date: new Date().toLocaleDateString(),
  }));

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
