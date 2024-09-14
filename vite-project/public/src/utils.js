export function sumInputs() {
  let num1 = Number(document.getElementById('Number1').value);
  let num2 = Number(document.getElementById('Number2').value);

  document.getElementById('result').innerHTML = num1 + num2;
}
