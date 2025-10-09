from ast import Bytes
from typing import IO
from PIL import Image, ImageOps
import tensorflow as tf
import keras 
from keras.preprocessing import image
import numpy as np

MODEL_PATH = "Code/Server/Models/model.keras"

def preprocess_image(image_path) -> np.ndarray:
    img = Image.open(image_path)
    img = ImageOps.exif_transpose(img)
    img = img.resize((128, 128))
    img = image.img_to_array(img)
    img = tf.expand_dims(img, 0)
    return img

def classify(output: np.ndarray) -> str:
    return "Dog" if output == 1.0 else "Cat"

if __name__ == "__main__":
    model = keras.models.load_model(MODEL_PATH)
    diggy = preprocess_image("/Users/alexanderhagopian/Documents/Rivier/FA25/Vault/MA490/Applied-Linear-Algebra-CNNs-Research/Code/Server/Models/Diggy.jpeg")
    print(model(diggy).numpy()[0])
