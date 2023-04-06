import IndexContainer from "@/containers/IndexContainer";
import SearchBar from "./SearchBar";
import { Box, Heading } from "@chakra-ui/react";





export default function Search() {
  return (
    <Box
    width="100%"
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    border="1px solid red"
    >
      <Heading fontFamily="EBGaramond08-Regular">
        Explore, Search, and Save.
      </Heading>
      <SearchBar />
      <IndexContainer />
    </Box>
  )
}