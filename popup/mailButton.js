const createModal = () => {
    if (document.querySelector('#svc-confirm-modal')) return;

    if (!document.getElementById('svc-modal-animation-style')) {
    const style = document.createElement('style');
    style.id = 'svc-modal-animation-style';
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .svc-fade-in {
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes popIn {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        .svc-modal-pop {
            animation: popIn 0.2s ease-out;
        }
    `;
    document.head.appendChild(style);
    }   


    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.id = "svc-modal-background";
    backgroundOverlay.style.position = 'fixed';
    backgroundOverlay.style.top = '0';
    backgroundOverlay.style.left = '0';
    backgroundOverlay.style.width = '100vw';
    backgroundOverlay.style.height = '100vh';
    backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backgroundOverlay.style.display = 'flex';
    backgroundOverlay.style.alignitems = 'center';
    backgroundOverlay.style.justifyContent = 'center';
    backgroundOverlay.style.zIndex = '9998';
    backgroundOverlay.classList.add('svc-fade-in');

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'svc-confirm-modal';
    modalOverlay.style.marginTop = '25vh';
    modalOverlay.style.width = '500px';
    modalOverlay.style.height = '330px';
    modalOverlay.style.backgroundColor = 'white';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.border = '1px solid transparent';
    modalOverlay.style.borderRadius = '20px';
    modalOverlay.style.zIndex = '9999';
    modalOverlay.classList.add('svc-modal-pop');

    const modalContent = document.createElement('div');
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    modalContent.style.alignItems = 'center';
    modalContent.style.justifyContent = 'center';

    const modalImg = document.createElement('img');
    modalImg.src = 'https://static.vecteezy.com/system/resources/previews/019/552/599/non_2x/warning-sign-on-transparent-background-free-png.png';
    modalImg.alt = 'Attention Sign';
    modalImg.style.width = '130px';
    modalImg.style.height = '80px';

    const modalContentTitleParagraph = document.createElement('p');
    modalContentTitleParagraph.innerHTML = 'Are you sure you want to report this email?';
    modalContentTitleParagraph.style.fontSize = '20px';
    modalContentTitleParagraph.style.fontWeight = 'bold';
    modalContentTitleParagraph.style.marginTop = '45px';
    modalContentTitleParagraph.style.marginBottom = '-5px';

    const modalContentParagraph = document.createElement('p');
    modalContentParagraph.innerHTML = '(Mail will be forwarded to IT team)';
    modalContentParagraph.style.fontStyle = 'italic';

    const modalBtnContainer = document.createElement('div');
    modalBtnContainer.style.display = 'flex';
    modalBtnContainer.style.justifyContent = 'center';

    const modalContentButtonYes = document.createElement('button');
    modalContentButtonYes.style.padding = '10px 30px';
    modalContentButtonYes.style.border = '1px transparent';
    modalContentButtonYes.style.borderRadius = '10px';
    modalContentButtonYes.style.marginRight = '10px';
    modalContentButtonYes.style.backgroundColor = 'red'
    modalContentButtonYes.style.color = 'white';
    modalContentButtonYes.innerHTML = 'Yes';
    modalContentButtonYes.id = 'svc-confirm-yes';

    const modalContentButtonNo = document.createElement('button');
    modalContentButtonNo.style.padding = '10px 30px';
    modalContentButtonNo.style.border = '1px solid #7c7c7c';
    modalContentButtonNo.style.borderRadius = '10px';
    modalContentButtonNo.style.backgroundColor = 'white';
    modalContentButtonNo.style.color = 'black';
    modalContentButtonNo.innerHTML = 'No';
    modalContentButtonNo.id = 'svc-confirm-no';

    modalBtnContainer.appendChild(modalContentButtonYes);
    modalBtnContainer.appendChild(modalContentButtonNo);
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalContentTitleParagraph);
    modalContent.appendChild(modalContentParagraph);
    modalContent.appendChild(modalBtnContainer);
    modalOverlay.appendChild(modalContent);
    backgroundOverlay.appendChild(modalOverlay);
    document.body.appendChild(backgroundOverlay);

    modalContentButtonYes.addEventListener('mouseenter', () => {
        modalContentButtonYes.style.transform = 'scale(1.05)';
        modalContentButtonYes.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        modalContentButtonYes.style.transition = 'all 0.2s ease';
        modalContentButtonYes.style.cursor = 'pointer';
    });

    modalContentButtonYes.addEventListener('mouseleave', () => {
        modalContentButtonYes.style.transform = 'scale(1)';
        modalContentButtonYes.style.boxShadow = 'none';
    });

    modalContentButtonNo.addEventListener('mouseenter', () => {
        modalContentButtonNo.style.transform = 'scale(1.05)';
        modalContentButtonNo.style.backgroundColor = '#e0e0e0';
        modalContentButtonNo.style.transition = 'all 0.2s ease';
        modalContentButtonNo.style.cursor = 'pointer';
    });

    modalContentButtonNo.addEventListener('mouseleave', () => {
        modalContentButtonNo.style.transform = 'scale(1)';
        modalContentButtonNo.style.backgroundColor = 'white';
    });


     return new Promise((resolve) => {
       setTimeout(() => {
            const yesBtn = document.getElementById('svc-confirm-yes');
            const noBtn = document.getElementById('svc-confirm-no');

            yesBtn.onclick = () => {
                document.body.removeChild(backgroundOverlay);
                resolve(true);
            };
            noBtn.onclick = () => {
                document.body.removeChild(backgroundOverlay);
                resolve(false);
            };

            backgroundOverlay.addEventListener('click', (e) => {
                if(e.target === backgroundOverlay) {
                    document.body.removeChild(backgroundOverlay);
                    resolve(false);
                }
            });
        }, 0);
    });

}

const addCustomButton = () => {
    const emailThreads = document.querySelectorAll('div.adn');
  
    emailThreads.forEach((thread) => {
        // if(thread.querySelector(`#svc-custom-button-${index}`)) return;
        if(thread.classList.contains('svc-custom-button-added')) return;

        const messageId = thread.getAttribute('data-legacy-message-id');
        if (!messageId) return;

        const moreBtnContainer = thread.querySelector('td.gH.acX.bAm');

        if (!moreBtnContainer) return;

        const div = document.createElement('div');
        const img = document.createElement('img');
        const mailBtn = document.createElement('button');
  
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0'); 
        div.style.marginLeft = '10px';
        div.style.cursor = 'pointer';
        div.style.width = '32px';
        div.style.height = '32px';
        div.style.backgroundColor = 'white';
        div.style.borderRadius = '50%';
        div.style.border = '2px solid grey';
        div.style.display = 'inline-flex';
        div.style.overflow = 'hidden';
    
        img.src = chrome.runtime.getURL('images/SVCLogo.png');
        img.alt = 'SVC Incident Report Button';
        img.style.width = '26px';
        img.style.height = 'auto';
        img.style.margin = 'auto';
        img.style.overflow = 'hidden';
    
        mailBtn.style.all = 'unset';
        mailBtn.style.width = '100%';
        mailBtn.style.height = '100%';
        mailBtn.style.background = 'transparent';
        mailBtn.style.border = 'none'; 
        mailBtn.style.margin = 'auto';
        mailBtn.style.marginLeft = '50%';
        mailBtn.style.transform = 'translateX(-50%)';
        mailBtn.dataset.messageId = messageId;
        mailBtn.id = `svc-custom-button-${messageId}`;

        mailBtn.appendChild(img);
        div.appendChild(mailBtn);
        moreBtnContainer.appendChild(div);
        thread.classList.add('svc-custom-button-added');

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

        const waitAndPrefill = () => {
            const interval = setInterval(() => {
                const toField = document.querySelector('input[aria-label="To recipients"]');
                const ccToggleBtn = document.querySelector('span[aria-label="Add Cc recipients ‪(Ctrl-Shift-C)‬"]');

                 // If CC toggle is visible and CC input not yet present, click to open
                if (ccToggleBtn && !document.querySelector('input[aria-label="CC recipients"]')) {
                    ccToggleBtn.click();
                    return; // Wait for next loop for CC field to load
                }

                const ccField = document.querySelector('input[aria-label="CC recipients"]');

                if (toField && ccField) {
                    toField.focus();
                    toField.value = 'it@ebcallcenter.com';
                    toField.dispatchEvent(new Event('input', { bubbles: true }));
                    toField.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
                    toField.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));

                    ccField.focus();
                    ccField.value = 'compliance@selectvoicecom.com';
                    ccField.dispatchEvent(new Event('input', { bubbles: true }));
                    ccField.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
                    ccField.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
                        
                    clearInterval(interval);
                }
            }, 300);
        }

        mailBtn.addEventListener('click', async () => {
            const confirm = await createModal();
            if (!confirm) return;

            const msgId = mailBtn.dataset.messageId;

            const targetThread = Array.from(document.querySelectorAll('div.adn'))
                .find(div => div.getAttribute('data-legacy-message-id') === msgId);

            if (!targetThread) {
                console.warn('Target thread not found for message ID:', msgId);
                return;
            }

            const threadHeader = targetThread.querySelector('span[role="gridcell"][email], div[role="gridcell"]');
                if (threadHeader) {
                    threadHeader.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                } else {
                    console.warn('Thread header not found for message ID:', msgId);
                }

            const forwardButton = Array.from(document.querySelectorAll('span'))
                .find((span) => span.innerText.toLowerCase() === 'forward');

            if (forwardButton) {
                forwardButton.click();
                waitAndPrefill();
            } else {
                console.warn('Forward button not found in the thread.', msgId);
            }

        });
    });
  };

  // Use MutationObserver to detect when a new email is opened
  const observer = new MutationObserver(() => {

    const isEmailOpen = document.querySelector('h2[data-legacy-thread-id]');
    if (isEmailOpen) {
      addCustomButton();
    }
  });
  
  // Start observing the DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  