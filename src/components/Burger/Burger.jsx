import { useState } from "react";
import "./Burger.css";

export const Burger = ({ navRef }) => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const burgerClickHandler = () => {
    setIsSideBarOpened((prevVal) => !prevVal);
    if (isSideBarOpened) {
      navRef.current.dataset.isOpened = "true";
    } else {
      delete navRef.current.dataset.isOpened;
    }
  };
  return (
    <>
      <input type="checkbox" id="burger-toggle" />
      <label
        htmlFor="burger-toggle"
        className="menu-header__burger"
        onClick={burgerClickHandler}
      >
        <span></span>
      </label>
    </>
  );
};
