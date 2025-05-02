const addCustomButton = () => {
    // Prevent duplicate buttons
    if (document.querySelector('#svc-custom-button')) return;
  
    // Gmail's subject/title is in an element with the `h2` tag and `data-legacy-thread-id`
    const toolBarContainer = document.querySelector('div.G-tF');
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
    div.style.width = '36px';
    div.style.height = '36px';
    div.style.backgroundColor = 'white';
    div.style.borderRadius = '50%';
    div.style.border = '1px solid grey';
    div.style.display = 'flex';
    div.style.overflow = 'hidden';
  
    img.src = chrome.runtime.getURL('images/SVCLogo.png');
    img.alt = 'SVC Incident Report Button';
    img.style.width = '26px';
    img.style.height = 'auto';
    img.style.overflow = 'hidden';
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
  
    mailBtn.style.all = 'unset';
    mailBtn.style.width = '100%';
    mailBtn.style.height = '100%';
    mailBtn.style.background = 'transparent';
    mailBtn.style.border = 'none'; 

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

    mailBtn.addEventListener('click', () => {
        const designatedEmail = "louise.balili@selectvoicecom.com";
        const subject = emailTitleContainer.textContent.trim();
        const body = "This email is being forwarded to SVC for incident reporting.\n\n" + subject;
     
        // Open Gmail's compose window with the designated email
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${designatedEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
            '_blank'
        );
    });
  
    // Step 3: Insert before the first button (typically "Expand all")
    const firstButton = toolBarContainer.querySelector('div[role="button"]');
    if (firstButton && toolBarContainer.contains(firstButton)) {
        toolBarContainer.insertBefore(div, firstButton);
    } else {
        console.warn('⚠️ firstButton not found inside toolbar — appending at end instead.');
        toolBarContainer.appendChild(div);
    }
    

    console.log('✅ Custom button added to Gmail toolbar');
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
  