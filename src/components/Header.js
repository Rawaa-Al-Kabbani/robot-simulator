import { styled } from "styled-components";
import theme from "../theme";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>Robot simulator</Navbar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${theme.colors.darkBlue};
  color: white;
  position: fixed;
  width: 100%;
`;

const Navbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  box-sizing: border-box;
  height: 100px;
`;
