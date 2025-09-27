from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from EdgeDetection import EdgeDetector
from fastapi.middleware.cors import CORSMiddleware
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
async def root():
    return {"message": "Server is running!"}

@app.post("/upload")
async def upload(file: UploadFile = File(...)):

    try:

        file = file.file.read()
        bytes = EdgeDetector(io.BytesIO(file))
        bytes.seek(0)
        return StreamingResponse(bytes, media_type="image/png")

    except Exception as e:
        return {"Error": e.args}