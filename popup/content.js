const div = document.createElement('div');
const img = document.createElement('img');
const button = document.createElement('button');
const fltMenu = document.createElement('div');
const fltBtnContainer1 = document.createElement('div');
const fltBtnContainer2 = document.createElement('div');
const fltBtnContainer3 = document.createElement('div');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
const closeModalButton = document.createElement('span');
const iframe = document.createElement('iframe');
const logoImgUrl = chrome.runtime.getURL('images/SVCLogo.png');
const logoIMG = document.createElement('img');
const irImgUrl = chrome.runtime.getURL('images/informationTab.jpg');
const irIMG = document.createElement('img');

div.style.position = 'fixed';
div.style.bottom = '20px'; 
div.style.right = '30px'; 
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

// Modal Creation
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
modal.style.zIndex = '10001';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.display = 'none'; // Hide initially

modalContent.style.backgroundColor = 'white';
modalContent.style.padding = '20px';
modalContent.style.maxWidth = '600px';
modalContent.style.margin = 'auto';
modalContent.style.position = 'relative';

irIMG.src = irImgUrl;
irIMG.style.maxWidth = '180px';
irIMG.style.height = 'auto';
irIMG.style.marginTop = '-15px';
irIMG.style.marginBottom = '5px';
irIMG.alt = 'information tab';
irIMG.className = 'informationTab';
irIMG.id = 'informationTab';

logoIMG.src = logoImgUrl;
logoIMG.style.height = '32px';
logoIMG.style.width = '53px';

closeModalButton.style.position = 'absolute';
closeModalButton.style.top = '10px';
closeModalButton.style.right = '15px';
closeModalButton.style.fontSize = '20px';
closeModalButton.style.cursor = 'pointer';
closeModalButton.textContent = 'X';

modalContent.appendChild(closeModalButton);
modal.appendChild(modalContent);
document.body.appendChild(modal);

function clearModalContent() {
  modalContent.innerHTML = '';
};

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Close the modal when 'X' is clicked
  clearModalContent();
});

fltBtnContainer1.addEventListener('click', function() {
modal.style.display = "flex";

clearModalContent();

const extensionModal = document.createElement('div');
extensionModal.style.lineHeight = '0';
extensionModal.style.display = 'inline';
extensionModal.classList.add('extensionModal');

const paddingHeaderDiv = document.createElement('div');
paddingHeaderDiv.style.height = '25px';
paddingHeaderDiv.style.width = '100%';

const extensionLogo = document.createElement('div');

const logoTitle = document.createElement('p');
logoTitle.classList.add('logoTitle');
logoTitle.style.fontWeight = 'bold';
logoTitle.style.fontSize = '22px';
logoTitle.style.marginLeft = '5px';
logoTitle.style.position = "relative";
logoTitle.innerHTML = '<blue style="color: #1263c6;"> Select <y style="color: #ffa22a; display: inline;">V</y>oiceCom</blue>';

// extensionLogo.appendChild(logoIMG);
extensionLogo.appendChild(logoTitle);

const irHeader = document.createElement('div');
irHeader.style.display = 'inline-block';
const irHeaderTitle = document.createElement('h4');
irHeaderTitle.style.textAlign = 'center';
irHeaderTitle.style.padding = '5px';
irHeaderTitle.style.fontWeight = '1000';
irHeaderTitle.style.marginBottom = "5px";
irHeaderTitle.textContent = 'Report an Incident';
irHeaderTitle.style.position = 'relative';

irHeader.appendChild(irHeaderTitle);
irHeader.appendChild(irIMG);

const btnContainer = document.createElement('div');
btnContainer.classList.add('btnContainer');

const btnInfo = document.createElement('button');
btnInfo.type = "button";
btnInfo.classList.add('btns_button');
btnInfo.textContent = 'Information';

const btnPhys = document.createElement('button');
btnPhys.type = 'button';
btnPhys.classList.add('btns_button');
btnPhys.textContent = 'Physical';

btnContainer.appendChild(btnInfo);
btnContainer.appendChild(btnPhys);
extensionModal.appendChild(extensionLogo);
extensionModal.appendChild(irHeader);
extensionModal.appendChild(btnContainer);

modalContent.appendChild(closeModalButton);
modalContent.appendChild(paddingHeaderDiv);
modalContent.appendChild(extensionModal);
modal.appendChild(modalContent);
});

// Assuming your floating button containers are set up already
fltBtnContainer2.addEventListener('click', () => {
 
});

fltBtnContainer3.addEventListener('click', () => {
modal.style.display = "flex";

modalContent.innerHTML = '<span id="closeModalButton" style="position: absolute; top: 10px; right: 10px; font-size: 20px; cursor: pointer;">X</span> <div class="extensionLogo" style="width: auto; margin: auto; display: flex; justify-content: center; align-items: center; flex-direction: column"> <img src="/images/SVC Logo.png" style="height: 50px; width: 80px; margin-bottom: 0;" alt="SVC logo" class="SVCLogo"/> <p class="logoTitle" style="font-weight: bold; font-size: 24px; color: #1263c6; margin-top: 0;">Select <y style="color: #ffa22a;">V</y>oiceCom</p> <div class="toggle-label" style="font-size: 20px; margin-bottom: 25px;">Toggle Real Time Protection</div> <label class="toggle-switch" style="position: relative; display: inline-block; width: 80px; height: 40px; cursor: pointer;"> <input type="checkbox"> <div class="toggle-switch-background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #ddd; border-radius: 20px; box-shadow: inset 0 0 0 2px #ccc; transition: background-color 0.3s ease-in-out;"> <div class="toggle-switch-handle" style="position: absolute; top: 5px; left: 5px; width: 30px; height: 30px; background-color: #fff; border-radius: 50%; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease-in-out;"></div> </div></label></div>';

document.getElementById('closeModalButton').addEventListener('click', () => {
  modal.style.display = 'none';
  });

document.getElementById('closeModalButton').addEventListener('mouseenter', () => {
    closeModalButton.style.transform = 'scale(1.1)';   
    closeModalButton.style.transition = 'all 0.3s ease'; 
    closeModalButton.style.backgroundColor = 'red';
  });

document.getElementById('closeModalButton').addEventListener('mouseleave', () => {
    closeModalButton.style.transform = 'scale(1)';   
    closeModalButton.style.backgroundColor = 'none';  
  });
});




