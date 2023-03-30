// 1. 
// На HTML-сторінці є ненумерований список з id="list", 
// який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

let fruits = ['1', '2', '3', '4', '5'];
let order = [0, 4, 1, 3, 2];

let modal = document.getElementById('modal');
let list = document.getElementById('list');

window.onload = () => {
	let unorderedList = document.createElement('ul');
	for (let i = 0; i < order.length; i++) {
		let li = document.createElement('li');
		li.textContent = fruits[order[i]];
		unorderedList.appendChild(li);
	}

	list.appendChild(unorderedList);
	modal.style.display = 'block';
}

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}


