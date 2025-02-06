const display = document.getElementById('display');
function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = '';
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1000);
  }
}
// Add keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9' || key === '.' || key === '+' ||
    key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});