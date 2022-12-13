import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const SideMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 80%;
  height: 100vh;
  background: #cd853f;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  padding: 2rem;
  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(100%)"};
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5rem;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div``;

const CloseIcon = styled(GrClose)`
  font-size: 1.5rem;
  outline: none;
`;

export {
  SideMenuContainer,
  ButtonWrapper,
  CloseIcon,
  Icon,
  MenuItem,
  MenuItems,
  MenuWrapper,
};
