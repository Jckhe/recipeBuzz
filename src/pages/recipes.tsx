import { Box, Heading, Wrap, WrapItem, Divider} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { selectSavedCards } from "@/store/slices/mainSlice";
import BookmarkContainer from "@/containers/BookmarkContainer";

export default function Recipes() {
  const savedCards = useSelector(selectSavedCards);

  return (
    <Box
    backgroundColor="#d4d2d2"
    height="200vh"
    display="flex"
    flexDirection="column"
    alignItems="center"
    width="100%"
    p={10}
    >
      <Heading
      fontFamily="junicode"
      >Saved Recipes</Heading>
      <Divider m={3} orientation='horizontal' />
      {savedCards.length > 0 && <BookmarkContainer savedCards={savedCards} />}
    </Box>
  )
}