import { NavigationItem } from "./NavigationItem";
import { headerData } from "../../store";
import styles from "./Navigation.module.css";

export const Navigation = ({ isSideBarOpened }) => {
  return (
    <nav className={styles.nav} dataIsOpened={isSideBarOpened ? "true" : false}>
      <ul className={styles.list}>
        {headerData.map((elem) => (
          <NavigationItem elem={elem} key={elem.id} />
        ))}
      </ul>
    </nav>
  );
};
