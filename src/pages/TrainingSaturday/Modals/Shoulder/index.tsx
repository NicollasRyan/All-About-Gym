import { Dialog, Checkbox } from "@mui/material";

type FunctioType = {
  openShoulder: boolean;
  handleClose: () => void;
};

export function Shoulder({ openShoulder, handleClose }: FunctioType) {
  return (
    <Dialog open={openShoulder} onClose={handleClose}>
      Shoulder
    </Dialog>
  );
}
