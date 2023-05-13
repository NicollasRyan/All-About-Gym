import { Dialog, Checkbox } from "@mui/material";

type FunctioType = {
  openBiceps: boolean;
  handleClose: () => void;
};

export function Biceps({ openBiceps, handleClose }: FunctioType) {
  return (
    <Dialog open={openBiceps} onClose={handleClose}>
      Biceps
    </Dialog>
  );
}
