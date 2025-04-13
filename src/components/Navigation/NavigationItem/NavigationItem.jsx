import "./NavigationItem.css";

export const NavigationItem = ({ elem: { title, list } }) => {
  return (
    // <a className="components__card" href="#">
    //   <div className="card__header header-card">
    //     <div className="header-card__img">
    //       <img src={img} alt={title} />
    //     </div>
    //     <h3>{title}</h3>
    //   </div>
    //   <div className="card__description">
    //     <p>{description}</p>
    //   </div>
    //   <div className="card__footer footer-card">
    //     <span className="footer-card__version">{version}</span>
    //     <span className="footer-card__addition"> {versionsAddition} versions</span>
    //   </div>
    // </a>
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
