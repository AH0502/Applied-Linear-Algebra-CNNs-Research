import numpy as np 
import matplotlib.pyplot as plt
import argparse
import pathlib
from PIL import Image

class PathError(Exception):
   def __init__(self, message="No path to image specified."):
        self.message = message

class InvalidDimensionError(Exception):
    def __init__(self, message=f"Invalid Dimensions!\nImage must be n x n"):
        self.message = message
        
   
def GetArgs():
    parser = argparse.ArgumentParser()
    parser.add_argument("path", type=pathlib.Path)
    return parser
    # Load image
def EdgeDetector(path):
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




    # plt.imshow(grey_img, cmap="grey")
    # plt.show()

    kernel = np.array([[-1, -1, -1,], [-1, 7, -1], [-1, -1, -1]])

    

    filtered_img = np.zeros(shape=(img_height -2 , img_width - 2))

    for i in range(1, img_height - 2):
        for j in range(1, img_width - 2):
            slice = grey_img[j: j+3, i:i+3]
            filtered_img[i, j] = np.vdot(slice, kernel)

    plt.imshow(filtered_img, cmap="grey")
    plt.show()



if __name__ == "__main__":
    parser = GetArgs()
    try: 
        # Check if path is provided
       num_args = len(parser._get_args())
       if num_args == 0:
            raise PathError

    except PathError:
        e = PathError()
        print(e.message)

    else:
        args = parser.parse_args()

        EdgeDetector(args.path)



