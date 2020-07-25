function _uploadFileToServer() {
    var form_data = new FormData();
    form_data.append('file', $('#selectedFile').prop('files')[0]);

    $.ajax({
        type: 'POST',
        url: '/upload',
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function(res) {
            if (res.status == 200) {
                console.log(res['message']);
            } else {
                console.log(res['message']);
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function fileUploadListener(event) {
    var filePath = document.getElementById("selectedFile").value;
    var displayImage = document.getElementById("uploadedImage");
    var placeholderImage = document.getElementById("placeholderImage");
    var placeholderText = document.getElementById("placeholderText");
    var resultText = document.getElementById("result");

    if (filePath.length > 0) {
        displayImage.src = URL.createObjectURL(event.target.files[0]);
        resultText.innerHTML = "";
        placeholderImage.style.display = "none";
        placeholderText.style.display = "none";
        displayImage.style.display = "block";

        _uploadFileToServer();
    }
}

function _predict(successCallback, failureCallback) {
    $.ajax({
        type: 'GET',
        url: '/predict',
        contentType: false,
        cache: false,
        processData: false,
        success: function(res) {
            if (res.status == 200) {
                successCallback(res['class'])
            } else {
                failureCallback();
            }
        },
        error: function(err) {
            console.log(err);
            failureCallback();
        }
    });
}

function predictImage() {
    var successCallback = function(res) {
        var result = document.getElementById("result");
        result.innerHTML = res;
    };

    var failureCallback = function() {
        var result = document.getElementById("result");
        result.innerHTML = "Unable to predict";
    }
    _predict(successCallback), failureCallback;
}

function startFileUpload() {
    document.getElementById('selectedFile').click();
    var fileupload = document.getElementById('selectedFile');
    fileupload.addEventListener("change", fileUploadListener, false);
}