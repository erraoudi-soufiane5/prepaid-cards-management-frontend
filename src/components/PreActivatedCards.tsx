import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PreActivatedCard from "./PreActivatedCard";
import { IPreActivatedCard } from "../Model/PreActivatedCard";
import axios from "axios";

interface Props {
  preActivatedCards: IPreActivatedCard[];
}

const PreActivatedCards = ({ preActivatedCards }: Props) => {
  const toast = useToast()

  const handleActivation = async () => {

    const requestData = preActivatedCards.map((card) => ({
      identite: card.cinPassport,
      nom: card.beneficiaryName,
      ddn: card.birthDate,
      tele: card.phone,
      sex: card.sex.toUpperCase(),
      entreprise: card.company,
    }));

    console.log("requestData: ",requestData)
    
    axios
    .post("http://localhost:8000/api/card/creat", requestData)
    .then((response) => {
      const { data } = response;
      if (response.status === 200) {
        console.log("operation succeded")
        toast({
          title: 'Account created.',
          description: "We've created the requested accounts for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        preActivatedCards = []

      } else {
        console.error("Oops, something went wrong.");
      }
    })
    .catch((error) => {
      console.error(
        "post request failed",
        error.response ? error.response.data : error
      );
    });

    console.log("keeep going")
    console.log("I m here : ", preActivatedCards)
  }
  return (
    <>
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
          {preActivatedCards.map((card) => (
            <PreActivatedCard preActivatedCard={card} />
          ))}
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={4} justifyContent={"right"}>
        <Button borderRadius={22} colorScheme="teal" variant="solid"
        onClick={handleActivation} 
        >
          Activate
        </Button>
        <Button
          borderRadius={22}
          bg={"#ffffff"}
          variant="solid"
          color={"#034381"}
        >
          Discard
        </Button>
      </Stack>
    </>
  );
};

export default PreActivatedCards;
