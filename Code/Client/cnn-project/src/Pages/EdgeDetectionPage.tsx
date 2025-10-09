import ImageUploadButton from '../components/ImageUploadButton';
import '../App.css'
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { defaultStatus, onSnackBarClose, type Status } from '../interfaces/Status';
import { edge_detection } from '../api/post';
import CustomPage from '../components/CustomPage';


export default function EdgeDetectionPage() {

    const [status, setStatus] = useState<Status>(defaultStatus)
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
            onClose={() => onSnackBarClose}>
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

