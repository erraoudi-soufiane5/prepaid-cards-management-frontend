import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

interface FeatureItemProps {
  title: string;
  description: string;
  iconUrl: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  iconUrl,
}) => {
  return (
    <Box textAlign="center">
      <Box mx="auto" maxW="200px">
        <Image src={iconUrl} alt={title} boxSize="200px" mb={6} />
        <Heading as="h3" size="lg" mb={4}>
          {title}
        </Heading>
      </Box>
      <Text fontSize="lg">{description}</Text>
    </Box>
  );
};

export default FeatureItem;
