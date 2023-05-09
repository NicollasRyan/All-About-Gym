import { Dialog, Checkbox } from "@mui/material";

type FunctioType = {
  openBack: boolean;
  handleClose: () => void;
};

export function Back({ openBack, handleClose }: FunctioType) {
  return (
    <Dialog open={openBack} onClose={handleClose}>
      Back
    </Dialog>
  );
}
