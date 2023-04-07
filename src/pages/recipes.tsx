import { Box, Heading, Wrap, WrapItem, Divider} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState, wrapper } from "@/store";
import { selectSavedCards } from "@/store/slices/mainSlice";
import BookmarkContainer from "@/containers/BookmarkContainer";
import { syncSavedCards } from '@/store/slices/mainSlice';
import { useEffect, useLayoutEffect, useState } from "react";


// export const getServerSideProps = wrapper.getServerSideProps(async (context: GetServerSidePropsContext) => {
//   // Get the saved searches array from local storage
//   let savedSearches = [];
//   if (typeof window !== 'undefined') {
//     savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
//   }

//   // Fetch the searched recipes
//   const searchTerm = 'chicken'; // This is just a dummy value for now
//   const recipes = await store.dispatch(searchMeals(searchTerm)).unwrap(); // <-- Use the imported store here

//   return {
//     props: {
//       savedSearches,
//       recipes,
//     },
//   };
// });


export default function Recipes() {
  const savedCards = useSelector(selectSavedCards);
  const dispatch = useDispatch();
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    dispatch(syncSavedCards());
    setIsSynced(true);
  }, [dispatch]);


  if (!isSynced) {
    return null;
  }

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