from fastapi import FastAPI, UploadFile, File
from EdgeDetection import EdgeDetector
import io

IMAGE_UPLOAD_PATH = './Images/'

app = FastAPI()

@app.get('/')
async def root():
    return {"message": "Server is running!"}

@app.post("/upload")
async def upload(file: UploadFile):

    try:
        file = await file.read()

        EdgeDetector(io.BytesIO(file))

        return {"Message:": "File Upload Successful!"}
    except Exception as e:
        return {"Error": e.args}