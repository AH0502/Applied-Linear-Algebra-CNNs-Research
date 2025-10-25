import io, sys
import numpy as np 
import matplotlib.pyplot as plt
import argparse
import pathlib
from PIL import Image
from HttpResponse import UnprocessableEntity
import cv2

class PathError(Exception):
   def __init__(self, message="No path to image specified."):
        self.message = message

class InvalidDimensionError(Exception):
    def __init__(self, message=f"Invalid Dimensions!\nImage must be n x n"):
        self.message = message
        
   
def GetArgs():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "path", 
        type=pathlib.Path,
        help="Path to image."
        )
    return parser
    # Load image
def BasicEdgeDetector(path):
    img = Image.open(path)

    # Convert image to greyscale
    grey_img = img.convert("L")

    grey_img = np.array(grey_img) / 255.

    # Get image dimension
    img_height, img_width = grey_img.shape

    try:
        if img_height != img_width:
            raise InvalidDimensionError
        
    except InvalidDimensionError: 
        error = InvalidDimensionError()
        print(error.message)
        return UnprocessableEntity()

    kernel = np.array([[-1, -1, -1,], [-1, 2, -1], [-1, -1, -1]])
    

    filtered_img = np.zeros(shape=(img_height -2 , img_width - 2))

    for i in range(1, img_height - 2):
        for j in range(1, img_width - 2):
            slice = grey_img[j: j+3, i:i+3]
            filtered_img[j, i] = np.vdot(slice, kernel)

    fig, (ax1, ax2) = plt.subplots(1, 2)
    fig.suptitle("Edge Detection")
    ax1.imshow(img)
    ax1.set_title("Original Image")
    ax1.axis(False)
    ax2.imshow(filtered_img, cmap="grey")
    ax2.set_title("Filtered Image")
    ax2.axis(False)

    buffer = io.BytesIO()
    fig.savefig(buffer, format="png")
    plt.close()
    
    return buffer

def CustomCanny(path: str):
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    filtered_img = cv2.GaussianBlur(img, (3, 3), 0)
    edges = cv2.Canny(filtered_img, 50, 100)
    cv2.imshow("Original Image", img)
    cv2.imshow("Blurred Image", filtered_img)
    cv2.imshow("Edges", edges)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

# Local test
if __name__ == "__main__":
    file_path: str = sys.argv[1]
    CustomCanny(file_path)

