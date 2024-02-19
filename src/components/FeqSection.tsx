import React from "react";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Divider,
} from "@chakra-ui/react";

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I create a new account?",
      answer:
        "To create a new account, simply click on the 'Sign Up' button and fill out the required information.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions to reset your password.",
    },
    {
      question: "How can I reload my prepaid card?",
      answer:
        "You can reload your prepaid card by logging into your account and selecting the reload option in the dashboard.",
    },
    {
      question: "Can I use my prepaid card internationally?",
      answer:
        "Yes, our prepaid cards can be used internationally wherever Visa/Mastercard are accepted.",
    },
    {
      question: "How do I check my card balance?",
      answer:
        "You can check your card balance by logging into your account or by contacting customer support.",
    },
    {
      question: "What fees are associated with the prepaid card?",
      answer:
        "There are no monthly fees associated with our prepaid cards. However, certain transaction fees may apply.",
    },
    {
      question: "Can I transfer funds between cards?",
      answer: "Yes, you can transfer funds between cards within your account.",
    },
  ];

  return (
    <Box py={20} bg="gray.100" borderRadius="xl">
      <Container maxW="container.lg" textAlign="center">
        <Heading as="h2" size="xl" mb={12} color="teal.500">
          FAQ
        </Heading>
        <Accordion bg="white" padding={10} borderRadius={20} allowToggle>
          {faqs.map((faq, index) => (
            <Box key={index}>
              <AccordionItem border="none" borderRadius="xl">
                <AccordionButton _focus={{ outline: "none" }} borderRadius="xl">
                  <Box flex="1" textAlign="left" fontSize="2xl">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize="xl" borderTopRadius="xl">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
              {index < faqs.length - 1 && <Divider />}
            </Box>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FaqSection;
