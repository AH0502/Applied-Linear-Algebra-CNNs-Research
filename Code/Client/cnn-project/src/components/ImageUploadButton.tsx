import { useState } from "react";
import { Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { uploadFile } from "../HTTP";

export default function ImageUploadButton() {
    // TODO: Implement this.
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [image, setImage] = useState<Blob | undefined>(undefined);
    const [blobURL, setBlobURL] = useState<string>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setSelectedFile(event.target.files[0]);
        uploadFile(event.target.files[0])
          .then(img => {
            if (!img) {
              throw new Error;
            }
            const url = URL.createObjectURL(img);
            setBlobURL(url);
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
  else {
    return (
      <>
      <img src={blobURL} />
      </>
    )
  }
}