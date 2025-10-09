import { binary_classification } from "../api/post";
import CustomPage from "../components/CustomPage";
import ImageUploadButton from "../components/ImageUploadButton";
import { defaultStatus, type Status } from "../interfaces/Status";
import { useState } from "react";

export default function BinaryClassificationPage() {

    const [status, setStatus] = useState<Status>(defaultStatus)

    return (
        <CustomPage title="Binary Classification">
            <ImageUploadButton 
                status={status}
                setStatus={setStatus}
                api_call={binary_classification}
            />
        </CustomPage>
    )
}