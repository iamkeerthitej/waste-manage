<h2>Overview</h2>
This project focuses on waste segregation detection using machine learning techniques. The goal is to classify waste items into categories such as plastic, metal, paper, etc., based on images uploaded by the user. The project uses image recognition models to analyze and classify the waste type in real-time, providing insights into waste composition for effective recycling strategies.

<h2>Features</h2>
<ul>
  <li>Image upload functionality for waste detection</li>
  <li>Real-time classification of waste items (plastic, metal, paper, etc.)</li>
  <li>Detection results displayed with object class, confidence score, and bounding box coordinates</li>
</ul>

<h2>Requirements</h2>
<ul>
  <li>Python 3.x</li>
  <li>Jupyter Notebook or Google Colab (if you wish to run the code in a notebook)</li>
  <li>Required libraries:
    <ul>
      <li>Axios (for sending requests)</li>
      <li>FileReader (for reading images)</li>
      <li>Roboflow API (for waste detection model)</li>
    </ul>
  </li>
</ul>

<h2>Installation</h2>
To run this project, make sure the following libraries are installed:
<br><br>
<code>pip install axios</code>
<br><br>
Ensure you have access to a waste segregation model via the Roboflow API for the classification.

<h2>Usage</h2>
1. Open the `index.html` file in your browser.<br>
2. Upload an image using the "Choose File" button.<br>
3. Click the "Detect" button to send the image for classification.<br>
4. The results will display the categories of waste detected along with their confidence scores and bounding box details.

<h2>Visualization</h2>
The detection results will be displayed as follows:
<ul>
  <li>Object Class: Type of waste (plastic, metal, paper, etc.)</li>
  <li>Confidence: Percentage of certainty for the classification</li>
  <li>Bounding Box: Coordinates of detected objects within the image (optional)</li>
</ul>

<h2>Future Improvements</h2>
<ul>
  <li>Implement a model to handle real-time object detection for more dynamic environments</li>
  <li>Add a more extensive set of waste categories</li>
  <li>Integrate with a back-end system for storing and analyzing waste data</li>
  <li>Enhance the user interface with advanced visual feedback (e.g., showing the detected objects in the image)</li>
</ul>
