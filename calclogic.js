// Clear the calculator window.
function clear() {
  // Reset the evalString.
  evalString = '0';
  // Update the calculator window.
  document.getElementById('shown').innerHTML = evalString;
  // Indicate that we're not done with our new calculation.
  done = false;
}

// Input a new digit or operation.
function inputNew(ch) {
  // If we just finished a calculation and we put in a new number,
  if (done && !isNaN(parseInt(ch, 10))) {
    // Clear the evalString.
    clear();
    // Otherwise, it means we put in a new operation, and therefore...
  } else {
    // ...we're not done, so we need to change the done variable.
    done = false;
  }
  // Add the digit/operation to the evalString.
  evalString += ch;
  // Update the calculator window.
  document.getElementById('shown').innerHTML = evalString;
}

// Calculate the result.
function calculate() {
  // Evaluate the evalString and set it as the evalString.
  evalString = '' + eval(evalString);
  // Update the calculator window.
  document.getElementById('shown').innerHTML = evalString;
  // Indicate that we're done with our current calculation.
  done = true;
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
