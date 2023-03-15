// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]


function createArray(start, end, step) {
	if(typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number'){
		console.log('Невірний тип даних');
	} else if (start >= end) {
		console.log('Початкове значення не може бути більшим або дорівнювати кінцевому значенню');
	} else if (step <= 0) {
		console.log('Крок не може дорівнювати нулю або бути меншим за 0');
	} else if (Math.abs(step) >= Math.abs(end - start)) {
    console.log('Крок не може бути більшим за діапазон або дорівнювати діапазону');
	} else {
		let newArr = [];
		for (let i = start; i <= end; i += step) {
			newArr.push(Number(i.toFixed(1)));
		}
		return newArr;
	}
}

let arr = createArray(-10, -1, 1);
console.log(arr);
