chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: 'popup/tutorial.html' });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'closeTab' && sender.tab && sender.tab.id) {
    chrome.tabs.remove(sender.tab.id);
  }
});