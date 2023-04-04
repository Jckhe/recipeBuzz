import { Wrap, WrapItem, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSearchedCards } from "@/store/slices/mainSlice";
import RecipeCard from "../components/RecipeCards";

const IndexContainer = () => {
  const recipeCards = useSelector(selectSearchedCards);

  return (
      <Wrap
        spacing="20px"
        width="80%"
        border="1px solid blue"
        justify="center"
        height="calc(100% - 200px)"
        overflow="scroll"
        overflowX="hidden"
      >
      {recipeCards.length ? (
      recipeCards.map((recipeCard) => (
          <WrapItem key={recipeCard.idMeal}>
            <RecipeCard recipe={recipeCard} />
          </WrapItem>
        ))
      ) : (
          <Heading size="md" textAlign="center" width="100%">
            Search now to get started!
          </Heading>
      )}
      </Wrap>
      );
};

export default IndexContainer;