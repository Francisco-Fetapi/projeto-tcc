import React from "react";
import { Text } from "../../styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
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
      {children}
      {onClose ? (
        <Tooltip title="Fechar modal" arrow>
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
  ...props
}) {
  const [open, , handleClose] = useModal(nomeModal);
  const navigate = useNavigate();

  return (
    <ModalSignUp>
      <Dialog
        onClose={handleClose}
        open={open}
        scroll="body"
        // disableBackdropClick
        // disableEscapeKeyDown
        {...props}
        // fullScreen
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={
            navigateToOnClose ? () => navigate(navigateToOnClose) : handleClose
          }
          component="div"
        >
          <Text
            variant="h5"
            style={{ fontWeight: "bold", marginRight: "60px" }}
          >
            {titulo}
          </Text>
          <Text variant="subtitle2">{subtitulo}</Text>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </ModalSignUp>
  );
}
