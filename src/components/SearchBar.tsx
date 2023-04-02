import { Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <InputGroup width="40%">
      <Input placeholder="Search recipes..." />
      <InputRightElement>
        <IconButton aria-label="Search" icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;