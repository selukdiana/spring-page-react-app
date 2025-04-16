import { springComponents } from "../../store";
import { SpringCard } from "./SpringCard";
import { SpringInput } from "./SpringInput/SpringInput";
import { useState } from "react";
import styles from "./SpringComponents.module.css";

export const SpringComponents = () => {
  const [filteredComponents, setFilteredComponents] =
    useState(springComponents);
  return (
    <section className={styles.components}>
      <div className="container">
        <SpringInput setFilteredComponents={setFilteredComponents} />
        <div className={styles.content}>
          {!filteredComponents.length
            ? "No results"
            : filteredComponents.map((elem) => (
                <SpringCard elem={elem} key={elem.id} />
              ))}
        </div>
      </div>
    </section>
  );
};
