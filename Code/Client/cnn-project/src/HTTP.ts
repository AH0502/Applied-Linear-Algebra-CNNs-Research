export async function uploadFile(file: File) {
    const url = "http://127.0.0.1:8000/upload";
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
        return await response.blob()
    }
    catch (e) {
        console.error(e);
    }
}