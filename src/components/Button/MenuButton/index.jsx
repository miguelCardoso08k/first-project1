"use client";

import { FaBars } from "react-icons/fa";
import Button from "..";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const handleMenuButton = () => {
    console.log("funciona");
  };
  return (
    <Button click={handleMenuButton} style={styles.MenuButton}>
      <FaBars />
    </Button>
  );
};

export default MenuButton;
