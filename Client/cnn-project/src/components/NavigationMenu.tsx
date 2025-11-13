import { Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import MenuButton from "./MenuButton";

export default function NavigationMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = (route?: string) => {
        if (route) {
         setAnchorEl(null);
         navigate(route);
        }
        else {
            setAnchorEl(null);
        }}

    return (
        <AppBar sx={{
            display: "flex",
            position: "fixed",
            top: 0,
            width: "100%",
            justifyContent: "space-evenly",
            bgcolor: "#1F1F1F",
            mb: 64
        }}>
                <Toolbar>
                    <Typography variant="h6">CNN Research Project</Typography>
                    <Box sx={{ display: "flex", mx: "auto"}}>
                    <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                    <MenuButton 
                        props={{
                            label: "Algebraic Foundations",
                            options: [
                                {name: "Rings, Fields, and Vector Spaces", path: "/rings-and-vector-spaces"}
                            ]
                        }}
                    />
                    <Button onClick={handleClick} color="inherit" >Theory</Button>
                    <MenuButton props={{
                        label: "Application",
                        options: [
                            {name: "Regression", path: "/regression"},
                            {name: "Edge-Detection", path: "/edge-detection"},
                            {name: "Binary-Classification", path: "/binary-classification"}
                        ]
                            
                    }} />
                    <Menu 
                        open={open}
                        anchorEl={anchorEl}
                        onClose={() => handleClose()}
                    >
                        <MenuItem onClick={() => handleClose("/convolution")}>Convolution</MenuItem>
                    </Menu>
                    <Button color="inherit" onClick={() => navigate("/references")}>
                        References
                    </Button>
                     
                    </Box>
                </Toolbar>
        </AppBar>
    )
}