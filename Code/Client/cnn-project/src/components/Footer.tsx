import { Box, Grid, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer() {
    return (
            <Box border={1} m={2}>
              <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={3}
                justifyContent="center"
                alignItems="center">
                    <Grid>
                        <Typography variant="h3">Deep Learning</Typography>
                        <Typography variant="h5">A Mathematical Exploration</Typography>
                    </Grid>
                    <Grid display="flex" flexDirection="column">
                        <Typography variant="h6">Project Info</Typography>
                        <Typography>Alex Hagopian</Typography>
                        <Typography>Rivier University</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6">Technologies</Typography>
                    </Grid>
                    <Grid>
                        <IconButton target="_blank" href="https://github.com/AH0502/Applied-Linear-Algebra-CNNs-Research">
                            <GitHubIcon />
                        </IconButton>
                        
                    </Grid>

              </Grid>
            </Box>
    )
}