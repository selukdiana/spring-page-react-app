import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Projects</h1>
        <div className="hero__description">
          <p>
            From configuration to security, web apps to big data—whatever the
            infrastructure needs of your application may be, there is a Spring
            Project to help you build it. Start small and use just what you
            need—Spring is modular by design.
          </p>
        </div>
        <div className="hero__btn">
          <a href="#">Release calendar</a>
        </div>
      </div>
    </section>
  );
};
