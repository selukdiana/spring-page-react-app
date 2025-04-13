import "./Burger.css";

export const Burger = () => {
  return (
    <>
      <input type="checkbox" id="burger-toggle" />
      <label htmlFor="burger-toggle" className="menu-header__burger">
        <span></span>
      </label>
    </>
  );
};
