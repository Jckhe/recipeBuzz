import styles from "../styles/Header.module.css";
import NavMenu from "./NavMenu";
import { Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      borderColor="blackAlpha.300"
      borderWidth="1px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Heading>RecipeBuzz</Heading>
      <NavMenu />
    </Box>
  );
}
