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
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

export interface Card {
  cardNumber: string;
  cinOrPassport: string;
  employeeName: string;
  balance: string;
  company: string;
  status: "Active" | "Disabled";
}

const CardsStatusTable = () => {
  const [cardsData, setCardsData] = useState<any[]>([]);
  const accessToken = localStorage.getItem("accessToken");

  let cardsStatusData: Card[] = [];

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
          "http://localhost:8000/dashboard/listcartes",
          axiosConfig
        );
        const { data } = response;
        console.log("la reponse :", response);

        if (response.status === 200) {
          cardsStatusData = data.map((card: any) => ({
            cardNumber: card.id,
            cinOrPassport: card.employeId,
            employeeName: card.employeName,
            balance: `MAD ${card.solde}`,
            company: card.entreprise,
            status:
              card.status === "ACTIVATED"
                ? "Active"
                : card.status === "DEACTIVATED"
                ? "Disabled"
                : "Preactive",
          }));
          setCardsData(cardsStatusData);
          console.log(cardsStatusData);
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
  console.log("look here ", cardsData);

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
          {cardsData.map((card, index) => (
            <Tr key={index}>
              <Td textAlign="center">{card.cardNumber}</Td>
              <Td textAlign="center">{card.cinOrPassport}</Td>
              <Td textAlign="center">{card.employeeName}</Td>
              <Td textAlign="center">{card.balance}</Td>
              <Td textAlign="center">{card.company}</Td>
              {card.status === "Desactive" && (
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
              {card.status === "Preactive" && (
                <Td textAlign="center">
                  <Highlight
                    query={card.status}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "yellow.100",
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
