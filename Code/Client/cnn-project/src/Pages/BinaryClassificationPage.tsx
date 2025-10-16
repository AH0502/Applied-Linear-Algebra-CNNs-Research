import { binary_classification } from "../api/post";
import CustomPage from "../components/CustomPage";
import ImageUploadButton from "../components/ImageUploadButton";
import { defaultStatus, type Status } from "../interfaces/Status";
import { useState } from "react";
import { Typography } from "@mui/material";
import "better-react-mathjax"

export default function BinaryClassificationPage() {

    const [status, setStatus] = useState<Status>(defaultStatus)

    return (
        <CustomPage title="Binary Classification">
            <Typography></Typography>
            <ImageUploadButton 
                status={status}
                setStatus={setStatus}
                api_call={binary_classification}
            />
            
        </CustomPage>
    )
}