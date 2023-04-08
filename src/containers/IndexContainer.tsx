import {
  Wrap,
  WrapItem,
  Heading,
  Box,
  Spinner,
  Text,
  AlertIcon,
  Alert,
  Slide,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "@/store/slices/mainSlice";
import RecipeCard from "../components/RecipeCards";
import { useEffect, useState, useMemo } from "react";
import { IndexContainerProps } from "@/types/Component.types";

const IndexContainer = ({ recipeCards }: IndexContainerProps) => {
  const [showSavedAlert, toggleSavedAlert] = useState<boolean>(false);
  const [showDeleteAlert, toggleDeleteAlert] = useState<boolean>(false);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1605522324043-96094fd06c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    ],
    []
  );
  const [currentImage, setCurrentImage] = useState(images[0]);

  //Rerender for SAVED alerts
  useEffect(() => {
    if (showSavedAlert && !showDeleteAlert) {
      const timeoutId = setTimeout(() => {
        toggleSavedAlert(false);
      }, 3000);
      //clean up
      return () => clearTimeout(timeoutId);
    }
    else {
      toggleDeleteAlert(false)
      const timeoutId = setTimeout(() => {
        toggleSavedAlert(false);
      }, 3000);
      //clean up
      return () => clearTimeout(timeoutId);
    }
  }, [showSavedAlert]);

  //Rerender for DELETE alerts
  useEffect(() => {
    if (showDeleteAlert && !showSavedAlert) {
      const timeoutId = setTimeout(() => {
        toggleDeleteAlert(false);
      }, 3000);
      //clean up
      return () => clearTimeout(timeoutId);
    }
    else {
      toggleSavedAlert(false);
      const timeoutId = setTimeout(() => {
        toggleDeleteAlert(false);
      }, 3000);
      //clean up
      return () => clearTimeout(timeoutId);
    }
  }, [showDeleteAlert]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentImage(images[nextIndex]);
    }, 20000);

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  if (isLoading) {
    return (
      <Box
        background={`linear-gradient(0deg, rgba(123, 127, 131, 0.4), rgba(123, 127, 131, 0.9)), url(${currentImage})`}
        backgroundSize="cover"
        minHeight={{ base: "60vh", sm: "85vh", md: "95vh" }}
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
        minHeight={{ base: "60vh", sm: "85vh", md: "95vh" }}
        display="flex"
        justifyContent="center"
        width={{ base: "95%", sm: "80%" }}
        alignItems="center"
        border="1px solid #66635c"
        borderRadius={10}
      >
        <Text>No recipes found! Try again another keyword.</Text>
      </Box>
    );
  }

  return (
    <Box
      background={`linear-gradient(0deg, rgba(123, 127, 131, 0.4), rgba(123, 127, 131, 0.9)), url(${currentImage})`}
      backgroundSize="cover"
      minHeight={{ base: "60vh", sm: "85vh", md: "95vh" }}
      overflowX="hidden"
      width={{ base: "95%", sm: "80%" }}
      backgroundColor="#787777"
      border="1px solid #66635c"
      borderRadius={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {/* Saved Alert */}
      <Slide
        direction="top"
        in={showSavedAlert}
        unmountOnExit
        style={{ zIndex: 10 }}
      >
        <Alert
          display="flex"
          flexDirection="row"
          justifyContent="center"
          status="success"
          variant="solid"
        >
          <AlertIcon />
          Recipe Saved!
        </Alert>
      </Slide>
      <Slide
        direction="top"
        in={showDeleteAlert}
        unmountOnExit
        style={{ zIndex: 10 }}
      >
        <Alert
          display="flex"
          flexDirection="row"
          justifyContent="center"
          status="success"
          variant="solid"
        >
          <AlertIcon />
          Recipe Un-Saved!
        </Alert>
      </Slide>
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
              <RecipeCard
                toggleSavedAlert={toggleSavedAlert}
                toggleDeleteAlert={toggleDeleteAlert}
                recipe={recipeCard}
              />
            </WrapItem>
          ))}
        </Wrap>
      ) : (
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
