document.addEventListener('DOMContentLoaded', () => {
    const designatedEmail = "it@ebcallcenter.com"; 

    // Function to inject the button into Gmail's email threads
    function injectForwardButton() {
        // Select all email threads (adjust the selector based on Gmail's structure)
        const emailThreads = document.querySelectorAll('.zA'); // Gmail's email thread class

        emailThreads.forEach((thread) => {
            // Check if the button is already added
            if (thread.querySelector('.forward-button')) return;

            // Create the forward button
            const forwardButton = document.createElement('button');
            forwardButton.textContent = "Forward";
            forwardButton.className = "forward-button";
            forwardButton.style.marginLeft = "10px";
            forwardButton.style.padding = "5px 10px";
            forwardButton.style.backgroundColor = "#1263c6";
            forwardButton.style.color = "white";
            forwardButton.style.border = "none";
            forwardButton.style.borderRadius = "5px";
            forwardButton.style.cursor = "pointer";

            // Add click event to forward the email
            forwardButton.addEventListener('click', () => {
                const subject = thread.querySelector('.bog').textContent; // Email subject
                const body = "This email is being forwarded."; // Add your custom body content

                // Open Gmail's compose window with the designated email
                window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${designatedEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
                    '_blank'
                );
            });

            // Append the button to the thread
            const threadActions = thread.querySelector('.yX'); // Adjust selector for Gmail's action area
            if (threadActions) {
                threadActions.appendChild(forwardButton);
            }
        });
    }

    // Observe Gmail's DOM for changes (e.g., when navigating between emails)
    const observer = new MutationObserver(() => {
        injectForwardButton();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial injection
    injectForwardButton();
});