import React from "react";

export interface Status {
    isLoading: boolean;
    isUploaded: boolean;
    Error: {
        isError: boolean,
        errorType: string | null
        errorMessage: string | null
    }
}

export const defaultStatus: Status = {
    isLoading: false,
    isUploaded: false,
    Error: {
        isError: false,
        errorType: null,
        errorMessage: null
    }
}

export const onSnackBarClose = (setStatus: React.Dispatch<React.SetStateAction<Status>>) => {
    setStatus({
        isUploaded: false,
        isLoading: false,
        Error: {
            isError: false,
            errorType: null,
            errorMessage: null
        }
    })
}