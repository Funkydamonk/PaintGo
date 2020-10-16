const colorPicker = document.querySelector('.color-picker');
const rubber = document.querySelector('.rubber');
const reset = document.querySelector('.reset');
const bodyPixels = document.querySelectorAll('.body__pixel');

reset.onclick = function() {
	for (const bodyPixel of bodyPixels) {
		bodyPixel.style.backgroundColor = 'white';
	}
}

for (const bodyPixel of bodyPixels) {
	bodyPixel.onclick = function() {
		if (rubber.checked) {
			bodyPixel.style.backgroundColor = 'white';
		} else {
			bodyPixel.style.backgroundColor = colorPicker.value;
		}
	}
}