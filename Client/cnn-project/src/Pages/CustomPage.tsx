import React from "react"
import { Box } from "@mui/material";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";


export default function CustomPage({children}: {children: React.ReactNode}) {
    return (
        <Box sx={{display:"flex", flexDirection: "column", minHeight: "100vh" }}>
            <NavigationMenu />
            <Box sx={{display: "flex", justifyContent: "center", mt: "64px", flex: 1}} >
                {children}
            </Box>
            <Footer />
        </Box>
    );
}