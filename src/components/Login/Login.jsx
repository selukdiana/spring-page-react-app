import { Input } from "./Input";
import styles from "./Login.module.css";

export const Login = () => {
  const login = () => {
    console.log("Login!");
  };
  return (
    <section className="login">
      <div className={styles.content}>
        <form className={styles.form} action={login}>
          <Input name="username" />
          <Input name="password" type="password" />
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};
