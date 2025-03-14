const div = document.createElement('div');
const img = document.createElement('img');
const button = document.createElement('button');
const fltMenu = document.createElement('div');
const fltBtnContainer = document.createElement('div');
const fltBtnContainer1 = document.createElement('div');
const fltBtnContainer2 = document.createElement('div');
const fltBtnContainer3 = document.createElement('div');

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
div.style.overflow = "hidden";
div.style.display = "flex";

img.src = "https://images2.imgbox.com/fc/ff/JwCxuWld_o.png";
img.alt = "SVC Extension Button";
img.style.width = "26px";
img.style.height = "auto";
img.style.overflow = "hidden";
img.style.position = "absolute";
img.style.top = "50%";
img.style.left = "50%";
img.style.transform = "translate(-50%, -50%)";

button.style.all = "unset";
button.style.width = "100%";
button.style.height = "100%";
button.style.background = "transparent";
button.style.border = "none";

fltMenu.style.position = "fixed";
fltMenu.style.bottom = "70px";
fltMenu.style.right = "20px";
fltMenu.style.zIndex = "10000";
fltMenu.style.display = "none";

fltBtnContainer1.textContent = "Report an Incident";
fltBtnContainer1.style.fontSize = "13px";
fltBtnContainer1.style.color = "grey";
fltBtnContainer1.style.backgroundColor = "white";
fltBtnContainer1.style.padding = "5px 2px";
fltBtnContainer1.style.borderRadius = "5px";
fltBtnContainer1.style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.2)";
fltBtnContainer1.style.textAlign = "center";
fltBtnContainer1.style.cursor = "pointer";

fltBtnContainer2.textContent = "Check Website Security";
fltBtnContainer2.style.fontSize = "13px";
fltBtnContainer2.style.color = "grey";
fltBtnContainer2.style.backgroundColor = "white";
fltBtnContainer2.style.padding = "5px 2px";
fltBtnContainer2.style.borderRadius = "5px";
fltBtnContainer2.style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.2)";
fltBtnContainer2.style.textAlign = "center";
fltBtnContainer2.style.cursor = "pointer";
fltBtnContainer2.style.marginTop = "9px";

fltBtnContainer3.textContent = "Real Time Protection";
fltBtnContainer3.style.fontSize = "13px";
fltBtnContainer3.style.color = "grey";
fltBtnContainer3.style.backgroundColor = "white";
fltBtnContainer3.style.padding = "5px 2px";
fltBtnContainer3.style.borderRadius = "5px";
fltBtnContainer3.style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.2)";
fltBtnContainer3.style.textAlign = "center";
fltBtnContainer3.style.cursor = "pointer";
fltBtnContainer3.style.marginTop = "9px";

fltMenu.appendChild(fltBtnContainer1);
fltMenu.appendChild(fltBtnContainer2);
fltMenu.appendChild(fltBtnContainer3);

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

fltBtnContainer1.addEventListener('mouseenter', () => {
  fltBtnContainer1.style.transform = 'scale(1.1)';   
  fltBtnContainer1.style.transition = 'all 0.3s ease'; 
});

fltBtnContainer1.addEventListener('mouseleave', () => {
  fltBtnContainer1.style.transform = 'scale(1)';     
});

fltBtnContainer2.addEventListener('mouseenter', () => {
  fltBtnContainer2.style.transform = 'scale(1.1)';   
  fltBtnContainer2.style.transition = 'all 0.3s ease'; 
});

fltBtnContainer2.addEventListener('mouseleave', () => {
  fltBtnContainer2.style.transform = 'scale(1)';     
});

fltBtnContainer3.addEventListener('mouseenter', () => {
  fltBtnContainer3.style.transform = 'scale(1.1)';   
  fltBtnContainer3.style.transition = 'all 0.3s ease'; 
});

fltBtnContainer3.addEventListener('mouseleave', () => {
  fltBtnContainer3.style.transform = 'scale(1)';     
});

div.appendChild(button);
button.appendChild(img);

document.body.appendChild(div);
document.body.appendChild(fltMenu);

button.addEventListener('click', function() {
    // Toggle the display of the floating menu
    if (fltMenu.style.display === 'none' || fltMenu.style.display === '') {
      fltMenu.style.display = 'block';
    } else {
      fltMenu.style.display = 'none';
    }  
});

fltBtnContainer1.addEventListener('click', function() {

});

fltBtnContainer2.addEventListener('click', () => {
  window.open('/information/checkValidity.html', '_blank', 'width=500, height=500, top=150');
});

fltBtnContainer3.addEventListener('click', () => {
  window.open('/information/RTimeProtect.html', '_blank', 'width=500, height=500, top=150');
});
