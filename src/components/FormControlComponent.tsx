import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

interface Props {
  label: string;
  type: string;
  onChange: (value: string) => void;
  validateEmail?: boolean;
}

const FormControlComponent: React.FC<Props> = ({
  label,
  type,
  onChange,
  validateEmail = false,
}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    onChange(newValue);

    // Validate email format if enabled
    if (validateEmail) {
      const regex = /\S+@\S+\.\S+/;
      setError(newValue.length > 0 && !regex.test(newValue));
    }
  };

  const isError = error && validateEmail;

  return (
    <FormControl isRequired isInvalid={isError} mb={"8px"}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} value={input} onChange={handleInputChange} />
      {isError ? (
        <FormErrorMessage>{label} is not a valid email.</FormErrorMessage>
      ) : (
        <FormHelperText>Enter the {label}.</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormControlComponent;
