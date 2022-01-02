import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import useAlert from "../hooks/useAlert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerta() {
  const classes = useStyles();
  const { alert, alert_msg, alert_status, alert_tempo, fechar } = useAlert();

  return (
    <div className={classes.root}>
      <Snackbar
        open={alert}
        autoHideDuration={alert_tempo * 1000}
        onClose={fechar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={fechar} severity={alert_status || "info"}>
          {alert_msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
