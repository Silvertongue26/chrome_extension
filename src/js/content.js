chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'highlightErrors') {
    const textboxes = document.querySelectorAll('input[type="text"], textarea');
    textboxes.forEach((textbox) => {
      highlightErrorsInTextbox(textbox);
    });
  }
});

function highlightErrorsInTextbox(textbox) {
  const text = textbox.value;
  const words = text.split(' ');

  words.forEach((word) => {
    if (isErrorWord(word)) {
      const span = document.createElement('span');
      span.className = 'grammar-guru-error';
      span.innerText = word;
      textbox.parentNode.insertBefore(span, textbox.nextSibling);
    }
  });
}

function isErrorWord(word) {
  // Implement your own logic to check for spelling errors
  // You can use external libraries or APIs for spell checking

  // Return true if the word is an error, otherwise false
  return false;
}

// Run the highlighting function when the page loads
chrome.runtime.sendMessage({ type: 'highlightErrors' });
