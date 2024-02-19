import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import bankOfAfricaLogo from "../assets/bankOfAfricaLogo.jpg";

const AboutUsSection = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={12} color="teal.500">
          FAQ
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between">
          <Box flex="1">
            <Text fontSize="lg" mb={8}>
              BMCE Bank is a leading financial institution dedicated to
              providing innovative banking solutions to businesses and
              individuals. With a focus on customer satisfaction and
              technological advancement, we strive to exceed expectations in
              every aspect of our services.
            </Text>
            <Button colorScheme="teal" size="lg">
              Learn More
            </Button>
          </Box>
          <Box flex="1" ml={{ md: 8 }}>
            <Image
              src={bankOfAfricaLogo}
              alt="About Us"
              borderRadius="lg"
              shadow="lg"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
