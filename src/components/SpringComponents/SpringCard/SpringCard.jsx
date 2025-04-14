import "./SpringCard.css";
export const SpringCard = ({
  elem: { img, title, description, version, versionsAddition },
}) => {
  return (
    <a className="components__card" href="#">
      <div className="card__header header-card">
        <div className="header-card__img">
          <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <div className="card__footer footer-card">
        <span className="footer-card__version">{version}</span>
        <span className="footer-card__addition">
          {" "}
          {versionsAddition} versions
        </span>
      </div>
    </a>
  );
};
