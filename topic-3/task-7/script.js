// Напишіть функцію findUnique(arr), 
// яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true.



let arr = [1, 2, 5, 3];

function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
	 for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] === arr[j]) {
		  return false;
		}
	 }
  }
  return true;
}

let result = findUnique(arr);
console.log(result);

// Незнаю як перевірити якщо строка в масиві дорівнює числу в масиві, тому знайшла отаке рішення, сама мабуть ен зробила б так. ЧИ є іншщий спосіб перевірки?

// function findUnique(arr) {
//   let data = arr.map(item => String(item)).filter((item, index, array) => array.indexOf(item) !== index);
//   return data.length === 0;
// }

// let result = findUnique(arr);
// console.log(result);