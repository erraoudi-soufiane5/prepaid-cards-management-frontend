import React from "react";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const HeroSection = () => {
  return (
    <Box bg="teal.500" color="white" py={16}>
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h1" size="2xl" mb={6}>
          Welcome to BMCE Prepaid Cards Management
        </Heading>
        <Text fontSize="xl" mb={8}>
          Manage all aspects of prepaid cards, from creation to reload,
          discharge, and more.
        </Text>
        <Button
          colorScheme="whiteAlpha"
          rightIcon={<ChevronRightIcon />}
          size="lg">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
