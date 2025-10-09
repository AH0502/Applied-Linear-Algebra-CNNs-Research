import ImageUploadButton from '../components/ImageUploadButton';
import NavigationMenu from '../components/NavigationMenu';
import '../App.css'
import { Alert, Box, Snackbar } from '@mui/material';
import { useState } from 'react';
import type { Status } from '../interfaces/Status';
import { edge_detection } from '../api/post';
import CustomPage from './CustomPage';


export default function EdgeDetectionPage() {

  const [status, setStatus] = useState<Status>({
    isLoading: false,
    isUploaded: false,
    Error: {
            isError: false,
            errorType: null,
            errorMessage: null
          },
  });
  
 // TODO: Design homepage.
  return (
    <CustomPage>
        <ImageUploadButton 
          status={status}
          setStatus={setStatus}
          api_call={edge_detection}
          />
          <Snackbar 
            anchorOrigin={{horizontal: "center", vertical: "top"}}
            open={status.Error.isError}
            autoHideDuration={5000}
            onClose={() => setStatus({
              isUploaded: false,
              isLoading: false,
              Error: {
                isError: false,
                errorType: null,
                errorMessage: null
          },
            })}>
              <Alert 
                severity='error'
                variant="filled"
                sx={{ width: "100%"}}
                > 
                {status.Error.errorMessage}
                </Alert>
            </Snackbar>
      </CustomPage>
  )
}
