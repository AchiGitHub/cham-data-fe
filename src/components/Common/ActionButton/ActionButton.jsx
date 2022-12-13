import React from "react";

import { ButtonWrapper } from "./styles";

const ActionButton = ({ label, action, children }) => {
  return (
    <ButtonWrapper
      onClick={() => {
        action();
      }}
    >
      {label}
      {children}
    </ButtonWrapper>
  );
};

export default ActionButton;
