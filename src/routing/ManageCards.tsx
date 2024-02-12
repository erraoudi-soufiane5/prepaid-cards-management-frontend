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

const ManageCards = () => {
  return (
    <>
      <TableContainer margin={3} borderRadius={14} bg="#ffffff">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Select</Th>
              <Th>Card Num</Th>
              <Th>CIN</Th>
              <Th>Nom proprietaire</Th>
              <Th>Action</Th>
              <Th>Code operation</Th>
              <Th>Motif operation</Th>
              <Th isNumeric>Montant</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>
              <Td>11110000000890000</Td>
              <Td>IB256687</Td>
              <Td>ER RAOUDI</Td>
              <Td>
                <FormControl>
                  <Select placeholder="Select operation">
                    <option>Recharge</option>
                    <option>Decharge</option>
                    <option>Recalcul de PIN</option>
                  </Select>
                </FormControl>
              </Td>
              <Td>1</Td>
              <Td>
                <FormControl isRequired>
                  <Input placeholder="First name" />
                </FormControl>
              </Td>
              <Td isNumeric>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>
              <Td>11110000000890000</Td>
              <Td>IB256687</Td>
              <Td>ER RAOUDI</Td>
              <Td>
                <FormControl>
                  <Select placeholder="Select operation">
                    <option>Recharge</option>
                    <option>Decharge</option>
                    <option>Recalcul de PIN</option>
                  </Select>
                </FormControl>
              </Td>
              <Td>1</Td>
              <Td>
                <FormControl isRequired>
                  <Input placeholder="First name" />
                </FormControl>
              </Td>
              <Td isNumeric>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>
              <Td>11110000000890000</Td>
              <Td>IB256687</Td>
              <Td>ER RAOUDI</Td>
              <Td>
                <FormControl>
                  <Select placeholder="Select operation">
                    <option>Recharge</option>
                    <option>Decharge</option>
                    <option>Recalcul de PIN</option>
                  </Select>
                </FormControl>
              </Td>
              <Td>1</Td>
              <Td>
                <FormControl isRequired>
                  <Input placeholder="First name" />
                </FormControl>
              </Td>
              <Td isNumeric>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Checkbox defaultChecked></Checkbox>
              </Td>
              <Td>11110000000890000</Td>
              <Td>IB256687</Td>
              <Td>ER RAOUDI</Td>
              <Td>
                <FormControl>
                  <Select placeholder="Select operation">
                    <option>Recharge</option>
                    <option>Decharge</option>
                    <option>Recalcul de PIN</option>
                  </Select>
                </FormControl>
              </Td>
              <Td>1</Td>
              <Td>
                <FormControl isRequired>
                  <Input placeholder="First name" />
                </FormControl>
              </Td>
              <Td isNumeric>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
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
