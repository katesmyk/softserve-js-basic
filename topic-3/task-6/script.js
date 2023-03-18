// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій 
// та повертає її результат. Вид операції 
// визначається цілим числом op:
//  1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.


let a = 5;
let b = 10;
let op = 3;

function calc(a, b, op) {
  if (op === 1) {
	 return a - b;
  } else if (op === 2) {
	 return a * b;
  } else if (op === 3) {
	 return a / b;
  } else {
	 return a + b;
  }
}

let result = calc(a, b, op);
console.log(result);