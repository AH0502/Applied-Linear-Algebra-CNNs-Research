import { Typography, Box } from "@mui/material";
import NavigationMenu from "../components/NavigationMenu";
import CustomPage from "../components/CustomPage";

export default function AboutPage () {
    return (
            <CustomPage title="About this Project">
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
                    <Box mt={2}>
                        <Typography 
                            variant="h5" 
                            align="center"
                            >
                            About the Author
                        </Typography>
                    </Box>
            </Box>
            </CustomPage>

    )
}