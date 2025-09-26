import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { uploadFile } from "../Utils/HTTP";

export default function ImageUploadButton() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [blobURL, setBlobURL] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      if (event.target.files && event.target.files[0]) {
        setSelectedFile(event.target.files[0]);
        uploadFile(event.target.files[0])
          .then(img => {
            if (!img) {
              throw new Error;
            }
            const url = URL.createObjectURL(img);
            setBlobURL(url);
            setIsLoading(false)
          });
        
        }
    }

    if (!blobURL) {

    return (
       <Button 
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

  if (isLoading) {
    return <CircularProgress />
  }

  else {
    return (
      <>
      <img src={blobURL} />
      </>
    )
  }
}