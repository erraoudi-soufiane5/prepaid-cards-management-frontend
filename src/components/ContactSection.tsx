import React from "react";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <Box bg="white" py={20}>
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" size="xl" mb={12}>
          Contact Us
        </Heading>
        <Text fontSize="xl" mb={8}>
          Have questions or need assistance? Contact our team for support.
        </Text>
        <Button colorScheme="teal" size="lg">
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default ContactSection;
