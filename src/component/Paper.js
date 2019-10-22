import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Graph from "../images/graph.jpg";
import Client from "../images/client.jpg";

//JS CSS for this component
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

//this component is simply for text explainations 
export default function PaperSheet() {
  const classes = useStyles();
  
  return (
    <>
       <section id="video">
            <div>
                <iframe id="video" width="700" height="400" src="https://www.youtube.com/embed/c1D0orDxjSc" frameborder="0" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
        
        <div id="intro">
            <p>
                Really want to know which parameters strongly influence your model output?<br/>
                Get an idea of sensitivity analysis but confused about how to use it?<br/>
                Tired of getting the result from the complicated algorithms behind it?<br/>
                No worries!<br/>
                Now you can easily get the key parameters of your models to help your researches!
            </p>
        </div>

        <section id="introduction">

            <div>
                <img src={Graph} alt="graphS" />

                <article>
                    <h1>
                        Introduction
                    </h1>
                    <p>
                        Our website provides a very easy access to the sensitivity analysis which can calculate the most influential parameters (first and second Sobol sensitivity indices) of your research models. 
                        No need to know anything about the algorithm and have any development tools. 
                        What you need to do is just upload your data (csv file) then you can receive the result immediately which shows the sensitivity indices of your model. 
                        You can easily download your own results or adjust your parameters to optimize your models.<br/><br/>
                        
                        No algorithm, no development, our website is specified for sensitivity analysis.
                    </p>
                </article>
            </div>
        </section>

        <section id="client">
            <div>
                <img src={Client} alt="client"/>

                <article>
                    <h1>
                        Frederick Bennet 
                    </h1>
                    <p>
                        I have a research background in theoretical and experimental molecular physics. For
                        the last 15 years I have been involved in activities aimed at reducing the impacts of
                        poor water quality on the Great Barrier Reef. In my present role I work in a team
                        concerned with modelling the changes in Great Barrier Reef water quality as a function
                        of improved land management practices. Here is my paper on sensitivity analysis of optimizing 
                        research models. <a href="https://www.researchgate.net/publication/321397981_Sensitivity_analysis_of_
                        constituent_generation_parameters_of_an_integrated_hydrological_and_water_quality_model_using_a_GMDH_
                        polynomial_neural_network" target="_blank">Paper Link</a>
                    </p>
                </article>
            </div>
        </section>

        <section id="field">
            <h1>
                Related Field
            </h1>

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
                        Business
                    </h2>
                    <p>
                        In a decision-making problem, the analyst may want to identify cost drivers and other quantities in order 
                        to make an informed decision. The sensitivity analysis can help us to identity which quantities have influence 
                        on our predictions, guide future data collections and so on.
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
