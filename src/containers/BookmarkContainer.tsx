import RecipeCard from "@/components/RecipeCards";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { RecipeCardType } from "@/types/Redux.types";
import { BookmarkContainerProps } from "@/types/Component.types";
import { useState } from "react";

export default function BookmarkContainer({savedCards}: BookmarkContainerProps) {
  const [showSavedAlert, toggleSavedAlert] = useState<boolean>(false);
  const [showDeleteAlert, toggleDeleteAlert] = useState<boolean>(false);

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
              <RecipeCard
                toggleSavedAlert={toggleSavedAlert}
                toggleDeleteAlert={toggleDeleteAlert}
                recipe={recipeCard}
              />
          </WrapItem>
        ))
        }
    </Wrap>
  )
}