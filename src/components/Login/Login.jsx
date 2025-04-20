import { Form, redirect } from "react-router";
import styles from "./Login.module.css";

export const redirectToHomePage = async ({ request }) => {
  const formData = await request.formData();
  if (
    formData.get("username") === "admin" &&
    formData.get("password") === "1234"
  ) {
    return redirect("/?isAuth=true");
  } else {
    return redirect("/?isAuth=false");
  }
};

export const Login = () => {
  return (
    <section className="login">
      <div className={styles.content}>
        <Form className={styles.form} method="post">
          <div className={styles.inputItem}>
            <label htmlFor="username" className={styles.label}>
              username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              // onChange={handleUsernameChange}
              // value={userData.username}
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="password" className={styles.label}>
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              // onChange={handlePasswordChange}
              // value={userData.password}
            />
          </div>
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </Form>
      </div>
    </section>
  );
};
