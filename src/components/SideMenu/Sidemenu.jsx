import React from "react";
import menuData from "../../data/MenuData";

import Button from "../Common/NavButton";

import {
  ButtonWrapper,
  CloseIcon,
  Icon,
  MenuItem,
  MenuItems,
  MenuWrapper,
  SideMenuContainer,
} from "./styles";

const SideMenu = ({ isOpen, setIsOpen }) => {
  return (
    <SideMenuContainer visible={isOpen}>
      <div style={{ width: "100%" }}>
        <Icon>
          <CloseIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </Icon>
        <MenuWrapper>
          <MenuItems>
            {menuData.map((item, index) => (
              <MenuItem key={index} to={item.link}>
                {item.title}
              </MenuItem>
            ))}
          </MenuItems>
        </MenuWrapper>
      </div>
      <ButtonWrapper>
        <Button primary="true" big="true" to="/contact">
          Contact us
        </Button>
      </ButtonWrapper>
    </SideMenuContainer>
  );
};

export default SideMenu;
