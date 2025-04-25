document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('goBack').addEventListener('click', () => {
        history.back();
    });
});

async function checkCurrentURL() {
    const apiKey = "AIzaSyDkwMpa3pNPyqrZoo6D0Cx8mUGJNH6b4Dw";
    const currentURL = window.location.href;

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
                { url: currentURL }
            ]
        }
    };

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
            // Redirect to the warning page
            window.location.href = chrome.runtime.getURL('popup/warning/Warning.html');
        }
    } catch (error) {
        console.error("Error checking URL:", error);
    }
}

// Run the check when the content script is loaded
checkCurrentURL();