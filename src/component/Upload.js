import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Report from "./Report";
import Loading from "./Loading";
import ChangeParam from "./ChangeParam";

//JS CSS for this component
const styles = theme => ({
  root: {},
  appbar: {
    paddingLeft: "35%"
  },

  input: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    height: 150,
    opacity: 0
  },
  txt: {
    border: "1px solid #ced4da",
    marginTop: -150,
    height: 150,
    marginBottom: 10
  },
  report: {
    width: "650"
  }
});

//user can upload CSV file
class Upload extends React.Component {
  state = {
    selectedFile: null, //the csv file
    fileName: "Drag and drop a csv file or Click to select", //csv file name
    data1: [], //dataset 1 from server
    data2: [], //dataset 2 from server
    datastats: [], //dataset 3 from server
    url: "", //the url of the image in the result
    loading: false //set to true while waiting for the data from server
  };

  //the file and file name will be updated to the state of this component
  onChangeHandler = e => {
    //check if the file is in csv format
    if(e.target.files[0].type !=="text/csv"){
      alert("Please use CSV file, other format is not accepted, thanks. ")
    }
    this.setState({
      selectedFile: e.target.files[0],
      fileName: e.target.files[0].name
    });
    console.log(e.target.files[0]);
  };

  //send file to server
  uploadFile = () => {
    //check if a file has been selected
    if(this.state.selectedFile==null){
      alert("Please choose a CSV file first, thanks");
      return
    }
    this.setState({ loading: true });
    const data = new FormData();
    data.append("file", this.state.selectedFile);

    //use Axios to post csv file, then receive the data return by server
    axios
      .post(
        "http://ec2-52-193-188-87.ap-northeast-1.compute.amazonaws.com/upload",
        data
      )
      .then(res => {
        // then update the state using returned data
        console.log(res)
        this.setState({
          data1: Object.entries(res.data.data1),
          data2: Object.entries(res.data.data2),
          datastats: Object.entries(res.data.datastats),
          url: res.data.url,
          loading: false
        });
      });
  };

 //send csv together with changed parameters, this function is not completed yet
  changeAndUpload = values => {
    this.setState({ loading: true });
    console.log(values)
    let data = new FormData();
    data.append("file", this.state.selectedFile);

    //use Axios to post csv file with changed params, then receive the data return by server
    axios
      .post(
        `http://ec2-52-193-188-87.ap-northeast-1.compute.amazonaws.com/uploadwithsetting/${values.poly}/${values.param1}`,
        data
      )
      .then(res => {
        // then update the state using returned data
        this.setState({
          data1: Object.entries(res.data.data1),
          data2: Object.entries(res.data.data2),
          datastats: Object.entries(res.data.datastats),
          url: res.data.url,
          loading: false
        });
      });
  };

  render() {
    const { classes } = this.props;
    const { loading } = this.state;

    return (
      <>
        {/*check the loading status, if true render the loading component */}
        {loading ? <Loading /> : null}
        <Grid container spacing={3}>
          {/*the upload section on the left */}
          <Grid item xs={5}>
            <Card className={classes.card}>
              <CardContent>
                <AppBar
                  position="static"
                  color="default"
                  className={classes.appbar}
                >
                  <Toolbar onClick={this.uploadFile}>
                    <Typography align="center" variant="h6" color="inherit" >
                      UPLOAD
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Typography className={classes.pos} color="textSecondary">
                  <input
                    accept="csv/*"
                    className={classes.input}
                    label="Name"
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={this.onChangeHandler}
                  />
                </Typography>
                <Typography className={classes.txt} color="textSecondary">
                  {this.state.fileName}
                </Typography>

                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                
                  <ChangeParam changeAndUpload={this.changeAndUpload} />

                  <Button
                    size="medium"
                    style={{marginTop:10}}
                    variant="contained"
                    color="primary"
                    onClick={this.uploadFile}
                  >
                    Submit
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/*the report on the right */}
          <Grid item xs={7}>
            <Report className={classes.report} report={this.state} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Upload);
