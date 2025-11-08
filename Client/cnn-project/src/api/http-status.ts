export interface HTTPResponse {
    Success: boolean,
    StatusCode: number,
    ClientMessage: string
}

// export const InternalServerError: HTTPResponse = {
//     Success: false,
//     StatusCode: 500,
//     ClientMessage: "The server has encountered an unexpected error. Try again later."
// } as const
