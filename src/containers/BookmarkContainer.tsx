import RecipeCard from "@/components/RecipeCards";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { RecipeCardType } from "@/types/Redux.types";


interface BookmarkContainer {
  savedCards: RecipeCardType[]
}


export default function BookmarkContainer({savedCards}: BookmarkContainer) {
  return (
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
    width="90%"
    justify="center"
    padding={3}
    height="100%"
    overflowY="scroll"
    >
        {savedCards.map((recipeCard: RecipeCardType) => (
          <WrapItem key={recipeCard.idMeal}>
            <RecipeCard recipe={recipeCard} />
          </WrapItem>
        ))
        }
    </Wrap>
  )
}