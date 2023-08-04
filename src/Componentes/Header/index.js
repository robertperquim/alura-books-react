import "./Header.css";
import Logo from "../Logo";
import Icons from "../Icons";
import Opcoes from "../Opcoes";

function Header() {
  return (
    <header className="App-Header">
      <Logo />
      <Opcoes />
      <Icons />
    </header>
  );
}

export default Header;
