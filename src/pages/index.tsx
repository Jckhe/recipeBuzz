import { Box } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import ScrollTopButton from "@/components/ScrollToTop";

export default function Home() {
  return (
    <Box
      border="1px solid green"
      backgroundColor="#d4d2d2"
      display="flex"
      width="100%"
      height="230vh"
      alignItems="center"
      flexDirection="column"
      pb={15}
    >
      <Hero />
      <Search />
      <ScrollTopButton />
    </Box>
  );
}