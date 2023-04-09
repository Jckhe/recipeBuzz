import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchBarProps } from "@/types/Component.types";

//SearchBar
const SearchBar = ({onInputChange, searchTerm}: SearchBarProps) => {
  // const onPressHandler = () => {
  //   dispatch(fetchMeals(searchTerm));
  //   setSearchTerm("");
  // };

  // const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     onPressHandler();
  //   }
  // };

  return (
    <InputGroup m={10} width={{"base": '75%', "sm": '70%'}}>
      <Input
        variant="filled"
        color="blackAlpha.500"
        borderRadius={0}
        fontFamily="junicode"
        fontWeight="bold"
        placeholder="Search recipes..."
        value={searchTerm}
        textAlign="center"
        textColor="black"
        onChange={onInputChange}
        _focus={{
          backgroundColor: 'white',
          '::placeholder': {
            opacity: 0,
          },
        }}
        // onKeyPress={onKeyPressHandler}
      />
      <InputRightElement >
        {/* <IconButton
          // onClick={onPressHandler}
          aria-label="Search"
          borderRadius={120}
          background="transparent"
          size="sm"
          icon={<SearchIcon />}
        /> */}
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;