

// assign the length in feet
const lengthInFeet = 1.5;

// assign the price per foot
const pricePerFoot = 2.50;

// calculate the total price
const totalPrice = lengthInFeet * pricePerFoot;

// display the result in the element with id 'result'
const resultEl = document.getElementById('result');
if (resultEl) {
	resultEl.innerHTML = totalPrice;
}

