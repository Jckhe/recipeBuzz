import {  ButtonGroup, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavMenu() {
  const router = useRouter();

  return (
    <Stack direction="row" marginRight={3} fontFamily="junicode">
      <ButtonGroup colorScheme="teal" size="md">
        <Link href="/">
          <Button isActive={router.pathname === "/"}>Home</Button>
        </Link>
        <Link href="/recipes">
          <Button isActive={router.pathname === "/recipes"}>Recipes</Button>
        </Link>
        <Link href="https://github.com/Jckhe/recipeBuzz" target="_blank">
          <Button>Github</Button>
        </Link>
      </ButtonGroup>
    </Stack>
  );
}
