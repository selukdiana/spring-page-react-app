import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.description}>
          <p>
            From configuration to security, web apps to big data—whatever the
            infrastructure needs of your application may be, there is a Spring
            Project to help you build it. Start small and use just what you
            need—Spring is modular by design.
          </p>
        </div>
        <div className={styles.btn}>
          <a href="#">Release calendar</a>
        </div>
      </div>
    </section>
  );
};
