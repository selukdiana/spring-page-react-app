import "./Navigation.css";
import { NavigationItem } from "./NavigationItem";
import { headerData } from "../../store";
import { forwardRef } from "react";

export const Navigation = forwardRef((props, ref) => {
  return (
    <nav className="menu-header__nav nav-header" ref={ref}>
      <ul className="nav-header__list list-header">
        {headerData.map((elem, index) => (
          <NavigationItem elem={elem} key={index} />
        ))}
      </ul>
    </nav>
  );
});
