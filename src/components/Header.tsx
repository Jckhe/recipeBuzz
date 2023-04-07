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
      flexDirection={{'base': 'column', 'sm': 'row'}}
      justifyContent={{'base': 'center', 'sm': "space-between"}}
      alignItems={{'base': 'center'}}
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
