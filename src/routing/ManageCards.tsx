import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
  Checkbox,
  HStack,
  FormControl,
  FormLabel,
  Select,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/CardsStatusTable";

const ManageCards = () => {
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
  return (
    <>
      <TableContainer margin={3} borderRadius={14} bg="#ffffff">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center">Select</Th>
              <Th textAlign="center">Card Number</Th>
              <Th textAlign="center">Employee ID</Th>
              <Th textAlign="center">Employee name</Th>
              <Th textAlign="center">Action</Th>
              <Th textAlign="center">Operation Code</Th>
              <Th textAlign="center">Motif operation</Th>
              <Th textAlign="center" isNumeric>
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cardsData.map((card, index) => (
              <Tr key={index}>
                <Td textAlign="center">
                  <Checkbox defaultChecked></Checkbox>
                </Td>
                <Td textAlign="center">{card.cardNumber}</Td>
                <Td textAlign="center">{card.cinOrPassport}</Td>
                <Td textAlign="center">{card.employeeName}</Td>
                <Td textAlign="center">
                  <FormControl>
                    <Select placeholder="Select operation">
                      <option>Recharge</option>
                      <option>Decharge</option>
                    </Select>
                  </FormControl>
                </Td>
                <Td textAlign="center">1</Td>
                <Td textAlign="center">
                  <FormControl isRequired>
                    <Input placeholder="motif operation" />
                  </FormControl>
                </Td>
                <Td textAlign="center" isNumeric>
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack justifyContent={"center"}>
        <Button borderRadius={22} colorScheme="teal">
          Submit
        </Button>
        <Button borderRadius={22} variant="outline" mr={3}>
          Cancel
        </Button>
      </HStack>
    </>
  );
};

export default ManageCards;
