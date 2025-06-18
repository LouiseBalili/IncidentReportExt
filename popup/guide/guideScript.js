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
                    const isCurrent = content.classList.contains(stepClass);
                    content.style.display = isCurrent ? 'block' : 'none';

                    const video = content.querySelector("video");
                    if (video) {
                        if (isCurrent) {
                            video.currentTime = 0;
                            video.play().catch(err => {
                                console.warn("Autoplay failed:", err);
                            });
                        } else {
                            video.pause();
                        }
                    }
                });
            }
        });
    });

    // Trigger the default button click
    const defaultButton = document.querySelector(".btns_button.btns_button_active");
    if (defaultButton) {
        defaultButton.click();
    }

    const step1Next = document.querySelector(".step1_nextBtn");
    if (step1Next) {
        step1Next.addEventListener("click", () => {
            const step2Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 2 explore features";
            });

            if (step2Button) {
                step2Button.click();
            }
        });
    }
    const step2Next = document.querySelector(".step2_nextBtn");
    if (step2Next) {
        step2Next.addEventListener("click", () => {
            const step3Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 3 pin extension";
            });

            if (step3Button) {
                step3Button.click();
            }
        });
    }
    const step3Next = document.querySelector(".step3_nextBtn");
    if (step3Next) {
        step3Next.addEventListener("click", () => {
            const step4Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 4 report phishing";
            });

            if (step4Button) {
                step4Button.click();
            }
        });
    }
    const step4Next = document.querySelector(".step4_nextBtn");
    if (step4Next) {
        step4Next.addEventListener("click", () => {
            const step5Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 5 start browsing";
            });

            if (step5Button) {
                step5Button.click();
            }
        });
    }
    const step2Prev = document.querySelector(".step2_prevBtn");
    if (step2Prev) {
        step2Prev.addEventListener("click", () => {
            const step1Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 1 find extension";
            });

            if (step1Button) {
                step1Button.click();
            }
        });
    }
    const step3Prev = document.querySelector(".step3_prevBtn");
    if (step3Prev) {
        step3Prev.addEventListener("click", () => {
            const step2Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 2 explore features";
            });

            if (step2Button) {
                step2Button.click();
            }
        });
    }
    const step4Prev = document.querySelector(".step4_prevBtn");
    if (step4Prev) {
        step4Prev.addEventListener("click", () => {
            const step3Button = Array.from(buttons).find(button => {
                const text = button.querySelector(".buttonText").textContent
                    .replace(/\s+/g, ' ').trim().toLowerCase();
                return text === "step 3 pin extension";
            });

            if (step3Button) {
                step3Button.click();
            }
        });
    }

    const closeBtn = document.getElementById('closeButton');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chrome.runtime.sendMessage({ action: 'closeTab' });
        });
    }
});

