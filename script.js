let meter = document.getElementById('meter')
let seconds = document.getElementById('seconds')
let result = document.getElementById('result')
let string = '';
function calculate() {
  string = (meter.value / seconds.value) * 3.6;
  if (string == 'Infinity') {
    result.textContent = '0.00'
  }else {
      result.textContent = string.toFixed(2);
  }
}