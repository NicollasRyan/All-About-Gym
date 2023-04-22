import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const ContentBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #303030;
`;
