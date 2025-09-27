import ImageUploadButton from '../components/ImageUploadButton';
import NavigationMenu from '../components/NavigationMenu';
import '../App.css'
import { Box } from '@mui/material';


export default function EdgeDetectionPage() {

 // TODO: Design homepage.
  return (
    <Box sx={{display:"flex", flexDirection: "column" }}>
      <NavigationMenu />
      <Box sx={{display: "flex", justifyContent: "center", mt: "64px"}} >
        <ImageUploadButton />
      </Box>
      </Box>
  )
}
