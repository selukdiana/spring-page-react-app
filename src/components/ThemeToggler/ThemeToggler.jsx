import styles from "./ThemeToggler.module.css";
import { FaMoon } from "react-icons/fa";

export const ThemeToggler = () => {
  return (
    <label className={styles.themeToggler}>
      <input className={styles.input} type="checkbox" />
      <span className={styles.slider}>
        <FaMoon className={styles.moon} />
      </span>
    </label>
  );
};
