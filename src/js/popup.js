document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('check-button');
    var textInput = document.getElementById('text-input');
    var resultDiv = document.getElementById('result');
  
    checkButton.addEventListener('click', function() {
      var text = textInput.value;
  
      // Implement your grammar checking logic here
      var hasMistakes = checkGrammar(text);
  
      if (hasMistakes) {
        resultDiv.textContent = 'There are grammar mistakes in your text.';
      } else {
        resultDiv.textContent = 'No grammar mistakes found.';
      }
    });
  });
  
  function checkGrammar(text) {
    // Add your grammar checking logic here
    // Return true if there are mistakes, false otherwise
    // You can use libraries or APIs for grammar checking
  
    // Example: Simple check for the word "mistake" in the text
    return text.toLowerCase().includes('mistake');
  }
  