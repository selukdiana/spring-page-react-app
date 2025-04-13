import { Burger } from "../Burger";
import { Navigation } from "../Navigation";
import { ThemeToggler } from "../ThemeToggler";
import "./HeaderMenu.css";
export const HeaderMenu = () => {
  return (
    <div className="header__menu menu-header">
      <Burger />
      <Navigation />
      <ThemeToggler />
    </div>
  );
};
