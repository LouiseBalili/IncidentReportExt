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

function applyButtonStyles (btnElement) {
  btnElement.style.fontSize = "13px";
  btnElement.style.color = "grey";
  btnElement.style.backgroundColor = "white";
  btnElement.style.padding = "5px 2px";
  btnElement.style.borderRadius = "5px";
  btnElement.style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.2)";
  btnElement.style.textAlign = "center";
  btnElement.style.cursor = "pointer";
}

fltBtnContainer1.textContent = "Report an Incident";
applyButtonStyles(fltBtnContainer1);

fltBtnContainer2.textContent = "Check Website Security";
fltBtnContainer2.style.marginTop = "5px";
applyButtonStyles(fltBtnContainer2);

fltBtnContainer3.textContent = "Real Time Protection";
fltBtnContainer3.style.marginTop = "5px";
applyButtonStyles(fltBtnContainer3);

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

function applyEventListener(btnElement) {
  btnElement.addEventListener('mouseenter', () => {
    btnElement.style.transform = 'scale(1.1)';   
    btnElement.style.transition = 'all 0.3s ease'; 
  });

  btnElement.addEventListener('mouseleave', () => {
    btnElement.style.transform = 'scale(1)';     
  });
}

applyEventListener(fltBtnContainer1);
applyEventListener(fltBtnContainer2);
applyEventListener(fltBtnContainer3);

div.appendChild(button);
button.appendChild(img);

document.body.appendChild(div);
document.body.appendChild(fltMenu);

button.addEventListener('click', function() {
    // Toggle the display of the floating menu
    if (fltMenu.style.display === 'none' || fltMenu.style.display === '') {
      fltMenu.style.display = 'block';

    fltBtnContainer1.style.opacity = "0";
    fltBtnContainer1.style.transform = "translateY(50px)";
    fltBtnContainer1.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    fltBtnContainer2.style.opacity = "0";
    fltBtnContainer2.style.transform = "translateY(50px)";
    fltBtnContainer2.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    fltBtnContainer3.style.opacity = "0";
    fltBtnContainer3.style.transform = "translateY(50px)";
    fltBtnContainer3.style.transition = "opacity 0.2s ease, transform 0.2s ease";

    // After a short delay, apply the final animation styles to "fade-in"
    setTimeout(() => {
      fltBtnContainer1.style.opacity = '1';
      fltBtnContainer1.style.transform = 'translateY(0)';

      fltBtnContainer2.style.opacity = '1';
      fltBtnContainer2.style.transform = 'translateY(0)';

      fltBtnContainer3.style.opacity = '1';
      fltBtnContainer3.style.transform = 'translateY(0)';

      div.style.borderColor = '#1263c6';
      div.style.transform = 'scale(1.1)';
      div.style.transition = 'all 0.3s ease';
    }, 10); // Small delay to ensure that initial styles are applied
    } else {
      fltBtnContainer1.style.opacity = "0";
      fltBtnContainer1.style.transform = "translateY(20px)";
      fltBtnContainer1.style.transition = "opacity 0.2s ease, transform 0.2s ease";

      fltBtnContainer2.style.opacity = "0";
      fltBtnContainer2.style.transform = "translateY(20px)";
      fltBtnContainer2.style.transition = "opacity 0.5s ease, transform 0.5s ease";

      fltBtnContainer3.style.opacity = "0";
      fltBtnContainer3.style.transform = "translateY(0)";
      fltBtnContainer3.style.transition = "opacity 0.7s ease, transform 0.7s ease";

      setTimeout(() => {
        fltMenu.style.display = 'none';
        div.style.borderColor = 'grey';
      }, 1000);
    }  
});

fltBtnContainer1.addEventListener('click', function() {

});

fltBtnContainer2.addEventListener('click', () => {
  window.open('//information/checkValidity.html', '_blank', 'width=500, height=500, top=150');
});

fltBtnContainer3.addEventListener('click', () => {
  window.open('information/RTimeProtect.html', '_blank', 'width=500, height=500, top=150');
});
