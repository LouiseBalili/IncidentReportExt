document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btns_button");
    const informationTab = document.querySelector(".informationTab");
    const physicalTab = document.querySelector(".physicalTab");

    buttons.forEach(button => {
        button.addEventListener("click", function() {

            buttons.forEach(b => b.classList.remove("btns_button_active"));

            button.classList.add("btns_button_active");

            const buttonText = button.textContent.trim().toLowerCase();
            if (buttonText === "information") {
                physicalTab.style.display = 'none';
                informationTab.style.display = 'block';
                document.querySelector(".physical").style.display = 'none';
                document.querySelector(".information_btns").style.display = 'block';
            } else if (buttonText === "physical") {
                physicalTab.style.display = 'block';
                informationTab.style.display = 'none';
                document.querySelector(".information_btns").style.display = 'none';
                document.querySelector(".physical").style.display = 'block';
            }
        });

        const defaultButton = document.querySelector(".btns_button.btns_button_active");
        if (defaultButton) {
            defaultButton.click();
        }
    });
});
