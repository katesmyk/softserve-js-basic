// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

const arr = [5, 3, 4, 5,6,7,3];

function compact(oldArr) {
	return arr.filter((item, index) => arr.indexOf(item) === index);
}
const arr2 = compact(arr);
console.log(arr2) ;
