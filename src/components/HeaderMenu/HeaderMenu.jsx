import { useRef } from "react";
import { Burger } from "../Burger";
import { Navigation } from "../Navigation";
import { ThemeToggler } from "../ThemeToggler";
import "./HeaderMenu.css";
export const HeaderMenu = () => {
  const navRef = useRef(null);
  return (
    <div className="header__menu menu-header">
      <Burger navRef={navRef} />
      <Navigation ref={navRef} />
      <ThemeToggler />
    </div>
  );
};
