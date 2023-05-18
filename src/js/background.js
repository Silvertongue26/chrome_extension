chrome.runtime.onInstalled.addListener(() => {
	console.log('Grammar Guru extension installed.');
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
  