import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  FormControl,
  Select,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
  HStack,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Operation {
  cardNumber: number;
  employeeID: string;
  employeeName: string;
  typeOperation: string;
  motifOperation: string;
  montant: number;
}

const ManageCards = () => {
  const [cardsData, setCardsData] = useState<any[]>([]);
  const [operations, setOperations] = useState<Operation[]>([]);
  const accessToken = localStorage.getItem("accessToken");
  const toast = useToast();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

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

        if (response.status === 200) {
          const data = response.data.map((card: any) => ({
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
            typeOperation: "",
            motifOperation: "",
            montant: 0,
          }));
          setCardsData(data);
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

  const toggleRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSubmit = async () => {
    console.log(selectedRows);
    try {
      const newOperations = cardsData.map((card) => ({
        cardNumber: card.cardNumber,
        employeeID: card.cinOrPassport,
        employeeName: card.employeeName,
        typeOperation: card.typeOperation === "Recharge" ? "CREDIT" : "DEBIT",
        motifOperation: card.motifOperation,
        montant: card.montant,
      }));

      const selectedOperations = newOperations.filter((operation, index) =>
        selectedRows.includes(index)
      );

      console.log("new operations");
      console.log(newOperations);

      console.log("selected operations");
      console.log(selectedOperations);

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      };

      const responses = await Promise.all(
        selectedOperations.map((operation) =>
          axios.post(
            "http://localhost:8000/api/operations/add",
            operation,
            axiosConfig
          )
        )
      );

      console.log("responses:", responses);

      responses.forEach((response, index) => {
        if (response.status === 200) {
          toast({
            title: `Operation ${index + 1} submitted successfully`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          console.error(`Operation ${index + 1} submission failed:`, response);
          toast({
            title: `Operation ${index + 1} submission failed`,
            description: "Please try again later",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
    } catch (error) {
      console.error("Operation submission failed:", error);
      toast({
        title: "Operation submission failed",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <TableContainer margin={3} borderRadius={14} bg="#ffffff">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Td textAlign="center">Select</Td>
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
                  <Checkbox
                    checked={selectedRows.includes(index)}
                    onChange={() => toggleRow(index)}
                  />
                </Td>
                <Td textAlign="center">{card.cardNumber}</Td>
                <Td textAlign="center">{card.cinOrPassport}</Td>
                <Td textAlign="center">{card.employeeName}</Td>
                <Td textAlign="center">
                  <FormControl
                    isInvalid={
                      selectedRows.includes(index) && !card.typeOperation
                    }>
                    <Select
                      placeholder="Select operation"
                      onChange={(e) => {
                        const typeOperation = e.target.value;
                        const updatedCardsData = [...cardsData];
                        updatedCardsData[index].typeOperation = typeOperation;
                        setCardsData(updatedCardsData);
                      }}>
                      <option value="Recharge">Recharge</option>
                      <option value="Decharge">Decharge</option>
                    </Select>
                    {selectedRows.includes(index) && !card.typeOperation && (
                      <FormErrorMessage>
                        Please select an operation
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Td>
                <Td textAlign="center">1</Td>
                <Td textAlign="center">
                  <FormControl
                    isInvalid={
                      selectedRows.includes(index) && !card.motifOperation
                    }>
                    <Input
                      placeholder="motif operation"
                      onChange={(e) => {
                        const motifOperation = e.target.value;
                        const updatedCardsData = [...cardsData];
                        updatedCardsData[index].motifOperation = motifOperation;
                        setCardsData(updatedCardsData);
                      }}
                    />
                    {selectedRows.includes(index) && !card.motifOperation && (
                      <FormErrorMessage>
                        Motif operation cannot be empty
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Td>
                <Td textAlign="center" isNumeric>
                  <FormControl
                    isInvalid={selectedRows.includes(index) && !card.montant}>
                    <NumberInput
                      onChange={(valueString) => {
                        const montant = parseFloat(valueString);
                        const updatedCardsData = [...cardsData];
                        updatedCardsData[index].montant = montant;
                        setCardsData(updatedCardsData);
                      }}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    {selectedRows.includes(index) && !card.montant && (
                      <FormErrorMessage>
                        Amount cannot be empty
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack justifyContent={"center"}>
        <Button borderRadius={22} colorScheme="teal" onClick={handleSubmit}>
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
