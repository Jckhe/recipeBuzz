import { Box, Image, Heading, Text, Flex, IconButton, Spinner } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { saveRecipe, deleteRecipe, selectSavedCards } from "@/store/slices/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { ThunkDispatch, Action } from "@reduxjs/toolkit";
import { RecipeCardProps } from "@/types/Component.types";
import { RecipeCardType } from "@/types/Redux.types";
import SuspenseModal from "./SuspenseModal";
const LazyLoadRecipeModal = React.lazy(() => import("./RecipeModal"))

//RecipeCard Component
//Each recipe object returned from the API will render a RecipeCard component with their details 
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, toggleSavedAlert, toggleDeleteAlert, isLoading }) => {
  const dispatch: ThunkDispatch<RootState, undefined, Action> =
    useDispatch<AppDispatch>();
  const savedCards = useSelector(selectSavedCards);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isSaved = savedCards.some((savedCard: RecipeCardType) => savedCard.idMeal === recipe.idMeal);

  const handleSaveClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    if (isSaved) {
      dispatch(deleteRecipe(recipe.idMeal));
      toggleDeleteAlert(true)
    } else {
      dispatch(saveRecipe(recipe));
      toggleSavedAlert(true)
    }
  };

  const handleClick = () => {
    setShowModal(true);
  };

  if (isLoading) {
    return (
      <Box
      border={
        !isHovered
          ? "1px solid rgba(105, 104, 101, 0.7)"
          : "1px solid rgba(105, 104, 101, 1)"
      }
      onClick={handleClick}
      height="md"
      padding={10}
      borderRadius="lg"
      overflow="hidden"
      width="xs"
      backgroundColor="white"
      transform={isHovered ? "scale(1.01)" : "scale(1.00)"}
      cursor="pointer"
      display="flex"
      transition="all 0.1s ease-in-out"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow={isHovered ? "xl" : "md"}
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Spinner size="xl" />
    </Box>
    )
  }

  return (
    <Box
      border={
        !isHovered
          ? "1px solid rgba(105, 104, 101, 0.7)"
          : "1px solid rgba(105, 104, 101, 1)"
      }
      onClick={handleClick}
      height="md"
      padding={10}
      borderRadius="lg"
      overflow="hidden"
      width="xs"
      backgroundColor="white"
      transform={isHovered ? "scale(1.01)" : "scale(1.00)"}
      cursor="pointer"
      display="flex"
      transition="all 0.1s ease-in-out"
      flexDirection="column"
      alignItems="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      boxShadow={isHovered ? "xl" : "md"}
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Box
        position="relative"
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <IconButton
          size="lg"
          colorScheme="teal"
          backgroundColor={"transparent"}
          aria-label={isSaved ? "Remove from saved" : "Save recipe"}
          icon={<StarIcon color={isSaved ? "teal" : "gray.400"} />}
          onClick={(event) => handleSaveClick(event)}
        />
      </Box>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        loading="lazy"
        border="1px solid gray"
        borderRadius={2}
        objectFit="cover"
        maxH="32"
        boxShadow={isHovered ? "xl" : "md"}
        transition="all 0.15s ease-in"
      />

      <Box p="6" display="flex" flexDirection="column" alignItems="center">
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="semibold"
          textAlign="center"
          mb="2"
          fontFamily="junicode"
        >
          {recipe.strMeal}
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          color="gray.500"
          fontSize="sm"
        >
          <Text fontFamily="EBGaramond08-Regular">{recipe.strCategory}</Text>
        </Flex>
        <Text
          fontFamily="EBGaramond08-Regular"
          color="gray.700"
          fontSize="sm"
          mt="2"
          align="center"
        >
          {recipe.strInstructions.slice(0, 100)}...
        </Text>
      </Box>
      {/* Lazy loading the modal will make this more efficient */}
      {showModal && (
      <React.Suspense fallback={<SuspenseModal isOpen={showModal} onClose={() => setShowModal(false)} />}>
        <LazyLoadRecipeModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          recipe={recipe}
        />
      </React.Suspense>)}
    </Box>
  );
};

export default React.memo(RecipeCard);
