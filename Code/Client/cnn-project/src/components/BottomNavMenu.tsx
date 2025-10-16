import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BottomNavMenu() {
    return (
        <BottomNavigation sx={{
            position: "fixed",
            bottom: 0,
            bgcolor: "#1F1F1F",
            zIndex: 1000,
            width: "100vw"
        }}>
            <BottomNavigationAction label="Next" icon={<NavigateBeforeIcon sx={{color: "White"}} />} />
            <BottomNavigationAction label="Next" icon={<NavigateNextIcon sx={{color: "White"}} />} />

        </BottomNavigation>
    )
}