import "./ThemeToggler.css";
import { FaMoon } from "react-icons/fa";

export const ThemeToggler = () => {
  return (
    <label className="menu-header__theme-toggler">
      <input className="theme-toggler__input" type="checkbox" />
      <span className="theme-toggler__slider">
        <FaMoon className="fa-moon" />
      </span>
    </label>
  );
};
