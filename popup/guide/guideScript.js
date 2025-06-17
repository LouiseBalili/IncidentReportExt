  document.addEventListener("DOMContentLoaded", function () {
    // Tab switching logic
    const buttons = document.querySelectorAll(".btns_button");
    const stepMap = {
        "step 1 find extension": "step1",
        "step 2 explore features": "step2",
        "step 3 pin extension": "step3",
        "step 4 report phishing": "step4",
        "step 5 start browsing": "step5"
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(b => b.classList.remove("btns_button_active"));
            button.classList.add("btns_button_active");

            const getBtnText = button.querySelector(".buttonText");
            const buttonText = getBtnText.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
            const stepClass = stepMap[buttonText];

            if (stepClass) {
                document.querySelectorAll(".guide_content").forEach(content => {
                    content.style.display = content.classList.contains(stepClass) ? 'block' : 'none';
                });
            }
        });
    });

    // Trigger the default button click
    const defaultButton = document.querySelector(".btns_button.btns_button_active");
    if (defaultButton) {
        defaultButton.click();
    }
});

 document.getElementById('closeBtn').addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'closeTab' });
    });