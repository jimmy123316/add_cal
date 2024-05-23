function calculate() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = num1 + num2;
    document.getElementById('result').innerText = 'Result: ' + result;
}
