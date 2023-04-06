import SearchBar from "@/components/SearchBar";
import IndexContainer from "@/containers/IndexContainer";
import { Box, Stack, Heading, Text, Highlight, Link, Button } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Search from "@/components/Search";

export default function Home() {
  return (
    <Box
      border="1px solid green"
      backgroundColor="#d4d2d2"
      display="flex"
      width="100%"
      height="200vh"
      alignItems="center"
      flexDirection="column"
    >
      <Hero />
      <Search />
    </Box>
  );
}