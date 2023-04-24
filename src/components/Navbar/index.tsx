import { AppBar, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { TreeView, TreeItem } from "@mui/lab";

import { NavLink, ContentBar, NavLinkTitle } from "./styled";
import { TreeContent } from "../../pages/Prioritization/styled";

export function Navbar() {
  return (
    <AppBar component="nav">
      <ContentBar>
        <NavLinkTitle to="/">All ABOUT GYM</NavLinkTitle>
        <Box>
          <NavLink to="/prioritization">priorização de treino</NavLink>
        </Box>
      </ContentBar>
    </AppBar>
  );
}
