import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: #c6c6c6;
  }
`;

export const NavLinkTitle = styled(Link)`
  margin-right: auto;
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: #c6c6c6;
  }
`;

export const ContentBar = styled(Toolbar)`
  display: flex;

  align-items: center;
  background-color: #303030;
`;
