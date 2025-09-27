import ImageUploadButton from '../components/ImageUploadButton';
import NavigationMenu from '../components/NavigationMenu';
import '../App.css'
import { Alert, Box, Snackbar } from '@mui/material';
import { useState } from 'react';
import type { Status } from '../interfaces/Status';


export default function EdgeDetectionPage() {

  const [status, setStatus] = useState<Status>({
    isLoading: false,
    isUploaded: false,
    isError: false
  });

  
 // TODO: Design homepage.
  return (
    <Box sx={{display:"flex", flexDirection: "column" }}>
      <NavigationMenu />
      <Box sx={{display: "flex", justifyContent: "center", mt: "64px"}} >
        <ImageUploadButton 
          status={status}
          setStatus={setStatus}
          />
          <Snackbar 
            open={status.isError}
            autoHideDuration={5000}
            onClose={() => setStatus({
              isUploaded: false,
              isLoading: false,
              isError: false
            })}>
              <Alert 
                severity='error'
                variant="filled"
                sx={{ width: "100%"}}
                >
                  Test
                </Alert>
            </Snackbar>
      </Box>
      </Box>
  )
}
