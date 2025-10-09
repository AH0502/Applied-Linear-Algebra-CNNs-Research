from Models.test import classify, preprocess_image
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from EdgeDetection import EdgeDetector
from fastapi.middleware.cors import CORSMiddleware
import io
import keras
import matplotlib.pyplot as plt
from PIL import Image

MODEL_PATH = "/Users/alexanderhagopian/Documents/Rivier/FA25/Vault/MA490/Applied-Linear-Algebra-CNNs-Research/Code/Server/Models/model.keras"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

binary_classifier = keras.models.load_model(MODEL_PATH)

@app.get('/')
async def root():
    return {"message": "Server is running!"}

@app.post("/api/edge-detection")
async def api_edge_detection(file: UploadFile = File(...)):

    try:

        file = file.file.read()
        bytes = EdgeDetector(io.BytesIO(file))
        bytes.seek(0)
        return StreamingResponse(bytes, media_type="image/png")

    except Exception as e:
        return {"Error": e.args}
    
@app.post("/api/binary-classification")
async def binary_classification(file: UploadFile = File(...)):
    try:
        file = file.file.read()
        print("File read.")
        original_image = Image.open(io.BytesIO(file))
        print("Image opened.")
        img = preprocess_image(io.BytesIO(file))
        print("image processed")
        prediction = binary_classifier(img).numpy()[0][0]
        print(prediction)
        prediction = classify(prediction)
        print(prediction)
        plt.imshow(original_image)
        plt.title(f"This is a {prediction}")
        buffer = io.BytesIO()
        plt.savefig(buffer, format="png")
        
        plt.close()

        buffer.seek(0)
        return StreamingResponse(buffer, media_type="image/png")
    
    except Exception as e:
        return {"Error": e.args}
    
        



        