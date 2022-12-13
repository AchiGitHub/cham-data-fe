import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled(NavLink)`
  color: white;
  width: 100%;
`;

const Menubars = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  color: #cd853f;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
  }
`;

const NavBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  HeaderWrapper,
  Logo,
  Menubars,
  NavBarContainer,
  NavBtnContainer,
  NavItem,
  NavItemsContainer,
  NavLink,
};
