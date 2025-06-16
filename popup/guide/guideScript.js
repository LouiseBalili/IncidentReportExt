 document.getElementById('closeBtn').addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'closeTab' });
    });