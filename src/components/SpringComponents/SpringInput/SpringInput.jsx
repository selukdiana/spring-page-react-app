import { springComponents } from "../../../store";
import { debounce } from "../../../utils/debounce";
import styles from "./SpringInput.module.css";

export const SpringInput = ({ setFilteredComponents }) => {
  const handleInput = (e) => {
    const value = e.target.value;
    setFilteredComponents(() =>
      springComponents.filter(function (elem) {
        return elem.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      })
    );
  };
  const debouncedInputHandler = debounce(handleInput, 300);
  return (
    <div className="components__input">
      <input
        type="text"
        id={styles.search}
        onInput={debouncedInputHandler}
      />
    </div>
  );
};
