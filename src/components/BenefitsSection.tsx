import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const BenefitsSection: React.FC = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" size="xl" mb={12} color="teal.500">
          Benefits
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <BenefitItem
            title="Easy Management"
            description="Effortlessly manage all aspects of your prepaid cards with our intuitive platform."
            icon={<GiReceiveMoney size={48} color="teal" />}
          />
          <BenefitItem
            title="Mobile Access"
            description="Access your prepaid card accounts anytime, anywhere using our mobile app."
            icon={<FaMobileAlt size={48} color="teal" />}
          />
          <BenefitItem
            title="Customer Support"
            description="Our dedicated support team is available around the clock to assist you with any queries."
            icon={<IoIosPeople size={48} color="teal" />}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

interface BenefitItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      p={6}
      borderRadius={20}
      bg="white"
      shadow="md"
      transition="all 0.3s"
      _hover={{
        shadow: "lg",
        transform: "scale(1.05)",
      }}>
      <Box mb={4}>{icon}</Box>
      <Heading as="h3" size="lg" mb={4} color="teal.500">
        {title}
      </Heading>
      <Text fontSize="lg">{description}</Text>
    </Flex>
  );
};

export default BenefitsSection;
