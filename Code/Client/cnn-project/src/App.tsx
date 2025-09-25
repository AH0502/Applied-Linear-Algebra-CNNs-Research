import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material'
import './App.css'

function App() {

  const handleClick = () => {

    

  }

  return (
    <>
      <Button 
        component="label"
        variant='contained'
        startIcon={<CloudUploadIcon />}
        onClick={handleClick}
      >Upload Files
      </Button>
    </>
  )
}

export default App
