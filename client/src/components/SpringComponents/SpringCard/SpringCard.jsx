import { imgs } from "../../../store/slices/springComponentsSlice";
import styles from "./SpringCard.module.css";
export const SpringCard = ({
  elem: { img, title, description, version, versionsAddition },
}) => {
  return (
    <a className={styles.card} href="#">
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={imgs[img]} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div>
        <span className={styles.version}>{version}</span>
        <span className={styles.addition}> {versionsAddition} versions</span>
      </div>
    </a>
  );
};
