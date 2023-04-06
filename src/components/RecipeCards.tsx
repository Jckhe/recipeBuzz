import { Box, Image, Heading, Text, Flex, IconButton } from "@chakra-ui/react";
import { RecipeCard } from "@/types/Redux.types";
import { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";

interface RecipeCardProps {
  recipe: RecipeCard;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box
      border={
        !isHovered
          ? "1px solid rgba(105, 104, 101, 0.7)"
          : "1px solid rgba(105, 104, 101, 1)"
      }
      padding={10}
      borderRadius="lg"
      overflow="hidden"
      width="xs"
      transform={isHovered ? "scale(1.02)" : "scale(1.00)"}
      cursor="pointer"
      display="flex"
      transition="all 0.15s ease-in"
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
          aria-label="favorite"
          icon={<StarIcon color={isFavorite ? "teal" : "gray.400"} />}
          onClick={handleFavoriteClick}
        />
      </Box>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        border="1px solid gray"
        borderRadius={2}
        objectFit="cover"
        maxH="32"
        boxShadow={isHovered ? "xl" : "md"}
        transition="all 0.15s ease-in"
        _hover={{
          boxShadow: "xl",
        }}
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
    </Box>
  );
};

export default RecipeCard;
