import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import BankOfAfrica from "../assets/bankOfAfricaLogo.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <Box py={6} bg="white">
      <Grid
        templateColumns="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="space-between"
        px={8}>
        <Text fontWeight="bold" color="#044380">
          ©2023 BANK OF AFRICA. Tous droits réservés
        </Text>
        <Box textAlign="center">
          <Text fontWeight="bold" color="#044380">
            BANK OF AFRICA | Mentions Légales
          </Text>
          {/* <HStack>
            <FaFacebook style={{ marginRight: "10px" }} />
            <FaTwitter style={{ marginRight: "10px" }} />
            <FaLinkedin style={{ marginRight: "10px" }} />
            <FaYoutube style={{ marginRight: "10px" }} />
            <FaInstagram />
          </HStack> */}
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Image
            src={BankOfAfrica}
            alt="Bank of Africa Logo"
            htmlHeight="72px"
            htmlWidth="220px"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default FooterSection;
