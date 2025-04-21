import { useDispatch } from "react-redux";
import { useState } from "react";
import { updataAuthData } from "../../store/slices/authSlice";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogIn = () => {
    dispatch(updataAuthData(formData));
    navigate("/");
  };
  
  return (
    <section className="login">
      <div className={styles.content}>
        <form className={styles.form} action={handleLogIn}>
          <div className={styles.inputItem}>
            <label htmlFor="username" className={styles.label}>
              username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              value={formData.username}
              onChange={handleFormChange}
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
              value={formData.password}
              onChange={handleFormChange}
            />
          </div>
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};
