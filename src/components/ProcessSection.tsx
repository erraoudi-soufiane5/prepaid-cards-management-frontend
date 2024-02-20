import React, { useRef } from "react";
import { Box, Container, Heading, Text, Flex, Grid } from "@chakra-ui/react";
import {
  FiEdit,
  FiBox,
  FiCreditCard,
  FiSettings,
  FiDollarSign,
  FiActivity,
} from "react-icons/fi";
import Xarrow from "react-xarrows";

const ProcessSection = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);
  const step6Ref = useRef(null);

  return (
    <Box py={20} bg="gray.100">
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" size="xl" mb={12} color="#F93276">
          Process Overview
        </Heading>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={12}
          justifyContent="center"
          alignItems="center">
          <ProcessStep
            number={1}
            description="Signing a contract with BMCE"
            icon={<FiEdit />}
            ref={step1Ref}
          />

          <ProcessStep
            number={2}
            description="Platform provision for prepaid card management"
            icon={<FiBox />}
            ref={step2Ref}
          />

          <ProcessStep
            number={3}
            description="Creation of FastPay cards by STG on the platform"
            icon={<FiCreditCard />}
            ref={step3Ref}
          />
          <ProcessStep
            number={6}
            description="Debit/Credit on FastPay STG cards on J+1"
            icon={<FiActivity />}
            ref={step6Ref}
          />

          <ProcessStep
            number={5}
            description="Recharging of prepaid cards by STG on the platform"
            icon={<FiDollarSign />}
            ref={step5Ref}
          />
          <ProcessStep
            number={4}
            description="Customization of cards by BMCE and delivery to the agency where STG domiciles its account"
            icon={<FiSettings />}
            ref={step4Ref}
          />
        </Grid>
        <Flex mt={6}>
          <Xarrow color="#044380" start={step1Ref} end={step2Ref} />
          <Xarrow color="#044380" start={step2Ref} end={step3Ref} />
          <Xarrow color="#044380" start={step3Ref} end={step4Ref} />
          <Xarrow color="#044380" start={step4Ref} end={step5Ref} />
          <Xarrow color="#044380" start={step5Ref} end={step6Ref} />
        </Flex>
      </Container>
    </Box>
  );
};

const ProcessStep = React.forwardRef(
  (
    {
      number,
      description,
      icon,
    }: { number: number; description: string; icon: React.ReactNode },
    ref: React.Ref<HTMLDivElement>
  ) => (
    <Box
      ref={ref}
      maxW="sm"
      p={6}
      borderWidth="1px"
      borderRadius={20}
      bg="white"
      flex="1"
      textAlign="center"
      position="relative"
      width="350px"
      height="200px">
      <Heading as="h3" size="lg" mb={16} position="relative">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          position="relative">
          <Box position="absolute" top={2} left={2}>
            <Text fontSize="4xl" color={"#00B2BB"}>
              0{number}
            </Text>
          </Box>

          <Box
            position="absolute"
            top={2}
            right={2}
            color="#F93276"
            fontSize="4xl">
            {icon}
          </Box>
        </Flex>
      </Heading>

      <Text fontSize="lg">{description}</Text>
    </Box>
  )
);

export default ProcessSection;
