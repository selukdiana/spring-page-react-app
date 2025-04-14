import { springComponents } from "../../store";
import { SpringCard } from "./SpringCard";
import { SpringInput } from "./SpringInput/SpringInput";
import { useState } from "react";
import "./SpringComponents.css";

export const SpringComponents = () => {
  const [filteredComponents, setFilteredComponents] =
    useState(springComponents);
  return (
    <section className="components">
      <div className="container">
        <SpringInput setFilteredComponents={setFilteredComponents} />
        <div className="components__content">
          {!filteredComponents.length
            ? "No results"
            : filteredComponents.map((elem, index) => (
                <SpringCard elem={elem} key={index} />
              ))}
        </div>
      </div>
    </section>
  );
};
