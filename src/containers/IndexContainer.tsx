import { Wrap, WrapItem, Heading, Box, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSearchedCards, selectLoading, selectError } from "@/store/slices/mainSlice";
import RecipeCard from "../components/RecipeCards";

const IndexContainer = () => {
  const recipeCards = useSelector(selectSearchedCards);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  if (isLoading) {
    return (
      <Box
        height="calc(100% - 200px)"
        display="flex"
        justifyContent="center"
        width="80%"
        alignItems="center"
        border="1px solid #66635c"
        borderRadius={10}
      >
          <Spinner size="xl" />
      </Box>
    );
  }

  if (isError !== null) {
    return (
      <Box
      height="calc(100% - 200px)"
      display="flex"
      justifyContent="center"
      width="80%"
      alignItems="center"
      border="1px solid #66635c"
      borderRadius={10}
    >
        <Text>No recipes found! Try again another keyword.</Text>
    </Box>
    )
  }

  return (
    <Box
      height="calc(100% - 200px)"
      overflowX="hidden"
      width="80%"
      border="1px solid #66635c"
      borderRadius={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {recipeCards.length ? (
          <Wrap
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "10px",
                background: "#E4E4E4",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                background: "gray",
              },
            }}
            spacing="20px"
            padding={20}
            overflowY="scroll"
            width="100%"
            justify="center"
          >
            {recipeCards.map((recipeCard) => (
              <WrapItem key={recipeCard.idMeal}>
                <RecipeCard recipe={recipeCard} />
              </WrapItem>
            ))}
          </Wrap>
        )  : (
          <Heading
            fontFamily="junicode"
            size="md"
            textAlign="center"
            width="100%"
          >
            Search now to get started!
          </Heading>
        )}
    </Box>
  );
};

export default IndexContainer;
