import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled(NavLink)`
  background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  font-weight: 700;

  &:hover {
    transform: translateY(-2px);
    background: ${({ primary }) => (primary ? "#cd853f" : "#000d1a")};
  }
`;

export default Button;
