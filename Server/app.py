from Models.test import classify, preprocess_image
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import StreamingResponse
from EdgeDetection import BasicBlurFilter, BasicEdgeDetector
from fastapi.middleware.cors import CORSMiddleware
import io
import keras
import matplotlib.pyplot as plt
from PIL import Image, ImageOps
import numpy as np

MODEL_PATH = "./Models/model6.keras"
MULTILABEL_MODEL_PATH = "./Models/emnist_cnn.keras"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

binary_classifier = keras.models.load_model(MODEL_PATH)
emnist_classifier = keras.models.load_model(MULTILABEL_MODEL_PATH)

@app.get('/')
async def root():
    return {"message": "Server is running!"}

@app.post("/api/edge-detection")
async def api_edge_detection(file: UploadFile = File(...)):

    try:

        file = file.file.read()
        byte_stream = io.BytesIO(file)

        bytes = BasicEdgeDetector(byte_stream)
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
        original_image = ImageOps.exif_transpose(original_image)
        print("Image opened.")
        img = preprocess_image(io.BytesIO(file), (128, 128))
        print("image processed")
        prediction = binary_classifier(img).numpy()[0][0]
        print(prediction)
        prediction = classify(prediction)
        print(prediction)
        plt.imshow(original_image)
        plt.title(f"This is a {prediction}")
        plt.axis(False)
        buffer = io.BytesIO()
        plt.savefig(buffer, format="png")
        
        plt.close()

        buffer.seek(0)
        return StreamingResponse(buffer, media_type="image/png")
    
    except Exception as e:
        return {"Error": e.args}
    
@app.post("/api/multilabel_classification")
async def multilabel_classification(file: UploadFile = File(...)):
   
        file = file.file.read()
        print("File read.")
        original_image = Image.open(io.BytesIO(file))
        original_image = ImageOps.exif_transpose(original_image)
        img = Image.open(io.BytesIO(file)).convert('L').resize((28, 28))
        img = np.array(img).astype(np.float32)
        img = (img / 255.0)
        img = 1 - img 

        # plt.imshow(img, cmap="grey")
        # plt.show()

        img = img.reshape(1, 28, 28, 1)

        pred = emnist_classifier(img)

        emnist_uppercase_letters_mapping = {
            10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E',
            15: 'F', 16: 'G', 17: 'H', 18: 'I', 19: 'J',
            20: 'K', 21: 'L', 22: 'M', 23: 'N', 24: 'O',
            25: 'P', 26: 'Q', 27: 'R', 28: 'S', 29: 'T',
            30: 'U', 31: 'V', 32: 'W', 33: 'X', 34: 'Y', 35: 'Z'
        }
        emnist_lowercase_letters_mapping = {
            36: 'a', 37: 'b', 38: 'c', 39: 'd', 40: 'e', 41: 'f', 42: 'g',
            43: 'h', 44: 'i', 45: 'j', 46: 'k', 47: 'l', 48: 'm', 49: 'n',
            50: 'o', 51: 'p', 52: 'q', 53: 'r', 54: 's', 55: 't', 56: 'u',
            57: 'v', 58: 'w', 59: 'x', 60: 'y', 61: 'z'
        }
        emnist_digits_mapping = {i: str(i) for i in range(10)}

        pred_index = np.argmax(pred)
        print(f"Model Confidence: {pred[0][pred_index]}")
        if pred_index > 35:
            return {"prediction": f"{emnist_lowercase_letters_mapping[pred_index]}", "confidence": f"{pred[0][pred_index]}"}
        elif pred_index > 9:
            return {"prediction": f"{emnist_uppercase_letters_mapping[pred_index]}", "confidence": f"{pred[0][pred_index]}"}
        else:
            return {"prediction": f"{emnist_digits_mapping[pred_index]}", "confidence": f"{pred[0][pred_index]}"}

        # prediction = emnist_classifier(img)
        # print(prediction)

    
@app.post("/api/regression")
async def regression():
    pass

    


    
        



        