import { Dialog, Checkbox } from "@mui/material";

type FunctioType = {
  openLeg: boolean;
  handleClose: () => void;
};

export function Leg({ openLeg, handleClose }: FunctioType) {
  return (
    <Dialog open={openLeg} onClose={handleClose}>
      Leg
    </Dialog>
  );
}
