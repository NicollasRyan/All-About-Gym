import { AppBar, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { TreeView, TreeItem } from "@mui/lab";

import { NavLink, ContentBar } from "./styled";
import { TreeContent } from "../../pages/Prioritization/styled";

export function Navbar() {
  return (
    <AppBar component="nav">
      <ContentBar>
        <NavLink to="/">All ABOUT GYM</NavLink>
        <Box>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ maxWidth: 400, overflowY: "auto" }}
          >
            <TreeContent nodeId="1" label="Sabia sobre ...">
              <TreeItem
                nodeId="2"
                label={
                  <NavLink to="/prioritization">priorização de treino</NavLink>
                }
              />
              <TreeItem
                nodeId="3"
                label={
                  <NavLink to="/prioritization">priorização de treino</NavLink>
                }
              />
              <TreeItem
                nodeId="4"
                label={
                  <NavLink to="/prioritization">priorização de treino</NavLink>
                }
              />
            </TreeContent>
          </TreeView>
        </Box>
      </ContentBar>
    </AppBar>
  );
}
