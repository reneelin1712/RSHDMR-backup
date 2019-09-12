import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "../component/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Upload from "./Upload";
import Login from "./Login";

//The function to switch different panels by clicking tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

//JS CSS for TabPanel
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

//Tab component
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

//JS CSS for this whole navigation bar
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  navButton: {
    marginTop: theme.spacing(0.6)
  }
}));

//the navigation bar component
export default function NavTabs({ handleLogin, loginStatus, user }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container spacing={3}>
          {/*Left top icon, we will change it to the website symbol in the future */}
          <Grid item xs={1}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Grid>

          {/*the navigation tabs */}
          <Grid item xs={10}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Home" href="/drafts" {...a11yProps(0)} />
              <LinkTab label="Analysis" href="/trash" {...a11yProps(1)} />
              <LinkTab label="Help" href="/spam" {...a11yProps(2)} />
              <LinkTab label="About" href="/spam" {...a11yProps(3)} />
            </Tabs>
          </Grid>

          {/*login selection menu */}
          <Grid item xs={1}>
            <Login
              handleLogin={handleLogin}
              loginStatus={loginStatus}
              user={user}
            />
          </Grid>
        </Grid>
      </AppBar>

      {/*Corresponding tab panels below */}
      <TabPanel value={value} index={0}>
        <Paper />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Upload />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Help
      </TabPanel>
      <TabPanel value={value} index={3}>
        About
      </TabPanel>
    </div>
  );
}
