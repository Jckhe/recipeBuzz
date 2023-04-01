import { Box, ButtonGroup, Stack, Button } from "@chakra-ui/react";

export default function NavMenu() {
  return (
    <Stack direction='row'>
      <ButtonGroup>
        <Button>Home</Button>
        <Button>Recipes</Button>
        <Button>Github</Button>
      </ButtonGroup>
    </Stack>
  )
}