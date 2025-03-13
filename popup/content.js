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
div.style.borderRadius = "50%";
div.style.backgroundColor = 'grey';

img.src = "./icons/SVCLogo128x128.png";
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

div.appendChild(img);
img.appendChild(button);

document.body.appendChild(div);

button.addEventListener('click', function() {
  alert("Button clicked!");
});
