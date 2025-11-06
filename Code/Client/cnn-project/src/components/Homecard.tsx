import {Card, CardContent, CardActions, Box, Button, Typography} from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import BuildIcon from '@mui/icons-material/Build';
import type { SvgIconComponent } from '@mui/icons-material';
import { useNavigate } from 'react-router';

interface HomecardProps {
    title: string;
    mainText: string;
    buttonText: "Learn" | "Explore";
    icon: "theory" | "application";
}


export default function Homecard(
    {title, mainText, buttonText, icon}: HomecardProps) {
        const navigate = useNavigate();
    return (
        <Card sx={{width: "300px"}}>
            <CardContent>
                <Box display="flex" flexDirection="column">
                    <Box flexDirection="row" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">{title}</Typography>
                        {icon == "theory" ? <FunctionsIcon /> : <BuildIcon />}
                    </Box>
                    <Box sx={{ display: "flex", flexWrap:"wrap"}}>
                        <Typography variant="body2">
                            {mainText}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    if (buttonText == "Learn") {
                        navigate("/convolution");

                    }
                    else {
                        navigate("/edge-detection");
                    }
                }}  >{buttonText}</Button>
            </CardActions>
        </Card>
    )
}