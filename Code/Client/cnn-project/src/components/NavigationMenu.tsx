import { Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

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
                    <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
                    <Button onClick={handleClick} color="inherit" >Tools</Button>
                    <Menu 
                        open={open}
                        anchorEl={anchorEl}
                        onClose={() => handleClose()}
                    >
                        <MenuItem onClick={() => handleClose("/edge-detection")}>Edge-Detection</MenuItem>
                        <MenuItem onClick={() => handleClose("/binary-classification")}>Binary Classification</MenuItem>
                        <MenuItem onClick={() => handleClose("/convolution")}>Convolution</MenuItem>
                    </Menu>
                    </Box>
                </Toolbar>
        </AppBar>
    )
}