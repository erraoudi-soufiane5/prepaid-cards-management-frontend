import React from "react";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";

const ProcessSection = () => {
  return (
    <Box py={20} bg="gray.100">
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" size="xl" mb={12}>
          Process Overview
        </Heading>
        <Flex direction="column" align="center">
          <Flex>
            <ProcessStep
              title="Signing a Contract"
              description="Step 1: Signature d’une convention avec BMCE"
            />

            <ProcessStep
              title="Platform Provision"
              description="Step 2: Mise à disposition de la plateforme de gestion de cartes prépayées"
            />

            <ProcessStep
              title="Card Creation"
              description="Step 3: Création de cartes FastPay anonymes/Nominatives par STG sur la plateforme"
            />
          </Flex>
          <Flex mt={6}>
            <ProcessStep
              title="Card Customization"
              description="Step 4: Personnalisation des cartes par la BMCE et acheminement vers l’agence où STG domicilie son compte"
            />

            <ProcessStep
              title="Card Recharging"
              description="Step 5: Recharge des cartes prépayées par STG sur la plateforme"
            />

            <ProcessStep
              title="Debit/Credit"
              description="Step 6: Débit/Crédit à J+1 des cartes FastPay STG"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const ProcessStep = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Box
    mr={4}
    maxW="sm"
    p={6}
    borderWidth="1px"
    borderRadius={20}
    bg="white"
    flex="1"
    textAlign="center">
    <Heading as="h3" size="lg" mb={4}>
      {title}
    </Heading>
    <Text fontSize="lg">{description}</Text>
  </Box>
);

export default ProcessSection;
