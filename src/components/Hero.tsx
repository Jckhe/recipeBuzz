import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Stack, Heading, Highlight, Button, Box, Text } from "@chakra-ui/react";
import Link from "next/link";


export default function Hero() {
  return (
    <Box
    height="100vh"
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderBottom="1px solid black"
    background={`url('https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80')  center center fixed`}
    backgroundSize="cover"
    >
        <Stack
          direction="column"
          width={{ 'base': '80%','md': '50%' }}
          height={{ 'base': '35%', 'md': '50%'}}
          marginTop={5}
          borderColor="blackAlpha.200"
          borderWidth={1}
          backgroundColor="white"
          textAlign="center"
          display="flex"
          justifyContent="center"
          gap={1}
          px={7}
          py={12}
          >
            <Heading
            fontFamily="EBGaramond08-Regular"
            size="lg"
            >
              Unlock a World of Flavor.
            </Heading>
            <Text
            fontFamily="EBGaramond12-Regular"
            >
            <Highlight
              query={["RecipeBuzz"]}
              styles={{ px: "1", py: "1", rounded: "full", bg: "teal.100" }}
            >
              Discover a world of delicious and easy-to-make meals with
              RecipeBuzz. Search and save your favorite recipes with ease and speed.
            </Highlight>
            <br/>
          </Text>
          <Link href="#search">
            <Button rightIcon={<ArrowForwardIcon />} variant="outline" colorScheme="whatsapp">Start searching now!</Button>
          </Link>
      </Stack>
    </Box>
  )
}