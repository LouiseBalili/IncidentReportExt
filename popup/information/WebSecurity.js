// import { GoogleSafeBrowsingClient } from 'google-safe-browsing';
// const client = new GoogleSafeBrowsingClient("AIzaSyDkwMpa3pNPyqrZoo6D0Cx8mUGJNH6b4Dw");

document.addEventListener('DOMContentLoaded', () => {
    const CWSCheckURL = document.getElementById('CWSCheckURL');
    if(CWSCheckURL) {
        CWSCheckURL.addEventListener('click', checkURLGSB);
    }

    scheduleDTLUpdate();
});

async function updateThreatList() {
    const apiKey = "AIzaSyDkwMpa3pNPyqrZoo6D0Cx8mUGJNH6b4Dw";
    const requestBody = {
        client: {
            clientId: "TestClient",
            clientVersion: "1.5.2"
        },
        listUpdateRequests: [
            {
                threatType: "MALWARE",
                platformType: "ANY_PLATFORM",
                threatEntryType: "URL",
                state: ""
            },
            {
                threatType: "SOCIAL_ENGINEERING",  
                platformType: "ANY_PLATFORM",
                threatEntryType: "URL", 
                state: ""
            },
                
                {
                    threatType: "UNWANTED_SOFTWARE",
                    platformType: "ANY_PLATFORM",
                    threatEntryType: "URL",
                    state: ""
                },
                {
                    threatType: "POTENTIALLY_HARMFUL_APPLICATION",
                    platformType: "ANY_PLATFORM",
                    threatEntryType: "URL",
                    state: ""
                }
        ]
    };

    try {
        const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Threat List Update Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Threat List Update Response:", data);
    } catch (error) {
        console.error("Error updating threat list:", error);
    }
}

function scheduleDTLUpdate() {
    const apiKey = "AIzaSyDkwMpa3pNPyqrZoo6D0Cx8mUGJNH6b4Dw";
    const updateInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    updateThreatList(apiKey);
    setInterval(() => {
        updateThreatList(apiKey);
    }, updateInterval);
    console.log("Scheduled daily update for the threat list.");
}

async function checkURLGSB() {
    const url = document.getElementById('urlInputCheck').value.trim();
    const apiKey = "AIzaSyDkwMpa3pNPyqrZoo6D0Cx8mUGJNH6b4Dw";

    const resultDiv = document.getElementById('result');

    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

    // Validate the input URL
    if (!urlPattern.test(url)) {
        resultDiv.innerHTML = `<span class="text-warning">❌ Error: Please enter a valid domain or URL.</span>`;
        return;
      }

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

// async function checkURLWithClient() {
//     const url = document.getElementById('urlInputCheck').value.trim();
//     const resultDiv = document.getElementById('result');

//     const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

//     // Validate the input URL
//     if (!urlPattern.test(url)) {
//         resultDiv.innerHTML = `<span class="text-warning">❌ Error: Please enter a valid domain or URL.</span>`;
//         return;
//     }

//     try {
//         // Check if the URL is safe using the google-safe-browsing client
//         const isSafe = await client.isUrlSafe(url);

//         if (isSafe) {
//             resultDiv.innerHTML = `<span class="text-success">✅ This site appears to be safe.</span>`;
//         } else {
//             resultDiv.innerHTML = `<span class="text-danger">⚠️ This site is flagged as unsafe!</span>`;
//         }
//     } catch (error) {
//         resultDiv.innerHTML = `<span class="text-warning">❌ Error: ${error.message}</span>`;
//     }
// }