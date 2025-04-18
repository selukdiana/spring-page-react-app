import styles from "./Input.module.css";

export const Input = ({ name, type = "text" }) => {
  return (
    <div className={styles.inputItem}>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <input type={type} id={name} className={styles.input} />
    </div>
  );
};
