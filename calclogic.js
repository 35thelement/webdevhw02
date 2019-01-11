// Clear the calculator window.
function clear() {
  // Reset the evalString.
  evalString = ' ';
  // Update the calculator window.
  document.getElementById('shown').innerHTML = evalString;
  // Indicate that we're not done with our new calculation.
  done = false;
}

// Input a new digit or operation.
function inputNew(ch) {
  // If we put in a new number,
  if (!isNaN(parseInt(ch, 10))) {
    // If we just finished a calculation,
    if(done) {
      // Clear the evalString.
      clear();
    }
    // Add the digit to the evalString.
    evalString += ch;
  // Otherwise, it means we put in a new operation or a decimal...
  } else {
    // If the eval string isn't blank and the last character is a number,
    if (evalString !== ' ' && !isNaN(evalString.slice(-1), 10)) {
      // Add the operation/decimal to the evalString.
      evalString += ch;
    }
    // Indicate that we're not done with the current calculation.
    done = false;
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
    // Indicate that we're done with our current calculation.
    done = true;
  }
}

// Add listeners for window and buttons.
document.addEventListener("DOMContentLoaded", function(event) {
  clear();
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
  document.getElementById('=').addEventListener('click', function(){ calculate(); });
  document.getElementById('clear').addEventListener('click', function(){ clear(); });
});
