export interface Status {
    isLoading: boolean;
    isUploaded: boolean;
    Error: {
        isError: boolean,
        errorType: string | null
        errorMessage: string | null
    }
}