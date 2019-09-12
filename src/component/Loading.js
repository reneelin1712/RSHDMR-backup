import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

//JS CSS for this component
const styles = {
  loading: {
    width: "100%",
    zIndex: 99,
    position: "absolute",
    height: 1800,
    top: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    paddingTop: "20%"
  }
};

//the transparent waiting page telling user report is not ready yet
export default function Loading() {
  return (
    <>
      <div style={styles.loading}>
        <CircularProgress disableShrink />
        <Typography align="center" variant="h3" color="inherit">
          Loading...
        </Typography>
      </div>
    </>
  );
}
