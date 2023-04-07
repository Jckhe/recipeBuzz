import { Wrap, WrapItem, Heading, Box, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSearchedCards, selectLoading, selectError } from "@/store/slices/mainSlice";
import RecipeCard from "../components/RecipeCards";
import { useEffect, useState, useMemo} from "react";

const IndexContainer = () => {
  const recipeCards = useSelector(selectSearchedCards);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1605522324043-96094fd06c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
    ],
    []
  );
  const [currentImage, setCurrentImage] = useState(images[0]);


  

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentImage(images[nextIndex]);
    }, 20000);

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  if (isLoading) {
    return (
      <Box
        background={`linear-gradient(0deg, rgba(123, 127, 131, 0.4), rgba(123, 127, 131, 0.9)), url(${currentImage})`}
        backgroundSize="cover"
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
      background={`linear-gradient(0deg, rgba(123, 127, 131, 0.4), rgba(123, 127, 131, 0.9)), url(${currentImage})`}
      backgroundSize="cover"
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
    background={`linear-gradient(0deg, rgba(123, 127, 131, 0.4), rgba(123, 127, 131, 0.9)), url(${currentImage})`}
    backgroundSize="cover"
      minHeight="100vh"
      overflowX="hidden"
      width="80%"
      backgroundColor="#787777"
      border="1px solid #66635c"
      borderRadius={3}
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
