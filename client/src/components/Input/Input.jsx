import styles from './Input.module.css'

export const Input = ({ formData, name, handler, type, children }) => {
  return (
    <>
      <div className={styles.inputItem}>
        <label htmlFor={name} className={styles.label}>
          {name}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className={styles.input}
          value={formData[name]}
          onChange={handler}
        />
      </div>
      {children && children}
    </>
  )
}
