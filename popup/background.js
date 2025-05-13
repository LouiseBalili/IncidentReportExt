chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'getToken') {
        // Request the OAuth token from Chrome Identity API
        chrome.identity.getAuthToken({ interactive: true }, (token) => {
            if (chrome.runtime.lastError || !token) {
                sendResponse({ error: chrome.runtime.lastError?.message || 'Failed to get token' });
            } else {
                sendResponse({ token }); // Send the token back to the content script
            }
        });
        return true; // Keep the message channel open for async response
    }
});
