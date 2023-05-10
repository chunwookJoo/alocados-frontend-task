import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants/routes";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <NavbarLayout>
      <NavbarRow>
        <Logo />
        <NavbarRow>
          <Link to={ROUTES.EXCHANGE_PAGE}>환전하기</Link>
          <Link to={ROUTES.EXCHANGE_HISTORY_PAGE}>거래내역</Link>
        </NavbarRow>
      </NavbarRow>
    </NavbarLayout>
  );
};

export default Navbar;

const NavbarLayout = styled.nav`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const NavbarRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
