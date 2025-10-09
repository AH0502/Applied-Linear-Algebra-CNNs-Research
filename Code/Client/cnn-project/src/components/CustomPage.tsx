import React from "react";
import { Box } from "@mui/material";
import NavigationMenu from "./NavigationMenu";

export default class CustomPage extends React.Component<
    {children?: React.ReactNode}
    > {
    render() {
        const {children} = this.props;
        return (
            <Box sx={{display:"flex", flexDirection: "column" }}>
                <NavigationMenu />
                <Box sx={{display: "flex", justifyContent: "center", mt: "64px"}} >
                    {children}
                </Box>
            </Box>
        )
    }
}