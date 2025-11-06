import CustomPage from "../components/CustomPage";
import "katex/dist/katex.min.css";
import "../Styles/HomePage.css";
import NeuralNetworkVisualization from "../components/NeuralNetworkVisualization";
import {  Grid,  Typography } from "@mui/material";
import Homecard from "../components/Homecard";
import { FaReact, FaPython } from "react-icons/fa";
import { SiMui, SiTypescript, SiKeras, SiTensorflow, SiLatex, SiFastapi } from "react-icons/si";

const PAGE_TITLE = "Home";

export default function HomePage() {

    document.title = PAGE_TITLE;

    return (
        <CustomPage title={null}>
                <Typography variant="h2" gutterBottom>Deep Learning</Typography>
                <Typography variant="h4" gutterBottom>A Mathematical Exploration</Typography>

                <NeuralNetworkVisualization />

                <Typography sx={{width: "80vw"}} variant="body2" gutterBottom>
                    {`
                    The terms "Deep Learning" and "Neural Networks" are some
                    very popular buzzwords that are thrown around these days, but what 
                    are they exactly? At the core, there's nothing more than matrix
                    multiplication and the chain-rule from your first semester of calculus.
                    `}
                </Typography>

                <Typography variant="h4" gutterBottom>Where to start?</Typography>
                <Grid container columnSpacing={8} rowSpacing={4}>
                    <Grid>
                        <Homecard 
                            title="Theory"
                            mainText={`Learn the mathematics behind deep learning!`}
                            buttonText="Learn"
                            icon="theory"
                        />
                    </Grid>
                    <Grid>
                        <Homecard 
                            title="Application"
                            mainText={`Upload your own images with the edge-detector
                            or the binary-classifier!`}
                            buttonText="Explore"
                            icon="application" />
                    </Grid>
                    
                </Grid>


                <div className="container">
                    <div className="content">
                        <div className="title">
                            <Typography variant="h4">Project Details</Typography>
                        </div>
                        <hr className="solid" />
                        <div className="subtitle">
                            <Typography variant="h5">Motivation</Typography>
                        </div>
                        <div className="mainContainer">
                            <div className="mainText">
                                <p>
                                    {`
                                    This project was created during the Fall 2025 
                                    semester during my senior year of undergrad.
                                    I originally wanted to write a paper to contribute to the 
                                    field field of deep learning. However, I quickly discovered
                                    that I was in way over my head. I wanted to use my software engineering
                                    skills to design a web application to make this topic just a bit
                                    more accessible to the average person.
                                    `}
                                </p>

                            </div>

                        </div>
                        <hr className="solid" />     
                        <div className="subtitle">
                            <Typography variant="h5">Technologies</Typography>
                                                 
                        </div>
                        
                        <div className="mainContainer">
                            <div className="main">
                                <Typography variant="h6">Frontend</Typography>
                                <div className="sideBySide">
                                    <ul className="techList">
                                        <li>React <FaReact /> with TypeScript <SiTypescript /></li>
                                        <li>Material UI <SiMui /></li>
                                        <li>LaTeX <SiLatex /></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="main">
                                <Typography variant="h6">Backend</Typography>
                                <div className="sideBySide">
                                    <ul className="techList">
                                        <li>Python <FaPython /></li>
                                        <li>FastAPI <SiFastapi /></li>
                                        <li>Keras <SiKeras /> with Tensorflow <SiTensorflow /></li>
                                    </ul>
                                </div>
                            </div>
                            

                        </div>
                    
                    </div>
                </div>
                


                
                


        </CustomPage>
    )
}