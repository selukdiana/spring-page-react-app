import "./Navigation.css";
import { NavigationItem } from "./NavigationItem";
import { headerData } from "../../store";

export const Navigation = () => {
  return (
    <nav className="menu-header__nav nav-header">
      <ul className="nav-header__list list-header">
        {headerData.map((elem) => (
          <NavigationItem elem={elem} key={elem.title} />
        ))}
      </ul>
    </nav>
  );
};
