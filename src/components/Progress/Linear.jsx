import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,.7)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "9999999999999",
  },
}));

export default function LinearIndeterminate({ aberto }) {
  const classes = useStyles();

  return (
    aberto && (
      <div className={classes.root}>
        <LinearProgress
          color="secondary"
          style={{
            height: "5px",
          }}
        />
      </div>
    )
  );
}
