import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import NavigationMenu from "./NavigationMenu";
import BottomNavMenu from "./BottomNavMenu";
import { theme } from "../main";


export default class CustomPage extends React.Component<
    {
        title: string, 
        children?: React.ReactNode | null
    }> {
    render() {

        return (
            <ThemeProvider theme={theme}>
            <Box sx={{display:"flex", flexDirection: "column", minHeight: "100vh"}}>
                <NavigationMenu />
                <Box sx={{mt: 2, display:"flex", justifyContent:"center"}}>
                    <Typography variant="h5">{this.props.title}</Typography>
                </Box>
                <Box 
                    sx={{display: "flex",
                        alignItems: "center", 
                        flexDirection: "column",
                        flex: 1,
                        mt: "64px"}}>
                    {this.props.children}
                </Box>
                <Box>
                        <BottomNavMenu />
                </Box>
                
            </Box>
            </ThemeProvider>
        )
    }
}