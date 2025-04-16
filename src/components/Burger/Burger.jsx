import { useEffect, useState } from "react";
import styles from "./Burger.module.css";

export const Burger = ({ navRef }) => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const handleBurgerClick = () => {
    setIsSideBarOpened((prevVal) => !prevVal);
  };
  useEffect(() => {
    if (isSideBarOpened) {
      navRef.current.dataset.isOpened = "true";
    } else {
      delete navRef.current.dataset.isOpened;
    }
  }, [isSideBarOpened, navRef]);

  return (
    <>
      <input type="checkbox" id={styles.burgerToggle} />
      <label
        htmlFor={styles.burgerToggle}
        className={styles.burger}
        onClick={handleBurgerClick}
      >
        <span></span>
      </label>
    </>
  );
};
