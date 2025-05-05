const addCustomButton = () => {
    // Prevent duplicate buttons
    if (document.querySelector('#svc-custom-button')) return;
  
    // Gmail's subject/title is in an element with the `h2` tag and `data-legacy-thread-id`
    const toolBarContainer = document.querySelector('div.bHJ');
    if (!toolBarContainer) {
        console.log('Toolbar container not found!');
        return;
    }

    const emailTitleContainer = document.querySelector('h2[data-legacy-thread-id]');
    if (!emailTitleContainer) {
        console.log('Email title not found!');
        return;
    }

    // Create wrapper div and button
    const div = document.createElement('div');
    const img = document.createElement('img');
    const mailBtn = document.createElement('button');
  
    div.id = 'svc-custom-button';
    div.style.cursor = 'pointer';
    div.style.width = '32px';
    div.style.height = '32px';
    div.style.backgroundColor = 'white';
    div.style.borderRadius = '50%';
    div.style.border = '2px solid grey';
    div.style.display = 'flex';
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
    mailBtn.style.transform = 'translateX(-50%)'; // Center the button

    mailBtn.appendChild(img);
    div.appendChild(mailBtn);

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

    mailBtn.addEventListener('click', async () => {
        const designatedEmail = "it@ebcallcenter.com";
        const threadId = emailTitleContainer.getAttribute('data-legacy-thread-id');
     
        if (!threadId) {
            console.error('Thread ID not found!');
            return;
        }

        try {
            const token = await getAccessToken();
            await forwardEmail(threadId, designatedEmail, token);
            alert('Email forwarded successfully!');
        } catch (error) {
            console.error('Error forwarding email:', error);
            alert('Failed to forward email.');
        }
    });
  
    const firstButton = toolBarContainer.querySelector('div[role="button"]');
    if (firstButton && toolBarContainer.contains(firstButton)) {
        toolBarContainer.insertBefore(div, firstButton);
    } else {
        console.warn('⚠️ firstButton not found inside toolbar — appending at end instead.');
        toolBarContainer.appendChild(div);
    }
    

    console.log('✅ Custom button added to Gmail toolbar');
  };

  // Function to get OAuth 2.0 access token
const getAccessToken = () => {
    return new Promise((resolve, reject) => {
        chrome.identity.getAuthToken({ interactive: true }, (token) => {
            if (chrome.runtime.lastError || !token) {
                reject(chrome.runtime.lastError || new Error('Failed to get access token'));
            } else {
                resolve(token);
            }
        });
    });
};

    // Function to forward the email using Gmail API
    const forwardEmail = async (threadId, toEmail, token) => {
        const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${threadId}/modify`;
        const body = {
            addLabelIds: ["SENT"],
            removeLabelIds: ["INBOX"]
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Failed to forward email: ${response.statusText}`);
        }
    };

  
  // Use MutationObserver to detect when a new email is opened
  const observer = new MutationObserver(() => {
    console.log('Mutation detected!');

    const isEmailOpen = document.querySelector('h2[data-legacy-thread-id]');
    if (isEmailOpen) {
        console.log('Email is open! Adding custom button...', isEmailOpen);
      addCustomButton();
    }
  });
  
  // Start observing the DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  