import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//JS CSS for this component
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

//Detail parameters are changed and kept in this component
export default function DetailParam(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    poly: "4",
    param1: "1",
    param2: "1",
    param3: "1"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Poly-Order"
        className={classes.textField}
        value={values.poly}
        onChange={handleChange("poly")}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Param1"
        value={values.param1}
        className={classes.textField}
        onChange={handleChange("param1")}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Param2"
        value={values.param2}
        className={classes.textField}
        onChange={handleChange("param2")}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Param3"
        value={values.param3}
        className={classes.textField}
        onChange={handleChange("param3")}
        margin="normal"
      />
      <Button
        size="medium"
        variant="contained"
        color="primary"
        onClick={props.changeAndUpload(values)}
      >
        Change and Upload
      </Button>
    </form>
  );
}
