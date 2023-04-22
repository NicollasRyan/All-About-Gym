import { AppBar, Box } from "@mui/material";
import { NavLink, ContentBar } from "./styled";

export function Navbar() {
  return (
    <AppBar component="nav">
      <ContentBar>
        <NavLink to="/">All ABOUT GYM</NavLink>
        <Box>
          <NavLink to="/prioritization">priorização de treino</NavLink>
        </Box>
      </ContentBar>
    </AppBar>
  );
}
