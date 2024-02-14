import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import PreActivatedCard from "./PreActivatedCard";
import { IPreActivatedCard } from "../Model/PreActivatedCard";

interface Props {
  preActivatedCards: IPreActivatedCard[];
}

const PreActivatedCards = ({ preActivatedCards }: Props) => {
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
