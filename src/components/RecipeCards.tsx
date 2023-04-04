import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { RecipeCard } from "@/types/Redux.types";

interface RecipeCardProps {
  recipe: RecipeCard;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Box boxShadow="md" borderRadius="lg" overflow="hidden" width="sm" display="flex" flexDirection="column" alignItems="center" justifyItems="center">
      <Image
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      objectFit="cover"
      maxH="32"
      />

      <Box p="6" display="flex" flexDirection="column" alignItems="center">
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="semibold"
          textAlign="center"
          mb="2"
        >
          {recipe.strMeal}
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          color="gray.500"
          fontSize="sm"
        >
          <Text>
            {recipe.strCategory}
          </Text>
        </Flex>
        <Text color="gray.700" fontSize="xs" mt="2" align="center">
            {recipe.strInstructions.slice(0, 100)}...
        </Text>
      </Box>
    </Box>
  );
};

export default RecipeCard;
