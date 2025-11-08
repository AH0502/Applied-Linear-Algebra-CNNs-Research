import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import type { Status } from "../interfaces/Status";
import { InternalServerError, UnsupportedMediaType } from "../api/errors";

const FILE_TYPES = "image/png, image/jpg, image/jpeg";

export default function ImageUploadButton(
  {status, setStatus, api_call}: 
  {
    status: Status,
    setStatus: React.Dispatch<React.SetStateAction<Status>>,
    api_call: (file: File) => Promise<Blob>
  }) 
  {
    // Implement this at some point.
    const [blobURL, setBlobURL] = useState<string>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        setStatus({
          Error: {
            isError: false,
            errorType: null,
            errorMessage: null
          },
          isLoading: true,
          isUploaded: false
        })
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          if (!FILE_TYPES.includes(file.type)) { // check if correct file type
            throw new UnsupportedMediaType;
          }
          api_call(event.target.files[0])
            .then(img => {
              if (!img) {
                throw new Error;
              }
              const url = URL.createObjectURL(img);
              setBlobURL(url);
              setStatus({
                isUploaded: true,
                isLoading: false,
                Error: {
                  isError: false,
                  errorType: null,
                  errorMessage: null
              },
              })
            });
          }
      }
      catch (e: unknown) {
        if (e instanceof InternalServerError)
        setStatus({
          isLoading: false,
          isUploaded: false,
          Error: {
            isError: true,
            errorType: e.name,
            errorMessage: e.message
          },
        })
        else if (e instanceof UnsupportedMediaType)
          setStatus({
          isLoading: false,
          isUploaded: false,
          Error: {
            isError: true,
            errorType: e.name,
            errorMessage: e.message
          }});
      }
    }

    if (!blobURL) {

    return (
       <Button 
        color="primary"
        component="label"
        variant='contained'
        startIcon={<CloudUpload />}
      >Upload File
      <input 
        id='image'
        type='file'
        hidden={true}
        multiple={false}
        accept={FILE_TYPES}
        onChange={handleChange}
      />
      </Button>
    ) 
  }

  if (status.isLoading) {
    return <CircularProgress />
  }
  else {
    return (
      <img src={blobURL} />
    )
  }
}