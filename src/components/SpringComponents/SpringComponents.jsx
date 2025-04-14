import { springComponents } from "../../store";
import { SpringCard } from "./SpringCard";
import { SpringInput } from "./SpringInput/SpringInput";
import "./SpringComponents.css";

export const SpringComponents = () => {
  return (
    <section className="components">
      <div className="container">
        <SpringInput />
        <div className="components__content">
          {!springComponents.length
            ? "No results"
            : springComponents.map((elem, index) => (
                <SpringCard elem={elem} key={index} />
              ))}
        </div>
      </div>
    </section>
  );
};
