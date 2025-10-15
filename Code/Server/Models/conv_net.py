import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Flatten, Conv2D, MaxPool2D, Dropout, BatchNormalization
import tensorflow_datasets as tfds

IMG_SIZE = 128

(train_ds, test_ds) = tfds.load('cats_vs_dogs', split=["train[:80%]", "train[80%:]"], as_supervised=True)

def preprocess(image, label):
    image = tf.image.resize(image, (IMG_SIZE, IMG_SIZE))
    image = tf.cast(image, tf.float32) / 255.0
    return image, label

train_ds = train_ds.map(preprocess).batch(32)
test_ds = test_ds.map(preprocess).batch(32)


#input shape (28, 28)
model = Sequential()
model.add(Conv2D(32, (3,3), activation="relu", input_shape=(128, 128, 3)))
model.add(BatchNormalization())
model.add(MaxPool2D())
model.add(Conv2D(64, (3, 3), activation="relu"))
model.add(BatchNormalization())
model.add(MaxPool2D())
model.add(Conv2D(64, (3, 3)))
model.add(BatchNormalization())
model.add(MaxPool2D())
model.add(Flatten())
model.add(Dense(64, activation="relu"))
model.add(Dropout(0.3))
model.add(Dense(32, activation="relu"))
model.add(Dropout(0.2))
model.add(Dense(1, activation="sigmoid"))

model.summary()

model.compile(optimizer="adam",
              loss="binary_crossentropy",
              metrics=["accuracy"])

history = model.fit(train_ds, epochs=14, validation_data=test_ds, verbose=True)

###
# Write training data and model summary to .txt file
###

with open("./modeldata.txt", mode="a", encoding="utf-8") as file:
    model.summary(print_fn=lambda x: file.write(f"{x}\n"))
    file.write(f"{str(history.history)}\n")

model.save("model3.keras")