function clearOutput() {
    document.getElementById('output').innerText = '';
}

function appendToOutput(value) {
    document.getElementById('output').innerText += value;
}

function calculateResult() {
    try {
        document.getElementById('output').innerText = eval(document.getElementById('output').innerText);
    } catch (error) {
        document.getElementById('output').innerText = 'Error';
    }
}