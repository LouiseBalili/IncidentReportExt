const div = document.createElement('div');
const img = document.createElement('img');
const button = document.createElement('button');

div.style.position = 'fixed';
div.style.bottom = '20px'; 
div.style.right = '20px'; 
div.style.zIndex = '9999'; 
div.style.cursor = 'pointer';
div.style.width = "40px";
div.style.height = "40px";
div.style.backgroundColor = 'white';
div.style.borderRadius = "50%";
div.style.border = "solid";
div.style.borderColor = "grey";

img.src = "https://manatal-backend-public-assets.s3.amazonaws.com/media/career_portal_logo_direct_upload/fb442c8c-5a6e-4df9-99fb-d539c767133e_SVC_Coloured_logo_for_Dark_Background_01.png";
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
img.appendChild(button);

document.body.appendChild(div);

button.addEventListener('click', function() {
  alert("Button clicked!");
});
