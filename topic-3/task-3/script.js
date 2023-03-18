// Задані цілі числа a і b (a < b). 
// Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз,
//  число а+1 - два рази і т.д.

let a = 1;
let b = 12;
let range = [];

let displayRange = function(a, b) {
	if( a >= b ) {
		console.log('A must be less than B or A must not be equal B');
	} else if( typeof a !== 'number' || typeof b !== 'number' ) {
		console.log('A and B must be numbers');
	} else {
		for (let i = a; i <= b; i++) {
			for (let j = a; j <= i; j++) {
				range.push(Number(i));
			}
		}
		return range
	}
}

let rangeResult = displayRange( a, b );
console.log(rangeResult);


