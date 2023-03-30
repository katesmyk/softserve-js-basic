const data = document.querySelectorAll('.arr');
const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");
// const labels = document.querySelector('fieldset').querySelectorAll('input');

// labels.forEach(label => console.log(label.name));

btn.addEventListener("click", () => {
	const inputValues = [];
	
	data.forEach(input => {
		inputValues.push(input.value);
	});
	outBlock.innerHTML = inputValues.join('<br>');
});

