import React from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Image,
  Center,
} from "@chakra-ui/react";
import FeatureItem from "./FeatureItem";
import CardCreationIcon from "../assets/creationIcon.jpg";
import ReloadIcon from "../assets/reloadIcon.png";
import Multiple from "../assets/multiple.png";
import Multiple2 from "../assets/multiple2.png";

const FeaturesSection = () => {
  return (
    <Box py={20}>
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" size="xl" mb={12}>
          Key Features
        </Heading>
        <Stack spacing={12} direction={{ base: "column", md: "row" }}>
          <FeatureItem
            title="Card Creation"
            description="Effortlessly create new prepaid cards for your clients."
            iconUrl={Multiple}
          />
          <FeatureItem
            title="Reload & Discharge"
            description="Enable easy reloading and discharging of prepaid cards."
            iconUrl={ReloadIcon}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
