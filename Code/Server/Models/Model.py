from matplotlib.dates import relativedelta
import numpy as np

import pandas as pd


csv_path = "/Users/alexanderhagopian/Documents/Rivier/FA25/Vault/MA490/Applied-Linear-Algebra-CNNs-Research/Code/Server/Models/student_exam_scores.csv"

def ReLU(X: np.ndarray) -> np.ndarray:
    return X if X >= 0 else 0

class Model:
    """
    Implementation of a simple, dense, artificial neural network.
    """
    def __init__(self, X: np.ndarray):
        """
        What are some things that a NN needs:
            - Nodes
                - Linear function
                - Activation function
            - Hidden Layers
                - Consisting of n number of nodes.
                - Connect each node of layer i is connected
                    to each node in layer j 
        """
        self.input = X
        self.layer_1_weights = np.random.rand(6, 800)
        self.layer_1_bias = np.random.rand(6,1)

        self.layer_2_weights = np.random.rand(6,6)
        self.layer_2_bias = np.random.rand(6,1)

        self.layer_3_weights = np.random.rand(3,6 )
        self.layer_3_bias = np.random.rand(3, 1)

        self.layer_4_weights = np.random.rand(1, 3)
        self.layer_4_bias = np.random.rand(1, 1)

    def forward_pass(self):


        # vf = np.vectorize(ReLU)
        # layer_1_output = np.matmul(self.layer_1_weights, self.input) + self.layer_1_bias
        # activation_1 = vf(layer_1_output)
        # layer_2_output = np.matmul(self.layer_2_weights, activation_1) + self.layer_2_bias
        # activation_2 = vf(layer_2_output)
        # layer_3_output = np.matmul(self.layer_3_weights, activation_2) + self.layer_3_bias
        # return np.matmul(self.layer_4_weights, layer_3_output) + self.layer_4_bias
        

if __name__ == "__main__":
    