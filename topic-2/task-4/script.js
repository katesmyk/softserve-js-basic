// Задано масив чисел, знайти число яке найбільш часто входить в масив,
//  занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data = ... // 5
// ...
// console.log(arr) // [4, 2, 1, 6, 3, 2]

// Варіант 1
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = arr.filter((item, index) => arr.indexOf(item) !== index); //Може тупо, але я не розумію як це працює точно. Як ми знаємо значення індексів які порівнюємо? Чи це просто вбудована функція яка виконує цю роботу( саме знає значення індексу)?
let maxReapeted = data.reduce((a, b) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b)); 
let newArr = arr.filter(item => item !== maxReapeted);
console.log(newArr);
// Я нагуглила рішення з reduce і не розумію до кінця як це працює. Якщо можна, будь ласка, поясніть як це працює. 
// Я все таки не розумію до кінця чому тут саме reduce і що точно він тут виконує (порівнює значення а і b, a як визначились дані які потрапили у a і b?). 



// Варіант 2 - спроба замість reduce
// ----------------------------------------------//
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let data = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(data);

// let maxValue = 0;
// for (let i = 0; i < data.length; i++) {
// 	if (data[i] > maxValue) {
// 		maxValue = data[i];
// 	} else {
// 		maxValue = maxValue;
// 	}
// }
// console.log(maxValue);

// let newArr = arr.filter(item => item !== maxValue);
// console.log(newArr);


// ==============================================//

// Варіант 3

// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// let data = {};
// for (let i = 0; i < arr.length; i++) {
// 	if (data[arr[i]]) {
// 	 data[arr[i]] += 1;
//   	} else {
// 	 data[arr[i]] = 1;
//   }
// }
// console.log(data);  // це отак працює фільтрація і порівняння значень в масиві?

// let maxValue = 0;
// let maxKey = 0;
// for (let key in data) {
// 	if (data[key] > maxValue) {
// 		maxValue = data[key];
// 		maxKey = key;
// 	}
// }
// console.log(maxKey);

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] !== Number(maxKey)) {
// 		newArr.push(arr[i]);
// 	}
// }
// console.log(newArr);