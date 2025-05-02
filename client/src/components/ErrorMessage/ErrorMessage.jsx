import styles from './ErrorMessage.module.css'

export const ErrorMessage = ({ msg }) => {
  return <p className={styles.errorMsg}>{msg}</p>
}
