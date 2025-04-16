import { useRef } from "react";
import { Burger } from "../Burger";
import { Navigation } from "../Navigation";
import { ThemeToggler } from "../ThemeToggler";
import styles from "./HeaderMenu.module.css";
export const HeaderMenu = () => {
  const navRef = useRef(null);
  return (
    <div className={styles.header}>
      <Burger navRef={navRef} />
      <Navigation ref={navRef} />
      <ThemeToggler />
    </div>
  );
};
