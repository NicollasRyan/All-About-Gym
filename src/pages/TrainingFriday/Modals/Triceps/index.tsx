import { Dialog, Checkbox } from "@mui/material";

type FunctioType = {
  openTriceps: boolean;
  handleClose: () => void;
};

export function Triceps({ openTriceps, handleClose }: FunctioType) {
  return (
    <Dialog open={openTriceps} onClose={handleClose}>
      MODAL
    </Dialog>
  );
}
