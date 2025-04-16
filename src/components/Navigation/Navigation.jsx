import { NavigationItem } from "./NavigationItem";
import { headerData } from "../../store";
import { forwardRef } from "react";
import styles from "./Navigation.module.css";

export const Navigation = forwardRef((props, ref) => {
  return (
    <nav className={styles.nav} ref={ref}>
      <ul className={styles.list}>
        {headerData.map((elem) => (
          <NavigationItem elem={elem} key={elem.id} />
        ))}
      </ul>
    </nav>
  );
});
