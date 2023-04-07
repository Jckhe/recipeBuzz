import NavMenu from "./NavMenu";
import { Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      borderColor="blackAlpha.300"
      borderBottomWidth={1}
      display="flex"
      py={3}
      px={10}
      gap={3}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Heading
      fontFamily="junicode"
      >
        Recipe
        <Box as="span" color="teal">
          Buzz
        </Box>
      </Heading>
      <NavMenu />
    </Box>
  );
}
