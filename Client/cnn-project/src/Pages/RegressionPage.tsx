import CustomPage from "../components/CustomPage";
import Plot from "react-plotly.js";
import Interactive from "../components/Interactive";
import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";
import { regression } from "../api/post";

export default function RegressionPage() {
    const [sliderValue, setSliderValue] = useState<number>(1);
    const [isTraining, setIsTraining] = useState<boolean>(false);

    const handleCommittedChange = (value: number) => {
        const response = regression(value);

    }

    return (
        <CustomPage>
            <Interactive 
                title="Regression"
                instructions={`
                Experiement with different values for the nodes and notice what happens
                as you increase or decrease the number of nodes.
                `}>
            <Box>
                <Typography>Number of Neurons</Typography>
                <Slider
                valueLabelDisplay="auto"
                defaultValue={1}
                step={1}
                onChangeCommitted={(_, value: number) => {
                    setSliderValue(value);
                    handleCommittedChange(value);
                }}
                />

            </Box>
            
            <Plot
            data={[
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 320, height: 240, title: {text: 'A Fancy Plot'}} }
        />
        </Interactive>
        </CustomPage>
    );
}