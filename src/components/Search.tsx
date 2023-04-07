import IndexContainer from "@/containers/IndexContainer";
import SearchBar from "./SearchBar";
import { Box, Heading } from "@chakra-ui/react";
import { searchMeals } from "@/pages/api/Search";
import { useState } from "react";
import debounce from "lodash.debounce";
import { useQuery } from "@tanstack/react-query";
import { RecipeCardType } from "@/types/Redux.types";





export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");


  const { data, refetch }: {data?: RecipeCardType[], refetch: any} = useQuery<RecipeCardType[]>(
    ["searchMeals", searchTerm],
    () => searchMeals({query: searchTerm}),
    { enabled: false}
  )

  const debouncedRefetch = debounce(refetch, 1500);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedRefetch()
  };
  

  return (
    <Box
    mt={20}
    className="SearchComponent"
    id="search"
    width="100%"
    height="120vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    >
      <Heading fontFamily="EBGaramond08-Regular">
        Explore, Search, and Save.
      </Heading>
      <SearchBar searchTerm={searchTerm} onInputChange={onInputChange} />
      <IndexContainer recipeCards={data || []} />
    </Box>
  )
}