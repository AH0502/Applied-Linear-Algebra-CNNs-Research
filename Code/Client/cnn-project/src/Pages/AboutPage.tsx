import { Typography } from "@mui/material";
import NavigationMenu from "../components/NavigationMenu";

export default function AboutPage () {
    return (
        <>
            <NavigationMenu />

            <Typography variant="h5">About this Project</Typography>
            <Typography variant="body1">
                This is my undergraduate senior research project. I am exploring the 
                mathematics behind Convolutional Neural Networks (CNN's). Each page 
                allows users to learn more about the math behind CNN's and 
                upload images to see it working in real-time!
            </Typography>
        </>
    )
}