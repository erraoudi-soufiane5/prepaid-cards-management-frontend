import { Tbody, Tr, Td, Checkbox } from "@chakra-ui/react";
import React from "react";
import { IPreActivatedCard } from "../Model/PreActivatedCard";

interface Props {
  preActivatedCard: IPreActivatedCard;
}

const PreActivatedCard = ({ preActivatedCard }: Props) => {
  return (
    <Tbody>
      <Tr>
        <Td>{preActivatedCard.cinPassport}</Td>
        <Td>{preActivatedCard.beneficiaryName}</Td>
        <Td>{preActivatedCard.company}</Td>
        <Td>{preActivatedCard.phone}</Td>
        <Td>{preActivatedCard.birthDate}</Td>
        <Td>{preActivatedCard.sex}</Td>
        <Td>Moroccan</Td>
        <Td textAlign={"center"}>
          <Checkbox defaultChecked></Checkbox>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default PreActivatedCard;
