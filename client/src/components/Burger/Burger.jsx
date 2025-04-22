import styles from "./Burger.module.css";

export const Burger = ({ setIsSideBarOpened }) => {
  const handleBurgerClick = () => {
    setIsSideBarOpened((prevVal) => !prevVal);
  };
  return (
    <>
      <input type="checkbox" className={styles.burgerToggle} id="burger" />
      <label
        htmlFor="burger"
        className={styles.burger}
        onClick={handleBurgerClick}
      >
        <span></span>
      </label>
    </>
  );
};
