import { useState } from "react";
import { Burger } from "../Burger";
import { Navigation } from "../Navigation";
import { ThemeToggler } from "../ThemeToggler";
import styles from "./HeaderMenu.module.css";
export const HeaderMenu = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  return (
    <div className={styles.header}>
      <Burger setIsSideBarOpened={setIsSideBarOpened} />
      <Navigation isSideBarOpened={isSideBarOpened} />
      <ThemeToggler />
    </div>
  );
};
