import "./Header.css";
import Logo from "../logo/Logo";
import User from "../user/User";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <User userName="Etienne" />
      </div>
    </div>
  );
};

export default Header;
