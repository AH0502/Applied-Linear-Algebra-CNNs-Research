import type React from "react";
// import { useState } from "react";
import { Card, CardContent, CardHeader, CardActions } from "@mui/material";
// import { defaultStatus, type Status } from "../interfaces/Status";

export default function Interactive({title, instructions, children}: 
    {
        title: string,
        instructions: string, 
        children: React.ReactNode
    }) {
  //  const [status, setStatus] = useState<Status>(defaultStatus);


   // if (!status.isLoading && !status.isUploaded && !status.Error.isError)
        // default state
    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                {instructions}
            </CardContent>
            <CardActions>
                {children}
            </CardActions>
        </Card>
    )
}