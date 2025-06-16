 document.getElementById('closeBtn').addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'closeTab' });
    });

    document.addEventListener("DOMContentLoaded", function () {
    // Tab switching logic
    const buttons = document.querySelectorAll(".btns_button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(b => b.classList.remove("btns_button_active"));
            button.classList.add("btns_button_active");

            const buttonText = button.textContent.trim().toLowerCase();
            if (buttonText === "step 1") {
                document.querySelector(".step2").style.display = 'none';
                document.querySelector(".step1").style.display = 'block';
            } else if (buttonText === "step 2") {
                document.querySelector(".step1").style.display = 'none';
                document.querySelector(".step2").style.display = 'block';
            }
        });
    });

    // Trigger the default button click
    const defaultButton = document.querySelector(".btns_button.btns_button_active");
    if (defaultButton) {
        defaultButton.click();
    }
});