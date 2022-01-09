import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Text } from "../../styles";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Confirmar({ onClose, open, children, onSim, onNao }) {
  return (
    <Box maxWidth={200}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Tem certeza?</DialogTitle>
        <DialogContent>
          <Text variant="subtitle1">{children}</Text>
        </DialogContent>
        <DialogActions>
          <Button onClick={onNao || onClose} color="primary">
            Não
          </Button>
          <Button onClick={onSim} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
