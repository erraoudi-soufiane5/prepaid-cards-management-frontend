import { useEffect, useState } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import CreateCardForm from "../components/CreateCardForm";
import { IPreActivatedCard } from "../Model/PreActivatedCard";
import PreActivatedCards from "../components/PreActivatedCards";

const CreateCards = () => {
  const [preActivatedCards, setPreActivatedCards] = useState<
    IPreActivatedCard[]
  >([]);

  const handleAddPreActivatedCard = (cardData: IPreActivatedCard) => {
    setPreActivatedCards((prevCards) => [...prevCards, cardData]);
  };

  useEffect(() => {
    console.log("Updated list of preActivatedCards:", preActivatedCards);
  }, [preActivatedCards]);

  return (
    <Box height="100%" overflowY="auto">
      <Grid
        templateAreas={{
          base: `"cardDetails" "insights"`,
          lg: `"preActivated" "addNew"`,
        }}
        padding={3}
        height={"100%"}
        gap={2}>
        <GridItem area="preActivated" minHeight={"100px"}>
          <Text fontSize="3xl" mb={"8px"}>
            Pre Activated Cards
          </Text>
          <PreActivatedCards
            preActivatedCards={preActivatedCards}
            setPreactivatedCards={setPreActivatedCards}
          />
        </GridItem>

        <GridItem area="addNew" minHeight={"400px"}>
          <Text fontSize="3xl" mb={"8px"}>
            Add New Card
          </Text>
          <CreateCardForm onAdd={handleAddPreActivatedCard} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CreateCards;
