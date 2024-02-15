import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Highlight,
} from "@chakra-ui/react";
import React from "react";

const CardsStatusTable = () => {
  const cardsStatusData = [
    {
      cardNumber: "1234 5678 9012 3456",
      cinOrPassport: "AB123456",
      employeeName: "ER RAOUDI Soufiane",
      balance: "MAD 1000",
      company: "sarl",
      status: "Active",
    },
    {
      cardNumber: "9876 5432 1098 7654",
      cinOrPassport: "CD789012",
      employeeName: "Jane Smith",
      balance: "MAD 2000",
      company: "sarl",
      status: "Disabled",
    },
    // Add more data objects as needed
  ];

  // Generate more data objects
  for (let i = 2; i < 40; i++) {
    const cardNumber = Math.floor(Math.random() * 10000000000000000)
      .toString()
      .padStart(16, "0");
    const cinOrPassport = `AB${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`;
    const employeeName = `Employee ${i}`;
    const balance = `MAD ${Math.floor(Math.random() * 5000)}`;
    const company = "sarl";
    const status = Math.random() < 0.5 ? "Active" : "Disabled"; // Randomly choose "Active" or "Disabled"

    cardsStatusData.push({
      cardNumber,
      cinOrPassport,
      employeeName,
      balance,
      company,
      status,
    });
  }
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
            <Th textAlign="center">Employee name</Th>
            <Th textAlign="center">Balance</Th>
            <Th textAlign="center">Company</Th>
            <Th textAlign="center">Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cardsStatusData.map((card, index) => (
            <Tr key={index}>
              <Td textAlign="center">{card.cardNumber}</Td>
              <Td textAlign="center">{card.cinOrPassport}</Td>
              <Td textAlign="center">{card.employeeName}</Td>
              <Td textAlign="center">{card.balance}</Td>
              <Td textAlign="center">{card.company}</Td>
              {card.status === "Disabled" && (
                <Td textAlign="center">
                  <Highlight
                    query={card.status}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "red.100",
                    }}>
                    {card.status}
                  </Highlight>
                </Td>
              )}
              {card.status === "Active" && (
                <Td textAlign="center">
                  <Highlight
                    query={card.status}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "green.100",
                    }}>
                    {card.status}
                  </Highlight>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CardsStatusTable;
