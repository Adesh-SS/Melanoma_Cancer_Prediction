import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.resnet50 import preprocess_input
import cv2

app = Flask(__name__)
CORS(app)

MODEL = load_model('accuracy.h5')

@app.route('/api/upload', methods=['POST'])
def upload_func():

    pic = request.files.get('pic')

    PATH = os.path.join(r'C:\Users\adesh\WEB_DEVS\React\App\melanoma-prediction\saved_images', pic.filename)

    pic.save(PATH)

    img = cv2.imread(PATH)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply histogram equalization to improve contrast
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    gray = clahe.apply(gray)

    # Apply a Gaussian blur filter to smooth the image and reduce noise
    blur = cv2.GaussianBlur(gray, (5, 5), 0)

    # Threshold the image to segment the skin lesion
    ret, thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)

    # Find contours in the thresholded image
    contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    # Draw the contours on the original image
    cv2.drawContours(img, contours, -1, (0, 255, 0), 2)

    # Write the preprocessed image to the output directory
    cv2.imwrite(os.path.join('preprocessednew', pic.filename), img)

    image_predict = image.load_img(os.path.join('preprocessednew', pic.filename), target_size=(128, 128))
    image_predict = image.img_to_array(image_predict)
    image_predict = np.expand_dims(image_predict, axis=0)
    image_predict /= 255.

    prediction = MODEL.predict(image_predict)

    print(prediction)

    prediction_labels = ['Class 0', 'Class 1']
    #predicted_class = prediction_labels[np.argmax(prediction)]

    threshold = 0.5
    predicted_class = prediction_labels[0] if prediction < threshold else prediction_labels[1]

    CLASSES = {'Class 0':'Non Cancerous', 'Class 1':'Cancerous'}

    return jsonify({'prediction' : CLASSES[predicted_class]})

if __name__ == '__main__':
    app.run()