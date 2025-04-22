import { SpringCard } from "./SpringCard";
import { SpringInput } from "./SpringInput/SpringInput";
import { useSelector } from "react-redux";
import styles from "./SpringComponents.module.css";

export const SpringComponents = () => {
  const components = useSelector((state) => state.springComponents.components);
  return (
    <section className={styles.components}>
      <div className="container">
        <SpringInput />
        <div className={styles.content}>
          {!components.length
            ? "No results"
            : components.map((elem) => (
                <SpringCard elem={elem} key={elem.id} />
              ))}
        </div>
      </div>
    </section>
  );
};
