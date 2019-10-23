import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { InputLabel, Select, FormControl } from "@material-ui/core"

//JS CSS for this component
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//Detail parameters are changed and kept in this component
export default function DetailParam(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    poly: "4",
    param1: "lasso",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChange1 = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="poly">Poly-Order</InputLabel>
        <Select
          value={values.poly}
          onChange={handleChange1}
          inputProps={{
            name: 'poly',
            id: 'poly',
          }}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>

      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="regression-type">Regression_type</InputLabel>
        <Select
          value={values.param1}
          onChange={handleChange1}
          inputProps={{
            name: 'param1',
            id: 'regression-type',
          }}
        >
          <MenuItem value={"lasso"}>Lasso</MenuItem>
          <MenuItem value={"ard"}>Ard</MenuItem>
          <MenuItem value={"elastic"}>Elastic</MenuItem>
          <MenuItem value={"ordinary"}>ordinary</MenuItem>
        </Select>
      </FormControl>

      <Button
        size="medium"
        variant="contained"
        color="primary"
        onClick={e => {
          console.log(values)
          props.changeAndUpload(values)
        }}
      >
        Change and Upload
      </Button>

    </form>
  );
}
