let currentNumber = 0; // Início da função. O valor inicial é 0

var currentNumberWrapper = document.getElementById('currentNumber'); 

//cada vez que apertarmos o botão, irá somar 1
function increment() {  
	if (currentNumber >= 0) {
		document.getElementById("currentNumber").style.color='white';
	}
	currentNumber++;
	currentNumberWrapper.innerHTML = currentNumber;
}

//cada vez que apertarmos o botão, o número será subtraído em 1
function decrement() { 
	if (currentNumber <= 0) {
		document.getElementById("currentNumber").style.color='red';
	}
	currentNumber--;
	currentNumberWrapper.innerHTML = currentNumber;
}


document.getElementById('increment') .addEventListener('click', increment)
document.getElementById('decrement') .addEventListener('click', decrement)