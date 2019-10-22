import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
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
import Signup from "./SignUp";
import CSV from "../images/csv.png";
import Result from "../images/result.png";
import Pdf from "../images/pdf.png";
import Image1 from "../images/1.png";
import Image5 from "../images/5.png";
import Image6 from "../images/6.png";
import Image7 from "../images/7.png";
import Image8 from "../images/8.png";
import Image9 from "../images/9.png";
import Image10 from "../images/10.png";
import Image11 from "../images/11.png";
import Image12 from "../images/12.png";


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
export default function NavTabs({ handleLogin, handleLogout, loginStatus, user }) {
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
          <Grid item xs={9}>
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
              handleLogout={handleLogout}
              user={user}
            />
          </Grid>
          {loginStatus ? null
            :
            <Grid item xs={1}>
              <Signup />
            </Grid>}
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
        {
          <>
            <section class="step">
              <h1>User Guide</h1>
              <p>When you first enter the home page, you can see there is an introduction about our website.
                  Click at the button "Analysis", you can jump to the analysis page.
        </p>
              <h2>Step 1 Upload CSV file</h2>
              <p>In this page, you can upload your csv file. And ensure your csv file is under this format:</p>
              <img src={CSV} class="img-thumbnail" alt="Cinque Terre" />
              <p>The figure was our example CSV showed for you.
                  The columns named “usle”, “gully”, “bd”, “fp”, “remob”, “set”are independent
            variables. The last column named “Y” is dependent variable.</p>
              <p>Ensure you have "X" and one column "Y" in your csv file.</p>
              <h2>Step 2 Analysis the CSV file</h2>
              <p>When you see the webpage showing "Processing" whcih means our backend algorithm is analysis your csv file.
                  So you can waiting for your result.
        </p>
              <h2>Step 3 Get your analysis result</h2>
              <p>After procrssing is over, the analysis result will be shown on the right side of the website.
                  And you can clearly see your analysis result like the figure below showing.
        </p>
              <figure>
                <img src={Result} class="img-thumbnail" alt="Cinque Terre" />
              </figure>

              <h2>Step 4 Download your result report</h2>
              <p>At the bottom of website, there is a button "Download". Click on the button, you can
            download your result report which is a pdf format in your local machine. </p>
              <img src={Pdf} class="img-thumbnail" alt="Cinque Terre" />
              <h2>Another tips of our website</h2>
              <p>You can see more introduction about our project in the home page, and there is a vidoe telling our purpose
                  and background of our website. And about the details of the  machine learning model we used, you can turn to
                  the "About Page". That page is focus on the machine learning model and how the model works.
        </p>
              <p class="bg-success text-white">Thank you for reading!</p>
            </section>

          </>

        }
      </TabPanel>
      <TabPanel value={value} index={3}>
        {
          <>
            <section id="SA">
            <h1>Background</h1>
            <h2>Sensitivity Analysis Introduction</h2>
            <div>
                <p>
                    Sensitivity analysis allows the identification of the parameter or set of parameters that have the greatest influence on the model output. It consequently provides useful insight into which model input contributes most to the variability of the model output. Sensitivity analysis has been widely used in fields, such as risk assessment, economics, and engineering, and it has become instrumental in the systems pharmacology arena to guide the understanding and development of a complex model. The application of sensitivity analysis can be summarized as: (i) understanding the input–output relationship, (ii) determining to what extent uncertainty in structural model parameters contribute to the overall variability in the model output, (iii) identifying the important and influential parameters that drive model outputs and magnitudes, and (iv) guiding future experimental designs.  For model builders and users, it is also a useful tool to check the model structure and uncertainty around the input parameters, and feedback into the model refinement to gain additional confidence in the model. Especially in a very complex model, the results of sensitivity analysis will help the model builders to focus on the critical parameters that determine the model output. <em>Figure 1</em> the steps of sensitivity analysis in guidance of an experimental design, parameter estimation during the model establishment, and qualification processes. 
                </p>
                
                <img src={Image1}alt="img1" width="300px"  height ="300px" />
                <p>Figure 1</p>
                <p>The flow chart and steps of data analysis, sensitivity analysis, the model establishment and qualification process. Sensitivity analysis can be used to guide the experiment design and throughout the model development process.</p>
                
            </div>

        </section>

        <section id="GMDH">
            <h2>Group Method of Data Handling </h2>
            <div>
                <p>Group Method of Data Handling (GMDH) is a kind of inductive algorithms which has great performance on selecting optimal model structure and increasing algorithms accuracy. Multiple inputs with one output GMDH model is a subset of components of the base function:</p>
                <img src="images/2.png" alt="" />
                <p>Where f would be function for the responding input x_i, a_i would be coefficients for the responding f. In order to find the best solution, GMDH will consider different subsets of base function which called partial model, it will gradually increase the number of partial model components and find a model structure with optimal complexity indicated by the minimum value of an external criterion, and the coefficients would be estimated by the least squares method.</p>
                <p>This website is based on the client’s paper, the objective of the GMDH algorithms is the construction of a high-order Kolmogorov-Gabor polynomial of the form:</p>
                <img src="images/3.png" alt="" />
                <p>This model is also known as polynomial neural networks. The basic approach of GMDH is each neuron in the network receives input from exactly two other neurons with the exception of the neurons representing the input layer. The two inputs x_i and x_j are then combined to produce a partial descriptor based on the simple quadratic transfer function:</p>
                <img src="images/4.png" alt="" />
            </div>
        </section>

        <section id="RSHDMR">
            <h2>RS-HDMR Introduction</h2>
            <div>
                <p>Random sampling high dimensional model representation (RS-HDMR) provide an approach to figure out the input-output mapping of a model in a small number of iterations. Variance based sensitivity indices could be automatic determined to rank the importance of the parameter.</p>
                <p>In order to reduce the overall sampling effort, RS-HDMR can employ different analytical basis functions to approximate the RS-HDMR component functions. Only one set of random Input-output samples is necessary to determine all the RS-HDMR component functions, and a few hundred samples may give a satisfactory approximation. Regardless of the dimension of the input variable space. (Li, Wang, and Rabitz 2002) </p>
            </div>
            
        </section>
        <section id = "sobol">
            <h2>Sobol Indices Introduction</h2>
            <div>
                <p>Sobol's method is based on decomposition of the model output variance into summands of variances of the input parameters in increasing dimensionality. Sobol sensitivity analysis determines the contribution of each input parameter and their interactions to the overall model output variance.</p>
                <p>Sobol sensitivity analysis is intended to determine how much of the variability in model output is dependent upon each of the input parameters, either upon a single parameter or upon an interaction between different parameters. The decomposition of the output variance in a Sobol sensitivity analysis employs the same principal as the classical analysis of variance in a factorial design. It should be noted that Sobol sensitivity analysis is not intended to identify the cause of the input variability. It indicates what impact and to what extent it will have on model output. </p>
                <p>Sobol sensitivity analysis has several features listed as the following:</p>
                <ul>
                    <li>No assumption between model input and output</li>
                    <li>Evaluation of the full range of each input parameter variation and interactions between parameters</li>
                    <li>High computation intensity being the main drawback</li>
                </ul>
                <p>There are important steps of Sobol sensitivity analysis, which will be discussed in greater detail in the following sections and are shown in <em>Figure 2</em> First, a parameter sequence is generated using Sobol sequence. Sobol sequence, first proposed by Russian scientist I.M. Sobol, is a quasirandomized, low‐discrepancy sequence. Low‐discrepancy sequences typically sample space more uniformly than completely random sequences. Algorithms which use such sequences may have superior convergence. The generated parameter sets are subsequently used to simulate the model outputs. </p>
                
                <img src={Image5} alt=""  width="300px"  height ="300px" />
                <p>Figure 2</p>
                <p>The flow chart and steps in implementation of a Sobol sensitivity analysis. There are two main steps: pre‐Sobol and Sobol sensitivity analysis. The Sobol sensitivity analysis is divided into four steps: generating parameter sets, running and simulation the model output with the generated parameter sets, calculating, and analyzing the total‐, first‐, and second‐order and higher‐order Sobol sensitivity indices.</p>
                
                <p>As for mathematical details, any numerical model could be seen as function:</p>
                <img src={Image6} alt="" />
                <p>where X would be a vector of d model inputs "x_1,x_2,... x_i "and they should be independently and uniformly distributed within the unit hypercube, i.e. X_i∈[0,1] for i=1,2,…d, then f(X) could be decomposed as below:</p>
                <img src={Image7} alt="" />
                <p>where f_0 is a constant and f_i is a function of X_i, f_ij is a function of X_i and X_j. Make it squared and integrated, then it would be like:	</p>
                <img src={Image8} alt="" />
                <p>which could also be rewritten as:</p>
                <img src={Image9} alt="" />
                <p>where: </p>
                <img src={Image10} alt=""/>
                <p>Based on that, the First-order indices could be seen as:</p>
                <img src={Image11} alt="" />
                <p>And the Second-order indices could be seen as:</p>
                <img src={Image12} alt="" />
                <p>And that is what we need eventually. </p>
                <p>This website is based on client’s paper, it will use GMDH constructing a random sampling high dimensional model representation (RS-HDMR) to calculate first and second order Sobol sensitivity indices.</p>
            </div>
        </section>
          </>
        }
      </TabPanel>
    </div>
  );
}