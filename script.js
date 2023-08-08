document.getElementById("imageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const imageInput = document.getElementById("imageInput");
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const image = reader.result.split(",")[1];

      axios({
        method: "POST",
        url: "https://detect.roboflow.com/waste-segregation-8bp7l/1",
        params: {
          api_key: "umx3ixJlN1ypocgoQsBr",
        },
        data: image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          displayResult(response.data);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    };
    reader.readAsDataURL(file);
  }
});

function displayResult(result) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  // Create a heading for the result
  const resultHeading = document.createElement("h2");
  resultHeading.textContent = "Detection Result";
  resultContainer.appendChild(resultHeading);

  // Display image information
  const imageInfo = document.createElement("p");
  imageInfo.textContent = `Image Width: ${result.image.width}, Height: ${result.image.height}`;
  resultContainer.appendChild(imageInfo);

  // Loop through each detection and display the information
  result.predictions.forEach((detection, index) => {
    const detectionItem = document.createElement("p");
    detectionItem.textContent = `Object ${index + 1}: Class: ${
      detection.class
    }, Confidence: ${(detection.confidence * 100).toFixed(2)}%`;
    resultContainer.appendChild(detectionItem);

    // Display bounding box coordinates if available
    if (
      detection.x !== undefined &&
      detection.y !== undefined &&
      detection.width !== undefined &&
      detection.height !== undefined
    ) {
      const boundingBoxInfo = document.createElement("p");
      boundingBoxInfo.textContent = `Bounding Box: x: ${detection.x}, y: ${detection.y}, width: ${detection.width}, height: ${detection.height}`;
      resultContainer.appendChild(boundingBoxInfo);
    }
  });
}