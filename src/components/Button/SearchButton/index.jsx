"use client";

import styles from "./SearchButton.module.css";
import Button from "..";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const handleSearchButton = () => {};

  return (
    <Button style={styles.SearchButton}>
      <FaSearch />
    </Button>
  );
};

export default SearchButton;
