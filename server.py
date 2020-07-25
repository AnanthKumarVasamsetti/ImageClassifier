from flask import Flask, render_template, request, jsonify
import os
from classify import predictClass

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join('static', 'temp')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
TEST_IMAGE_PATH = os.path.join(app.config['UPLOAD_FOLDER'], 'test.png')

@app.route("/")
def home():
    return render_template("classifier.html")

@app.route("/upload", methods=['POST'])
def upload():
    res = {}
    if(request.method == 'POST'):
        if('file' in request.files):
            uploadedImage = request.files.get('file')
            uploadedImage.save(TEST_IMAGE_PATH)
            res['status'] = 200
            res['message'] = 'Uploaded successfully'
        else:
            res['status'] = 404
            res['message'] = 'File not found to upload'
    else:
        res['status'] = 400
        res['message'] = 'Bad request'
    
    res = jsonify(res)
    return res

@app.route("/predict", methods=['GET'])
def predictImage():
    res = {}
    try:
        imageClass = predictClass(TEST_IMAGE_PATH)
        res['status'] = 200
        res['class'] = imageClass
    except:
        res['status'] = 500
        res['message'] = 'Unable to predict the class'
    
    res = jsonify(res)
    return res

if __name__ == "__main__":    
    app.run(debug=True)