import { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "@/store/slices/mainSlice";
import { RootState, AppDispatch } from "@/store";
import { ThunkDispatch, Action } from "@reduxjs/toolkit";

//SearchBar
const SearchBar = () => {
  const dispatch: ThunkDispatch<RootState, undefined, Action> =
    useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState("");

  const onPressHandler = () => {
    dispatch(fetchMeals(searchTerm));
    setSearchTerm("");
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <InputGroup width="40%">
      <Input
        variant="filled"
        color="blackAlpha.500"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={onInputChange}
      />
      <InputRightElement>
        <IconButton
          onClick={onPressHandler}
          aria-label="Search"
          icon={<SearchIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
