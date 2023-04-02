import { Box, Stack, Heading, Text, Highlight } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      borderColor="red.300"
      borderWidth={1}
      backgroundColor="#F0F0F0"
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      flexDirection="column"
    >
      <Stack
        direction="column"
        width="40%"
        marginTop={5}
        borderColor="blackAlpha.200"
        borderWidth={1}
        backgroundColor="white"
        textAlign="center"
        px={7}
        py={12}
      >
        <Heading size="lg">Unlock the World of Flavor.</Heading>
        <Text>
          <Highlight
            query={["RecipeBuzz"]}
            styles={{ px: "1", py: "1", rounded: "full", bg: "teal.100" }}
          >
            Discover a world of delicious and easy-to-make meals with
            RecipeBuzz. Search and save your favorite recipes with ease and speed.
          </Highlight>
          <br/>
          Get started now using the search bar below!
        </Text>
      </Stack>
    </Box>
  );
}
