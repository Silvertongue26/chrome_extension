function getSelectedText() {
  const selection = window.getSelection();
  return selection.toString().trim();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getSelectedText') {
    const selectedText = getSelectedText();
    sendResponse({ selectedText });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getSuggestions') {
    const { word } = message;
    
    // Implement logic to fetch suggestions for the misspelled word
    const suggestions = getSuggestionsForWord(word);

    sendResponse({ suggestions });
  }
});

function getSuggestionsForWord(word) {
  // Implement logic to fetch suggestions for the misspelled word
  // You can use external libraries or APIs for suggestion generation

  // For this example, let's assume a static list of suggestions
  const suggestions = ['spelling', 'correction', 'fix'];

  return suggestions;
}

chrome.contextMenus.create({
  id: 'grammarGuruContextMenu',
  title: 'Grammar Guru - Get Suggestions',
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'grammarGuruContextMenu') {
    const selectedText = info.selectionText;

    chrome.tabs.sendMessage(tab.id, { type: 'getSuggestions', word: selectedText }, (response) => {
      if (response && response.suggestions) {
        const suggestions = response.suggestions;
        // Display the suggestions to the user as per your UI design
        console.log('Suggestions:', suggestions);
      }
    });
  }
});
