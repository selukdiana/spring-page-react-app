import { springComponents } from "../../../store";
import "./SpringInput.css";

export const SpringInput = ({ setFilteredComponents }) => {
  const inputHandler = (e) => {
    const value = e.target.value;
    setFilteredComponents(() =>
      springComponents.filter(function (elem) {
        return elem.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      })
    );
  };
  return (
    <div className="components__input">
      <input type="text" id="components-search" onInput={inputHandler} />
    </div>
  );
};
