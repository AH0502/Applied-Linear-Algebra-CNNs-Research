import CustomPage from "../components/CustomPage";
import "katex/dist/katex.min.css";
import NeuralNetworkVisualization from "../components/NeuralNetworkVisualization";
import { Grid, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <CustomPage>
                <Typography variant="h2" gutterBottom>Deep Learning</Typography>
                <Typography variant="h4" gutterBottom>A Mathematical Exploration</Typography>

                <NeuralNetworkVisualization />

                <Typography variant="body2" gutterBottom>
                    {`
                    The terms "Deep Learning" and "Neural Networks" are some
                    very popular buzzwords that are thrown around these days, but what 
                    are they exactly? At the core, there's nothing more than matrix
                    multiplication and the chain-rule from your first semester of calculus.
                    `}
                </Typography>

                <Typography variant="h4">Where to start?</Typography>
                <Grid container columnSpacing={8} rowSpacing={4}>
                    <Grid>
                        <Typography>Theory?</Typography>
                    </Grid>
                    <Grid>
                        <Typography>Application?</Typography>
                    </Grid>
                    
                </Grid>
                
                


        </CustomPage>
    )
}