import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  label: string;
  type: string;
  onChange: (value: string) => void;
}

const FormControlComponent = ({ label, type, onChange }: Props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: { target: { value: any } }) => {
    const newValue = e.target.value;
    setInput(newValue);
    onChange(newValue);
  };

  const isError = input === "";
  return (
    <FormControl /*isInvalid={isError}*/ mb={"8px"} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type={type} value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>Enter the employee's {label}.</FormHelperText>
      ) : (
        <FormErrorMessage>{label} is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormControlComponent;
