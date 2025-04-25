document.addEventListener('DOMContentLoaded', () => {
    const CWSCheckURL = document.getElementById('CWSCheckURL');
    if(CWSCheckURL) {
        CWSCheckURL.addEventListener('click', checkURLGSB);
    }
});

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