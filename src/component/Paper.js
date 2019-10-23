import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Graph from "../images/graph.jpg";

//JS CSS for this component
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2)
    },
    button: {
        margin: theme.spacing(1)
    },
    image: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    }
}));

//this component is simply for text explainations 
export default function PaperSheet() {
    const classes = useStyles();

    return (
        <>
            <div className="banner" styles={classes.image}>
                <div className="welcome">
                    <h1>calculation of Sobol Indices</h1>
                    <h3>For High Dimensional Modeling</h3>
                    {/* <a className="button"> Make Analysis</a> */}
                </div>
            </div>


            <header style={{ marginTop: 30, display: "flex" }}>
                <section id="video">
                    <div>
                        <iframe id="video" width="700" height="400" src="https://www.youtube.com/embed/c1D0orDxjSc" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </section>

                <div id="intro" style={{
                    marginTop: 10, padding: 20, fontWeight: 'bold', fontStyle: 'italic',
                    textAlign: "left", lineHeight: 2.5, fontSize: 18
                }}>
                    <p>
                        Want to know which parameters influence your model output?<br />
                        Get an idea of sensitivity analysis but confused about how to use it?<br />
                        Tired of getting results from the complicated algorithms behind it?<br /><br />
                        No worries!<br />
                        Now you can easily solve all the problems with our analysis tool!
            </p>
                </div>

            </header>

            <section id="introduction" style={{ marginTop: -10 }}>
                <div className="title">
                    <h2>Introduction</h2>
                    <div></div>
                </div>
                <div>
                    <img src={Graph} alt="graphS" />
                    <article style={{ paddingTop: 15 }}>
                        <p>
                            Our website provides a very easy access to the sensitivity analysis which can calculate the most influential parameters (first and second Sobol sensitivity indices) of your research models.
                            No need to know anything about the algorithm and have any development tools.
                            What you need to do is just upload your data (csv file) then you can receive the result immediately which shows the sensitivity indices of your model.
                        You can easily download your own results or adjust your parameters to optimize your models.<br /><br />

                            No algorithm, no development, our website is specified for sensitivity analysis.
                    </p>
                    </article>
                </div>
            </section>

            <section id="field">
                <div className="title">
                    <h2>Related Fields</h2>
                    <div></div>
                </div>

                <div id="content">
                    <div>
                        <h2>
                            Environmental Science
                    </h2>
                        <p>
                            Sensitivity analysis can be used to optimize environmental model by helping to understand the contribution
                            of the various parameters to the model output and the system performance in general.
                    </p>
                    </div>

                    <div>
                        <h2>
                            Social Science
                    </h2>
                        <p>
                            Sensitivity analysis is common practice in social sciences. A famous early example is Mroz (1987), who analysed
                            econometric models of female labour market participation. Sensitivity analysis can be used in model-based policy
                            assessment studies and help to assess the robustness of composite indicators, also known as indices.
                    </p>
                    </div>

                    <div>
                        <h2>
                            Chemistry
                    </h2>
                        <p>
                            Sensitivity analysis is common in many areas of physics and chemistry. It can be used for optimal experimental
                            design by identifying the influential parameters from available data and screening out the unimportant ones.
                            Sensitivity analysis can also be used to identify the redundant species and reactions allowing model
                            reduction.
                    </p>
                    </div>

                    <div>
                        <h2>
                            Engineering
                    </h2>
                        <p>
                            Engineering design makes extensive use of computer models to test designs before they are manufactured.
                            Sensitivity analysis allows designers to assess the effects and sources of uncertainties in order to build
                            robust models.
                    </p>
                    </div>
                </div>
            </section>

        </>
    );
}
