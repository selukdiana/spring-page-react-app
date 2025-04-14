import "./NavigationItem.css";

export const NavigationItem = ({ elem: { title, list } }) => {
  return (
    <li className="list-header__item">
      <a href="#">{title}</a>
      <ul className="list-item__dropdown dropdown-list">
        {list.map((listItem) => (
          <li key={listItem}>
            <a className="dropdown-list__item" href="#">
              {listItem}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
