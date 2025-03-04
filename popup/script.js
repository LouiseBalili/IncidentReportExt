document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".btns_button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {

            buttons.forEach(b => b.classList.remove("btns_button_active"));

            button.classList.add("btns_button_active");
        });
    });
});
