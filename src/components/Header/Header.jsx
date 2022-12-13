import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import menuData from "../../data/MenuData";
import Button from "../Common/NavButton";

import SideMenu from "../SideMenu/Sidemenu";

import {
  HeaderWrapper,
  Logo,
  Menubars,
  NavBarContainer,
  NavBtnContainer,
  NavItem,
  NavItemsContainer,
} from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Logo to="/">
        <img src="/logo.png" alt="logo" width={50} />
      </Logo>
      <Menubars>
        <FaBars
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </Menubars>
      <NavBarContainer>
        <NavItemsContainer>
          {menuData.map((item, index) => (
            <NavItem key={index} to={item.link}>
              {item.title}
            </NavItem>
          ))}
        </NavItemsContainer>
        <NavBtnContainer>
          <Button to="/contact">Contact us</Button>
        </NavBtnContainer>
      </NavBarContainer>
    </HeaderWrapper>
  );
};

export default Header;
