document.addEventListener("DOMContentLoaded", function () {
    // Tab switching logic
    const buttons = document.querySelectorAll(".btns_button");
    const informationTab = document.querySelector(".informationTab");
    const physicalTab = document.querySelector(".physicalTab");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(b => b.classList.remove("btns_button_active"));
            button.classList.add("btns_button_active");

            const buttonText = button.textContent.trim().toLowerCase();
            if (buttonText === "information") {
                physicalTab.style.display = 'none';
                informationTab.style.display = 'block';
                document.querySelector(".physical_btns").style.display = 'none';
                document.querySelector(".information_btns").style.display = 'block';
            } else if (buttonText === "physical") {
                physicalTab.style.display = 'block';
                informationTab.style.display = 'none';
                document.querySelector(".information_btns").style.display = 'none';
                document.querySelector(".physical_btns").style.display = 'block';
            }
        });
    });

    // Trigger the default button click
    const defaultButton = document.querySelector(".btns_button.btns_button_active");
    if (defaultButton) {
        defaultButton.click();
    }

    // Event listener for "Send Mail Info"
    document.getElementById('sendMailInfo').addEventListener('click', () => {
        const recipient = 'it@ebcallcenter.com';
        const ccRecipient = 'compliance@selectvoicecom.com'
        const subject = 'Information Security Incident - (Specify Reason for Email/Report)';
        const body = '';
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&cc=${ccRecipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailURL, '_blank', 'width=750, height=750, top=75, scrollbars=yes');
    });

    // Event listener for "Check URL"
    document.getElementById('checkURL').addEventListener('click', () => {
        window.open('information/urlChecker/checkValidity.html', '_blank', 'width=500, height=450, top=150');
    });

    // Event listener for "RTimeProtect"
    document.getElementById('phishingGuideline').addEventListener('click', () => {
        window.open('information/phishingGuideline/phishGuide.html', '_blank', 'width=550, height=650, top=125');
    });

    // Event listener for "Send Mail Physical"
    document.getElementById('sendMailPhysical').addEventListener('click', () => {
        const recipient = 'ronald.camino@selectvoicecom.com';
        const subject = 'Physical Security Incident - (Specify Reason for Email/Report)';
        const body = '';
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailURL, '_blank', 'width=750, height=750, top=75, scrollbar=yes');
    });

    // Event listener for "Contact Number List
    document.getElementById('contactNum').addEventListener('click', () => {
       window.open('physical/contactList.html', '_blank', 'width=600, height=600, top=150'); 
    });

    const CWSCheckURL = document.getElementById('CWSCheckURL');
    console.log("CWSCheckURL:", CWSCheckURL);
    if(CWSCheckURL) {
        CWSCheckURL.addEventListener('click', () => {
            console.log("CWSCheckURL clicked");
        });
    }
});

    // Function to check URL
    async function checkURLGSB() {
        const url = document.getElementById('urlInputCheck').value.trim();
        const apiKey = "AIzaSyDkwMpa3pNPyqrZoo6D0Cx8mUGJNH6b4Dw";

        const requestBody = {
            client: {
                clientId: "TestClient",
                clientVersion: "1.5.2"
            },
            threatInfo: {
                threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
                platformTypes: ["ANY_PLATFORM"],
                threatEntryTypes: ["URL"],
                threatEntries: [
                    { url: url }
                ]
            }
        };

        const resultDiv = document.getElementById('result');

        try {
            const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();

            if (data && data.matches && data.matches.length > 0) {
                resultDiv.innerHTML = `<span class="text-danger">⚠️ This site is flagged as unsafe!</span>`;
            } else {
                resultDiv.innerHTML = `<span class="text-success">✅ This site appears to be safe.</span>`;
            }
        } catch (error) {
            resultDiv.innerHTML = `<span class="text-warning">❌ Error: ${error.message}</span>`;
        }
}