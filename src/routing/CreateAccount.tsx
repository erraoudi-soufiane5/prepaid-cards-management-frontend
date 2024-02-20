import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Stack,
  Heading,
  Box, // Import the Heading component
} from "@chakra-ui/react";
import FormControlComponent from "../components/FormControlComponent";

const CreateAccount: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [requesterEmail, setRequesterEmail] = useState<string>("");
  const [companyCode, setCompanyCode] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  const [conventionRef, setConventionRef] = useState<string>("");

  const handleCompanyNameChange = (value: string): void => {
    setCompanyName(value);
  };

  const handleAccountNumberChange = (value: string): void => {
    setAccountNumber(value);
  };

  const handleRequesterEmailChange = (value: string): void => {
    setRequesterEmail(value);
  };

  const handleCompanyCodeChange = (value: string): void => {
    setCompanyCode(value);
  };

  const handleProductCodeChange = (value: string): void => {
    setProductCode(value);
  };

  const handleConventionRefChange = (value: string): void => {
    setConventionRef(value);
  };

  return (
    <>
      {/* Add the big heading */}

      <Grid
        templateAreas={{
          base: `"leftSide" "RightSide"`,
          lg: `"leftSide RightSide"`,
        }}
        bg="#ffffff"
        borderRadius={20}
        gap={10}
        paddingY={4}
        paddingX={6}
        mb={"9px"}
        marginTop={10}>
        <GridItem area={"leftSide"}>
          <FormControlComponent
            label="Company Name"
            type="text"
            onChange={handleCompanyNameChange}
          />
          <FormControlComponent
            label="Account Number"
            type="number"
            onChange={handleAccountNumberChange}
          />
          <FormControlComponent
            label="Requester Email"
            type="email"
            onChange={handleRequesterEmailChange}
          />
        </GridItem>
        <GridItem area={"RightSide"}>
          <FormControlComponent
            label="Company Code"
            type="text"
            onChange={handleCompanyCodeChange}
          />
          <FormControlComponent
            label="Product Code"
            type="text"
            onChange={handleProductCodeChange}
          />
          <FormControlComponent
            label="Convention Reference"
            type="text"
            onChange={handleConventionRefChange}
          />
        </GridItem>
      </Grid>
      <Stack direction="row" spacing={4} justifyContent={"center"} mt={2}>
        <Button borderRadius={22} colorScheme="teal" variant="solid">
          Submit
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

export default CreateAccount;
