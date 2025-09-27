import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { uploadFile } from "../api/post";
import type { Status } from "../interfaces/Status";
import { InternalServerError } from "../api/errors";

export default function ImageUploadButton(
  {status, setStatus}: 
  {
    status: Status,
    setStatus: React.Dispatch<React.SetStateAction<Status>>
  }) 
  {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
          setSelectedFile(event.target.files[0]);
          uploadFile(event.target.files[0])
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