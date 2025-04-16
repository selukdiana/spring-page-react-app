import { Logo } from "../../components/Logo";
import { HeaderMenu } from "../../components/HeaderMenu";
import style from "./Header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContent}>
          <Logo />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
