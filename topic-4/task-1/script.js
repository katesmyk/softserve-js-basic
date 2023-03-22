// Напишіть функцію sumSliceArray(arr, first, second), 
// яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, 
// які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або 
// обидва більшого розміру за довжину масиву. Напишіть код, який використовує цю функцію, 
// передбачте обробку можливих винятків.

let arr = [1, 2, 5, 3, 7, 9, 11, 15, 17, 19];
let arreyIndexes = arr.length - 1;
console.log('arreyIndexes', arreyIndexes);

function sumSliceArray(arr, first, second) {
	if (typeof first !== 'number' || typeof second !== 'number') {
		throw new Error('Введіть число');
  	} else if (first >= arr.length || second >= arr.length) {
		throw new Error('Введіть число менше за довжину масиву');
  	} else if (first < 0 || second < 0) {
		throw new Error('Введіть число більше за 0');
	} else {
		return arr[first] + arr[second];
  }
}

let result = sumSliceArray(arr, 3, 9);
console.log(result);