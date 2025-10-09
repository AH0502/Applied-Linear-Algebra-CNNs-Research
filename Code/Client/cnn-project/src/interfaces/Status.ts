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

export class DynamicPage extends React.Component<Status, {}> {
    public static defaultProps = {
        isLoading: false,
        isUploaded: false,
        Error: {
            isError: false,
            errorType: null,
            errorMessage: null
        }
    }
}