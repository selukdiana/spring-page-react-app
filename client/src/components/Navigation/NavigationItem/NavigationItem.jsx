import styles from "./NavigationItem.module.css";

export const NavigationItem = ({ elem: { title, list } }) => {
  return (
    <li className={styles.listItem}>
      <a href="#">{title}</a>
      <ul className={styles.dropdown}>
        {list.map((listItem) => (
          <li key={listItem}>
            <a className={styles.dropdownItem} href="#">
              {listItem}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
