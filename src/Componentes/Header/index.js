import Logo from "../Logo";
import Icons from "../Icons";
import Opcoes from "../Opcoes";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #ffff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Opcoes />
      <Icons />
    </HeaderContainer>
  );
}

export default Header;
