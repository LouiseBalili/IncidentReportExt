const div = document.createElement('div');
const img = document.createElement('img');
const button = document.createElement('button');

div.style.position = 'fixed';
div.style.bottom = '20px'; 
div.style.right = '20px'; 
div.style.zIndex = '9999'; 
div.style.cursor = 'pointer';
div.style.width = "36px";
div.style.height = "36px";
div.style.backgroundColor = 'white';
div.style.borderRadius = "50%";
div.style.border = "solid";
div.style.borderColor = "grey";

img.src = "/images/SVC Logo.png";
img.alt = "SVC Extension Button";
img.style.borderRadius = "50%";

// Check if image is loaded correctly
img.onload = function() {
  console.log("Image loaded successfully.");
};

img.onerror = function() {
  console.error("Error loading image. Check the image source.");
  img.alt = "Image not found"; // Provide feedback if image fails to load
};

// Adding hover effect using mouse events
div.addEventListener('mouseenter', () => {
  div.style.borderColor = '#1263c6';  // Change background color on hover
  div.style.transform = 'scale(1.1)';    // Slightly enlarge the div
  div.style.transition = 'all 0.3s ease';  // Smooth transition
});

div.addEventListener('mouseleave', () => {
  div.style.borderColor = 'grey';   // Reset to original background color
  div.style.transform = 'scale(1)';      // Reset size
});

div.appendChild(img);
div.appendChild(button);

document.body.appendChild(div);

button.addEventListener('click', function() {
  alert("Button clicked!");
});
