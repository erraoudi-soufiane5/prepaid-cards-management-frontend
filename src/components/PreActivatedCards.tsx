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
import React, { useEffect, useState } from "react";
import PreActivatedCard from "./PreActivatedCard";
import { IPreActivatedCard } from "../Model/PreActivatedCard";
import axios from "axios";

interface Props {
  preActivatedCards: IPreActivatedCard[];
  setPreactivatedCards: React.Dispatch<
    React.SetStateAction<IPreActivatedCard[]>
  >;
}

const PreActivatedCards = ({
  preActivatedCards,
  setPreactivatedCards,
}: Props) => {
  const toast = useToast();

  const handleCancellation = () => {
    setPreactivatedCards([]);
  };

  const handleActivation = async () => {
    const requestData = preActivatedCards.map((card) => ({
      identite: card.cinPassport,
      nom: card.beneficiaryName,
      ddn: card.birthDate,
      tele: card.phone,
      sex: card.sex.toUpperCase(),
      entreprise: card.company,
    }));

    const accessToken = localStorage.getItem("accessToken");

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:8000/api/card/create", requestData, axiosConfig)
      .then((response) => {
        const { data } = response;
        console.log("here is the response :", response);
        if (response.status === 200) {
          console.log("operation succeded");
          toast({
            title: "Account created.",
            description: "We've created the requested accounts for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setPreactivatedCards([]);
        } else {
          console.error("Oops, something went wrong.");
        }
      })
      .catch((error) => {
        console.error(
          "post request failed",
          error.response ? error.response.data : error
        );
        toast({
          title: "Failed.",
          description: "There was an error activating your cards, try again ",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

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
        <Button
          borderRadius={22}
          colorScheme="teal"
          variant="solid"
          onClick={handleActivation}>
          Activate
        </Button>
        <Button
          borderRadius={22}
          bg={"#ffffff"}
          variant="solid"
          color={"#034381"}
          onClick={handleCancellation}>
          Discard
        </Button>
      </Stack>
    </>
  );
};

export default PreActivatedCards;
