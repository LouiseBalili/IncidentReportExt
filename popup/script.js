document.addEventListener("DOMContentLoaded", () => {
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

    const checkURLAPI = document.getElementById('checkURLAPI');
    if (checkURLAPI) {
        checkURLAPI.addEventListener('click', async () => {
            console.log("button clicked!");
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
                    threatEntries: [{ url }]
                }
            };
            
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = "Loading...";
    
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
                // console.log("Safe Browsing API Response:", data); 
    
                if (data && data.matches && data.matches.length > 0) {
                    resultDiv.innerHTML = `<span class="text-danger">⚠️ This site is flagged as unsafe!</span>`;
                } else {
                    resultDiv.innerHTML = `<span class="text-success">✅ This site appears to be safe.</span>`;
                }
            } catch (error) {
                resultDiv.innerHTML = `<span class="text-warning">❌ Error: ${error.message}</span>`;
            }
        });
    } else {
        console.error("Element with ID 'checkURLAPI' not found.");
    }
    

});

