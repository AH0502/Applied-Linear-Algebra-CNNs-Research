import React from "react"
import { Box } from "@mui/material";
import NavigationMenu from "../components/NavigationMenu";


export default function CustomPage({children}: {children: React.ReactNode}) {
    return (
        <Box sx={{display:"flex", flexDirection: "column" }}>
            <NavigationMenu />
            <Box sx={{display: "flex", justifyContent: "center", mt: "64px"}} >
                {children}
            </Box>
        </Box>
    );
}