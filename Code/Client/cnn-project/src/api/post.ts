import { InternalServerError } from "./errors";

export async function edge_detection(file: File) {
    const url = "http://127.0.0.1:8000/api/edge-detection";
    const formData = new FormData();
    formData.append("file", file);
    try {
        const response = await fetch(
            url,
            {
                method: "POST",
                body: formData
            }
        );
        return await response.blob();
    }
    catch (e) {
        throw new InternalServerError();
    }
}