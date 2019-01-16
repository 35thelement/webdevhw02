// Anonymous function to avoid polluting namespace.
(function() {
  // Clear the calculator window.
  function clear() {
    // Reset the evalString.
    evalString = ' ';
    // Update the calculator window.
    document.getElementById('shown').innerHTML = evalString;
  }

  // Determine the index of the latest operation in the evalString.
  function lastOp() {
    // The index of the last + in the string.
    lastPlus = evalString.lastIndexOf('+');
    // The index of the last - in the string.
    lastMinus = evalString.lastIndexOf('-');
    // The index of the last * in the string.
    lastMult = evalString.lastIndexOf('*');
    // The index of the last / in the string.
    lastDiv = evalString.lastIndexOf('/');

    // If latest operation was a +,
    if (lastPlus > lastMinus && lastPlus > lastMult && lastPlus > lastDiv) {
      // Return that index.
      return lastPlus;
      // Otherwise, if the latest operation was a -,
    } else if (lastMinus > lastMult && lastMinus > lastDiv) {
      // Return that index.
      return lastMinus;
      // Otherwise, if the latest operation was a *,
    } else if (lastMult > lastDiv) {
      // Return that index.
      return lastMult;
      // Otherwise,
    } else {
      // Return the index of the latest /, as that's the only other operation.
      return lastDiv;
    }
  }

  // Input a new digit or operation.
  function inputNew(ch) {
    // If we put in a new number,
    if (!isNaN(parseInt(ch, 10))) {
      // Add the digit to the evalString.
      evalString += ch;
      // Otherwise, it means we put in a new operation or a decimal...
    } else {
      // If the evalString is blank,
      if (evalString === ' ' ) {
        //If the new character is a decimal or a -,
        if (ch === '-' || ch === '.') {
          // Add the character to the eval string.
          evalString += ch;
        }
        // If the evalString isn't blank,
      } else {
        // If the character is a decimal
        // and the last number in the string doesn't have a decimal in it,
        if (ch === '.' && !evalString.slice(lastOp()).includes('.')) {
          // Add the decimal to the evalString.
          evalString += ch;
          // Otherwise, the character is an operation...
        } else {
          // If the last character in the evalString is an operation
          // and the last character in the string is not a -,
          if (evalString.length - 1 === lastOp() &&
          evalString.slice(-1) !== '-') {
            // If the character is a -,
            if (ch === '-') {
              // Add the - to the evalString.
              evalString += ch;
            }
            // Otherwise, the last character is not an operation.
          } else {
            // If the evalString is still a number,
            if (!isNaN(evalString)) {
              // Add the operation to the evalString.
              evalString += ch;
              // Otherwise, if the character is a +,
            } else if (ch === '+') {
              // Then the user hit the '+/=' key and is trying to calculate.
              calculate();
            }
          }
        }
      }
    }
    // Update the calculator window.
    document.getElementById('shown').innerHTML = evalString;
  }

  // Calculate the result.
  function calculate() {
    // If the last character of the evalString isn't an operation,
    if (evalString !== ' ' && !isNaN(evalString.slice(-1), 10)) {
      // Evaluate the evalString and set it as the evalString.
      evalString = '' + eval(evalString);
      // Update the calculator window.
      document.getElementById('shown').innerHTML = evalString;
      // Reset the evalString.
      evalString = ' ';
    }
  }

  // When the DOM content is loaded...
  document.addEventListener("DOMContentLoaded", function(event) {
    // Clear the calculator.
    clear();
    // Add listeners for all the buttons on the calculator.
    document.getElementById('1').addEventListener('click', function(){ inputNew(1); });
    document.getElementById('2').addEventListener('click', function(){ inputNew(2); });
    document.getElementById('3').addEventListener('click', function(){ inputNew(3); });
    document.getElementById('4').addEventListener('click', function(){ inputNew(4); });
    document.getElementById('5').addEventListener('click', function(){ inputNew(5); });
    document.getElementById('6').addEventListener('click', function(){ inputNew(6); });
    document.getElementById('7').addEventListener('click', function(){ inputNew(7); });
    document.getElementById('8').addEventListener('click', function(){ inputNew(8); });
    document.getElementById('9').addEventListener('click', function(){ inputNew(9); });
    document.getElementById('0').addEventListener('click', function(){ inputNew(0); });
    document.getElementById('.').addEventListener('click', function(){ inputNew('.'); });
    document.getElementById('+').addEventListener('click', function(){ inputNew('+'); });
    document.getElementById('-').addEventListener('click', function(){ inputNew('-'); });
    document.getElementById('*').addEventListener('click', function(){ inputNew('*'); });
    document.getElementById('/').addEventListener('click', function(){ inputNew('/'); });
    document.getElementById('clear').addEventListener('click', function(){ clear(); });
  });
  // Immediately call function.
})();
