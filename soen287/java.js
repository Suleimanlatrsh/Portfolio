function calculateTriangleArea() {
  // Get height and base (width) values from the inputs
  let height = document.getElementById('height').value;
  let width = document.getElementById('width').value;

  // Check if values are valid numbers
 

  // Calculate the area of the triangle
  let area = 0.5 * height * width;

  // Display the result in the 'answer' input field
  document.getElementById('answer').value = area;
  
  // Log the result to the console
  console.log('Triangle area:', area);
}
