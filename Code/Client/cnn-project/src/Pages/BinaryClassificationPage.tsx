import { binary_classification } from "../api/post";
import CustomPage from "../components/CustomPage";
import ImageUploadButton from "../components/ImageUploadButton";
import { defaultStatus, type Status } from "../interfaces/Status";
import { useState } from "react";
import { Typography } from "@mui/material";
import "better-react-mathjax"
import Interactive from "../components/Interactive";

export default function BinaryClassificationPage() {

    document.title = "Binary Classification"

    const [status, setStatus] = useState<Status>(defaultStatus)

    return (
        <CustomPage title="Binary Classification">
            <Typography></Typography>
            <Interactive 
            title="Binary Classifier"
            instructions={
                `Have a pet? Upload an image of your cat or dog
                and see for yourself how a binary classifier works!
             `
             }>
            <ImageUploadButton 
                status={status}
                setStatus={setStatus}
                api_call={binary_classification}
            />
            </Interactive>
            
        </CustomPage>
    )
}