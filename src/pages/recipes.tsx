import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Recipes() {
  const count = useSelector((state: RootState) => state.mainSlice.value);

  return (
    <Box>
      {count}
      Hi2
    </Box>
  )
}