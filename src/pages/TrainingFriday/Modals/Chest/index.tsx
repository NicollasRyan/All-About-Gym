import { Dialog, Checkbox } from "@mui/material";

type FunctioType = {
  openChest: boolean;
  handleClose: () => void;
};

export function Chest({ openChest, handleClose }: FunctioType) {
  return (
    <Dialog open={openChest} onClose={handleClose}>
      Chest
    </Dialog>
  );
}
