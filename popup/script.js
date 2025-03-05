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

    document.getElementById('sendMail').addEventListener('click', () => {
        const recipient = 'it@ebcallcenter.com';
        const subject = 'Information Security Incident - (Specify Reason for Email/Report)';
        const body = '';
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, '_blank', 'width=750,height=750,top=75,scrollbars=yes');
    });

    document.getElementById('checkValidity').addEventListener('click', () => {
        window.open('checkValidity.html', '_blank', 'width=450,height=450,top=150,right=1000');
    });
});
