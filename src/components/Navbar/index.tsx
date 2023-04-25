import { AppBar, Box, Popper } from "@mui/material";

import {
  NavLink,
  ContentBar,
  NavLinkTitle,
  PopperContent,
  Button,
} from "./styled";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <AppBar component="nav">
      <ContentBar>
        <NavLinkTitle to="/">All ABOUT GYM</NavLinkTitle>
        <Box>
          <Button aria-describedby={id} type="button" onClick={handleClick}>
            SAIBA MAIS SOBRE {open ? "" : "..."}
            {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          </Button>
          <PopperContent id={id} open={open} anchorEl={anchorEl}>
            <Box sx={{ p: 1 }}>
              <NavLink to="/prioritization">priorização de treino</NavLink>
            </Box>
            <Box sx={{ p: 1 }}>
              <NavLink to="/Hypertrophy">Hipertrofia</NavLink>
            </Box>
          </PopperContent>
        </Box>
      </ContentBar>
    </AppBar>
  );
}
