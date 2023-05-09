import {
  Dialog,
  Checkbox,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

type FunctioType = {
  openBack: boolean;
  handleClose: () => void;
};

export function Back({ openBack, handleClose }: FunctioType) {
  return (
    <Dialog open={openBack} onClose={handleClose}>
      <DialogTitle>Monte seu Treino De Costa (Back Day)</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
