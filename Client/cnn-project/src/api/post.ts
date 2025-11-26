import { InternalServerError } from "./errors";
import type { ServerResponse } from "../Pages/MultilabelClassificationPage";

async function send_file(endpoint: string, file: File): Promise<Blob> {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(
            url,
            {
                method: "POST",
                body: formData
            }
        )
        return await response.blob();
}


export async function edge_detection(file: File): Promise<Blob> {
    try {
        const response = send_file("edge-detection", file,);
        return response;
    }
    catch (e) {
        throw new InternalServerError();
    }
}

export async function binary_classification(file: File): Promise<Blob> {
    try {
        const response = send_file("binary-classification", file);
        return response;
    } catch (e) {
        throw new InternalServerError();
    }
}

export async function multilabel_classification(file: File): Promise<ServerResponse> {
    try {
        const url = `http://127.0.0.1:8000/api/multilabel_classification`;
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(
                url,
                {
                    method: "POST",
                    body: formData
                }
            )   
            return await response.json();
        } catch (e) {
            throw new Error("Unkown error.")
        }
}
export async function regression(numNeurons: number) {
    try {
        const formData = new FormData();
        formData.append("numNeurons", `${numNeurons}`);


        const response = await fetch(
            "http:127.0.0.1:8000/api/regression",
            {
                method: "POST",
                body: formData
            }
        );
        return response.body;
        
    } catch (e) {
        throw new Error("Unknown Error.");
    }

}