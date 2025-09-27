import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { uploadFile } from "../api/post";
import type { Status } from "../interfaces/Status";

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
          isError: false,
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
                isError: false
              })
            });
          
          }
      }
      catch (e) {
        setStatus({
          isLoading: false,
          isUploaded: false,
          isError: true
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