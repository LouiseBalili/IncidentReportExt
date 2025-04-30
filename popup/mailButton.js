document.addEventListener('DOMContentLoaded', () => {
    const designatedEmail = "forward@example.com"; // Replace with your designated email address

    // Function to inject the button beside the email title
    function injectButton() {
        // Select the email title container (adjust the selector based on Gmail's structure)
        const emailTitleContainer = document.querySelector('.hP'); // Gmail's email title class

        if (emailTitleContainer && !document.querySelector('.custom-forward-button')) {
            const forwardButton = document.createElement('button');
            forwardButton.textContent = "Forward";
            forwardButton.className = "custom-forward-button";
            forwardButton.style.marginLeft = "10px";
            forwardButton.style.padding = "5px 10px";
            forwardButton.style.backgroundColor = "#1263c6";
            forwardButton.style.color = "white";
            forwardButton.style.border = "none";
            forwardButton.style.borderRadius = "5px";
            forwardButton.style.cursor = "pointer";

            // Add click event to forward the email
            forwardButton.addEventListener('click', () => {
                const subject = emailTitleContainer.textContent; 
                const body = "This email is being forwarded."; 

                // Open Gmail's compose window with the designated email
                window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${designatedEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
                    '_blank'
                );
            });

            emailTitleContainer.parentNode.appendChild(forwardButton);
        }
    }

    const observer = new MutationObserver(() => {
        injectButton();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    injectButton();
});