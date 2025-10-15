import React from "react";
import { Box, Typography } from "@mui/material";
import NavigationMenu from "./NavigationMenu";

export default class CustomPage extends React.Component<
    {
        title: string, 
        children?: React.ReactNode | null
    }> {
    render() {

        return (
            <Box sx={{display:"flex", flexDirection: "column" }}>
                <NavigationMenu />
                <Box sx={{mt: 2, display:"flex", justifyContent:"center"}}>
                    <Typography variant="h5">{this.props.title}</Typography>
                </Box>
                <Box 
                    sx={{display: "flex",
                        alignItems: "center", 
                        flexDirection: "column",
                        mt: "64px"}}>
                    {this.props.children}
                </Box>
            </Box>
        )
    }
}