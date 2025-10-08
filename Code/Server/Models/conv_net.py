import keras
from keras.models import Sequential
from keras.layers import Dense, Dropout, Activation, Flatten

from keras.layers import Conv2D, MaxPool2D
from keras.datasets import mnist
import matplotlib.pyplot as plt
import tensorflow as tf

(X_train, y_train), (X_test, y_test) = mnist.load_data()

X_train, X_test = X_train / 255.0, X_test / 255.0

print("Image shape: ", X_train[0].shape)
#input shape (28, 28)
model = Sequential()
model.add(Conv2D(32, (3,3), activation="relu", input_shape=(28, 28, 1)))
model.add(MaxPool2D())
model.add(Conv2D(64, (3, 3), activation="relu"))
model.add(MaxPool2D())
model.add(Conv2D(64, (3, 3)))
model.add(Flatten())
model.add(Dense(64, activation="relu"))
model.add(Dense(10))

model.summary()

model.compile(optimizer="adam",
              loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True))

history = model.fit(X_train, y_train, epochs=10, validation_data=(X_test, y_test))

model.predict(X_test)