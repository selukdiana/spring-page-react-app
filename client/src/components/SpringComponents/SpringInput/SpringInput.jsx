import { useDispatch } from "react-redux";
import { debounce } from "../../../utils/debounce";
import { fetchSpringComponentsFilter } from "../../../store/slices/springComponentsSlice";
import styles from "./SpringInput.module.css";

export const SpringInput = () => {
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(fetchSpringComponentsFilter(value));
  };
  const debouncedInputHandler = debounce(handleInput, 300);
  return (
    <div className="components__input">
      <input
        type="text"
        className={styles.search}
        onInput={debouncedInputHandler}
      />
    </div>
  );
};
