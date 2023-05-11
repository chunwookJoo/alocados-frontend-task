import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { NAVBAR_ITEM } from "../utils/constants/navbarItem";

const Navbar = () => {
  return (
    <NavbarLayout>
      <NavbarRow>
        <Logo />
        <NavbarRow>
          {NAVBAR_ITEM.map(({ id, toLink, name }) => (
            <StyledLink key={id} to={toLink}>
              {name}
            </StyledLink>
          ))}
        </NavbarRow>
      </NavbarRow>
    </NavbarLayout>
  );
};

export default Navbar;

const NavbarLayout = styled.nav`
  max-width: 1560px;
  margin: 0 auto;
  padding: 2rem;
`;

const NavbarRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;
