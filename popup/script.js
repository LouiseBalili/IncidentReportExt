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

    document.getElementById('sendMailInfo').addEventListener('click', () => {
        const recipient = 'it@ebcallcenter.com';
        const subject = 'Information Security Incident - (Specify Reason for Email/Report)';
        const body = '';
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailURL, '_blank', 'width=750, height=750, top=75, scrollbars=yes');
    });

    document.getElementById('checkURL').addEventListener('click', () => {
        window.open('information/checkValidity.html', '_blank', 'width=500, height=500, top=150');
    });

    document.getElementById('RTimeProtect').addEventListener('click', () => {

        window.open('information/RTimeProtect.html', '_blank', 'width=500, height=500, top=150');
    });

    document.getElementById('sendMailPhysical').addEventListener('click', () => {
        const recipient = 'ronald.camino@selectvoicecom.com';
        const subject = 'Physical Security Incident - (Specify Reason for Email/Report)';
        const body = '';

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailURL, '_blank', 'width=750, height=750, top=75, scrollbar=yes')
    });
});
