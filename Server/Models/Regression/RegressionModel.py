from sklearn.preprocessing import MinMaxScaler
import keras
import pandas as pd
import tensorflow as tf


class RegressionModel(keras.Sequential): 
    def __init__(self, numNeurons: int):
        super().__init__()
        self.add(keras.Input(shape=(2,)))
        self.add(keras.layers.Dense(numNeurons, activation="relu"))
        
        self.add(keras.layers.Dense(1))


    def train(self, X_train, y_train, epochs: int = 10):
        self.compile(
            optimizer=keras.optimizers.SGD(learning_rate=0.0000001),
            loss="mean_squared_error"
        )
        self.fit(X_train, y_train, epochs=epochs, verbose=2)

if __name__ == "__main__":

    train_data = pd.read_csv("california_housing_train.csv")
    test_data = pd.read_csv("california_housing_test.csv")
    y_test = test_data["median_house_value"].to_numpy().reshape(-1, 1)
    y_train = train_data["median_house_value"].to_numpy()



    X_train = train_data[["longitude", "latitude"]]
    X_test = test_data[["longitude", "latitude"]]

    print("X_train shape: ", X_train.shape)
    print("y_train shape: ", y_train.shape) 


    # normalization
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)


    model = RegressionModel(64)
    print("Model initialized")
    model.train(X_train.astype("float32"), y_train.astype("float32"), 10)
    print("Model training")
    


