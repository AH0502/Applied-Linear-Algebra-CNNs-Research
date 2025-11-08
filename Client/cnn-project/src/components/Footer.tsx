import "../styles/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from "@mui/material";



export default function Footer() {
    return (
            <div className="footer_container">
                <div className='footer_secondary_container'>
                    <IconButton 
                        href="https://github.com/AH0502/Applied-Linear-Algebra-CNNs-Research"
                        target="_blank"
                        >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton 
                        href="https://linkedin.com/in/alexander-hagopian-650a56255"
                        target="_blank"
                        >
                        <LinkedInIcon />
                    </IconButton>
                </div>
                <div className='footer_secondary_container'>
                </div>
            </div>
    )
}