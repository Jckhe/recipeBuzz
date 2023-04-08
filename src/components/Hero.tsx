  import { ArrowForwardIcon } from "@chakra-ui/icons";
  import { Stack, Heading, Highlight, Button, Box, Text, } from "@chakra-ui/react";
  import Link from "next/link";
  import React from "react";


//Hero component that is rendered in the main page.
const Hero = React.memo(function Hero() {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="1px solid black"
      background={{
        'base': `url('/assets/Background.jpeg') center center scroll`,
        'sm': `url('/assets/Background.jpeg') center center fixed`
      }}
      bgRepeat="no-repeat"
      backgroundSize={{
        "base": "fill",
        "sm": "cover"
      }}
    >
      <Stack
        direction="column"
        width={{ base: "80%", md: "50%" }}
        height={{ base: "35%", md: "50%" }}
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
});

export default Hero;