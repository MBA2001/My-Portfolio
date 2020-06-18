import tensorflow as tf
from tensorflow import keras
import matplotlib.pyplot as plt
import numpy as np
data = keras.datasets.mnist

(x_train,y_train),(x_test,y_test) = data.load_data()

# model = keras.Sequential([
# keras.layers.Flatten(input_shape=(28,28)),
# keras.layers.Dense(128,activation='relu'),
# keras.layers.Dense(10,activation='softmax'),
# ])

# model.compile(optimizer="adam", loss="sparse_categorical_crossentropy",metrics=['accuracy'])

# model.fit(x_train,y_train,epochs=100)

# model.save('model.h5')


model = keras.models.load_model('model.h5')

loss,acc = model.evaluate(x_test,y_test,verbose=0)
predicts = model.predict(x_test)

print(acc)
class_names = ['0','1','2','3','4','5','6','7','8','9']
for x in range(20):
    plt.grid(False)
    plt.imshow(x_test[x], cmap=plt.cm.binary)
    plt.title("Actual : " + class_names[y_test[x]])
    plt.xlabel("prediction: " + class_names[np.argmax(predicts[x])])
    plt.show()
