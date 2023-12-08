function appendToResult(value) {
  let result = document.getElementById('result');
  result.value += value;
 }
 
 function clearResult() {
  let result = document.getElementById('result');
  result.value = '';
 }
 
 function calculateResult() {
  let result = document.getElementById('result');
  try {
     result.value = eval(result.value);
  } catch (error) {
     result.value = 'salah bg';
  }
 }