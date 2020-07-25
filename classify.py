from tensorflow import keras
from keras.preprocessing import image
import numpy as np

model = keras.models.load_model("classifier.h5")

def predictClass(path):
    image_path = path

    img = image.load_img(image_path, target_size=(300, 300))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)

    images = np.vstack([x])
    classes = model.predict(images, batch_size=10)
    if classes[0]>0.5:
        return "Dog"
    else:
        return "Cat"