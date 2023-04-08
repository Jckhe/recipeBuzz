import IndexContainer from "@/containers/IndexContainer";
import SearchBar from "./SearchBar";
import { Box, Heading } from "@chakra-ui/react";
import { searchMeals } from "@/pages/api/Search";
import { useState } from "react";
import debounce from "lodash.debounce";
import { useQuery } from "@tanstack/react-query";
import { RecipeCardType } from "@/types/Redux.types";





// This is the component where the searching and display of searched recipe cards will display
// This component is rendered on the index.tsx component in the index page.
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");


  const { data, refetch }: {data?: RecipeCardType[], refetch: any} = useQuery<RecipeCardType[]>(
    ["searchMeals", searchTerm],
    () => searchMeals({query: searchTerm}),
    { enabled: false}
  )

  //helps throttle the query so we dont get rate limited.
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

// DUMMY DATA RECIPE CARD:
// {
//   idMeal: "52771",
//   strMeal: "Spicy Arrabiata Penne",
//   strCategory: "Vegetarian",
//   strArea: "Italian",
//   strInstructions:
//     "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
//   strMealThumb:
//     "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
//   strTags: "Pasta,Curry",
//   strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
//   strIngredient: {
//     "1": "penne rigate",
//     "2": "olive oil",
//     "3": "garlic",
//     "4": "chopped tomatoes",
//     "5": "red chile flakes",
//     "6": "italian seasoning",
//     "7": "basil",
//     "8": "Parmigiano-Reggiano",
//     "9": "",
//     "10": "",
//     "11": "",
//     "12": "",
//     "13": "",
//     "14": "",
//     "15": "",
//     "16": "",
//     "17": "",
//     "18": "",
//     "19": "",
//     "20": ""
//   },
//   strMeasure: {
//     "1": "1 pound",
//     "2": "1/4 cup",
//     "3": "3 cloves",
//     "4": "1 tin",
//     "5": "1/2 teaspoon",
//     "6": "1/2 teaspoon",
//     "7": "6 leaves",
//     "8": "spinkling",
//     "9": "",
//     "10": "",
//     "11": "",
//     "12": "",
//     "13": "",
//     "14": "",
//     "15": "",
//     "16": null,
//     "17": null,
//     "18": null,
//     "19": null,
//     "20": null
//   },
//   isSaved: false
// }