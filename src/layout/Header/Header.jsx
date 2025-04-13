import { Logo } from "../../components/Logo";
import { HeaderMenu } from "../../components/HeaderMenu";
import "./Header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Logo />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
