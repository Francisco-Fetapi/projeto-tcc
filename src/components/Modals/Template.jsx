import React from "react";
import { Text } from "../../styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import useModal from "../../hooks/useModal";
import { ModalSignUp } from "../../styles/pages/LoginAndSignUp";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <Tooltip
          title={
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "300",
                letterSpacing: "1px",
              }}
            >
              Fechar modal
            </Text>
          }
          arrow
        >
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function FormDialog({
  titulo,
  nomeModal,
  subtitulo,
  children,
  navigateToOnClose,
}) {
  const [open, , handleClose] = useModal(nomeModal);
  const navigate = useNavigate();

  return (
    <ModalSignUp>
      <Dialog
        onClose={handleClose}
        open={open}
        scroll="body"
        maxWidth
        disableBackdropClick
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => navigate(navigateToOnClose)}
        >
          <Text variant="h4" style={{ fontWeight: "bold" }}>
            {titulo}
          </Text>
          <Text variant="subtitle2">{subtitulo}</Text>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </ModalSignUp>
  );
}
