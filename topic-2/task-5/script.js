// Користувач вводить три довжини сторін трикутника 
// (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
//     a) визначити і вивести в консоль площу трикутника 
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, 
// в іншому випадку вивести 'Incorrect data‘. Результат обчислення 
// площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

let a = prompt('Enter the first side of the triangle');
let b = prompt('Enter the second side of the triangle');
let c = prompt('Enter the third side of the triangle');

if (!a || !b || !c) {
	console.log('Empty value'); 
} else {
	let triangleArea = ((a + b + c) / 2).toFixed(3);
	console.log(triangleArea);;

	if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) { // є якийсь коротший варінт і як правильно перевірити що значення пусті або null?
		console.log('The triangle is rectangular');
	} else {
		console.log('Incorrect data');
	}
}
