import { Wrap, WrapItem, Heading, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSearchedCards } from "@/store/slices/mainSlice";
import RecipeCard from "../components/RecipeCards";

const IndexContainer = () => {
  const recipeCards = useSelector(selectSearchedCards);

  return (
     <Box
     height="calc(100% - 200px)"
     overflowX="hidden"
     width="80%"
     border="1px solid #66635c"
    borderRadius={10}
     >
         <Wrap
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '10px',
          background: '#E4E4E4',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          background: 'gray',
        },}}
        spacing="20px"
        padding={20}
        overflowX="scroll"
        width="100%"
        justify="center"
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
     </Box>
      );
};

export default IndexContainer;