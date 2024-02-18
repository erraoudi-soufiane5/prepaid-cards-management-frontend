import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Stack,
} from "@chakra-ui/react";
import FormControlComponent from "./FormControlComponent";
import { IPreActivatedCard } from "../Model/PreActivatedCard";
import { useEffect, useState } from "react";

interface Props {
  onAdd: (cardData: IPreActivatedCard) => void;
}

const CreateCardForm = ({ onAdd }: Props) => {
  const [cinPassport, setCinPassport] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sex, setSex] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const consolidateData = (): IPreActivatedCard => {
    return {
      cinPassport: cinPassport,
      birthDate: birthDate,
      sex: sex,
      beneficiaryName: beneficiaryName,
      phone: phone,
      company: company,
    };
  };

  const handleAddClick = () => {
    const cardData: IPreActivatedCard = consolidateData();
    onAdd(cardData);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"leftSide" "RightSide"`,
          lg: `"leftSide RightSide"`,
        }}
        bg="#ffffff"
        borderRadius={14}
        gap={10}
        paddingY={4}
        paddingX={6}
        mb={"9px"}>
        <GridItem area={"leftSide"}>
          <FormControlComponent
            onChange={setCinPassport}
            label="CIN/Passport"
            type="text"
          />
          <FormControlComponent
            onChange={setBirthDate}
            label="Date de naissance"
            type="date"
          />
          <FormControl>
            <FormLabel>Sex</FormLabel>
            <Select
              placeholder="Select sex"
              onChange={(e) => {
                setSex(e.target.value);
              }}>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem area={"RightSide"}>
          <FormControlComponent
            onChange={setBeneficiaryName}
            label="Nom du beneficiaire"
            type="text"
          />
          <FormControlComponent
            onChange={setPhone}
            label="Telephone"
            type="number"
          />
          <FormControlComponent
            onChange={setCompany}
            label="Entreprise"
            type="text"
          />
        </GridItem>
      </Grid>
      <Stack direction="row" spacing={4} justifyContent={"right"}>
        <Button
          onClick={handleAddClick}
          borderRadius={22}
          colorScheme="teal"
          variant="solid">
          Add
        </Button>
        <Button
          borderRadius={22}
          bg={"#ffffff"}
          variant="solid"
          color={"#034381"}>
          Discard
        </Button>
      </Stack>
    </>
  );
};

export default CreateCardForm;
