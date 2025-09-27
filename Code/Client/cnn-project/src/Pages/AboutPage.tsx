import { Typography, Box } from "@mui/material";
import NavigationMenu from "../components/NavigationMenu";

export default function AboutPage () {
    return (
        <>
            <NavigationMenu />
            <Box sx={{display: "flex", gap: "5px", px: "10px",  flexDirection:"column", justifyContent: "center", mt: "64px"}} >
                <Box>
            <Typography align="center" variant="h5">Project Details</Typography>
            <Typography variant="body1">
                This is my undergraduate senior research project. I am exploring the 
                mathematics behind Convolutional Neural Networks (CNN's). Each page 
                allows users to learn more about the math behind CNN's and 
                upload images to see it working in real-time!
            </Typography>
            <Typography variant="body1" >
                Take a look at some of the links on this website. On the top navigation menu, 
                you may select options from the "Tools" menu.
            </Typography>
            </Box>
            <Box>
            <Typography>About the Author</Typography>
            </Box>
            </Box>
        </>
    )
}