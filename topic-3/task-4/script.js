// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими 
// цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);


let randArray = function(k) {
	let arr = [];
	if( k <= 0 ) {
		return 'Число має бути більше 0';
	}
	for (let i = 0; i < k; i++) {
		arr.push(Math.floor(Math.random() * 500) + 1);
	}
	return arr;
}

let randArrayResult = randArray('2');
console.log(randArrayResult);