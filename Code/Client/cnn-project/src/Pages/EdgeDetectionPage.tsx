import ImageUploadButton from '../components/ImageUploadButton';
import '../App.css'
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { defaultStatus, onSnackBarClose, type Status } from '../interfaces/Status';
import { edge_detection } from '../api/post';
import CustomPage from '../components/CustomPage';
import { MathJax } from 'better-react-mathjax';
import Interactive from '../components/Interactive';


export default function EdgeDetectionPage() {

    const [status, setStatus] = useState<Status>(defaultStatus)
 // TODO: Design homepage.
  return (
    <CustomPage title="Edge Detection">
      <MathJax>{`So how do we detect edges in an image?
      Experiment for yourself by uploading any image.`}</MathJax>
      <Interactive
        title='Edge Detection'
        instructions='Select an image to upload.'>
        <ImageUploadButton 
          status={status}
          setStatus={setStatus}
          api_call={edge_detection}
          />
        </Interactive>
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

